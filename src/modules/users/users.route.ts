import { Hono } from "hono";
import { auth } from "../../utils/auth";
import { zValidator } from "@hono/zod-validator";
import { updateUserSchema, userPaginationSchema } from "./users.schema";
import { usersService } from "./users.service";

export const usersRouter = new Hono<{
  Variables: {
    user: typeof auth.$Infer.Session.user;
    session: typeof auth.$Infer.Session.session;
  };
}>()
  .get("/", zValidator("query", userPaginationSchema), async (c) => {
    const queryFilter = c.req.valid("query");

    try {
      const result = await usersService.getAllUsers(queryFilter);

      return c.json({
        status: "success",
        ...result,
      });
    } catch (error) {
      return c.json({ status: "error", message: String(error) }, 500);
    }
  })
  .get("/me", async (c) => {
    const currentUser = c.get("user");

    try {
      const userProfile = await usersService.getUserById(currentUser.id);

      if (!userProfile) {
        return c.json({ status: "error", message: "User not found!" }, 404);
      }

      return c.json({
        status: "success",
        data: userProfile,
      });
    } catch (error) {
      return c.json({ status: "error", message: String(error) }, 500);
    }
  })
  .put("/me", zValidator("json", updateUserSchema), async (c) => {
    const currentUser = c.get("user");
    const jsonBody = c.req.valid("json");

    try {
      const updatedUser = await usersService.updateUser(
        currentUser.id,
        jsonBody,
      );

      return c.json({
        status: "success",
        message: "Profile has been updated successfuly",
        data: updatedUser,
      });
    } catch (error) {
      return c.json({ status: "error", message: String(error) }, 500);
    }
  })
  .get("/:id", async (c) => {
    const id = c.req.param("id");

    try {
      const userProfile = await usersService.getUserById(String(id));

      if (!userProfile) {
        return c.json({ status: "error", message: "User not found!" }, 404);
      }

      return c.json({
        status: "success",
        data: userProfile,
      });
    } catch (error) {
      return c.json({ status: "error", message: String(error) }, 500);
    }
  })
  .put("/:id", zValidator("json", updateUserSchema), async (c) => {
    const id = c.req.param("id");
    const jsonBody = c.req.valid("json");

    try {
      const updatedUser = await usersService.updateUser(id, jsonBody);

      return c.json({
        status: "success",
        message: "The user has been updated successfuly",
        data: updatedUser,
      });
    } catch (error) {
      return c.json({ status: "error", message: String(error) }, 500);
    }
  });
