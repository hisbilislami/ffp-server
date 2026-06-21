import { auth } from "../../utils/auth";
import { usersService } from "./users.service";
import { OpenAPIHono } from "@hono/zod-openapi";
import {
  getAllUsersRoute,
  getMeRoute,
  getUserByIdRoute,
  updateMeRoute,
  updateUserByIdRoute,
} from "./users.openapi";

export const usersRouter = new OpenAPIHono<{
  Variables: {
    user: typeof auth.$Infer.Session.user;
    session: typeof auth.$Infer.Session.session;
  };
}>()
  .openapi(getAllUsersRoute, async (c) => {
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
  .openapi(getMeRoute, async (c) => {
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
  .openapi(updateMeRoute, async (c) => {
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
  .openapi(getUserByIdRoute, async (c) => {
    const { id } = c.req.valid("param");
    try {
      const userProfile = await usersService.getUserById(id);
      if (!userProfile) {
        return c.json({ status: "error", message: "User not found!" }, 404);
      }
      return c.json({ status: "success", data: userProfile });
    } catch (error) {
      return c.json({ status: "error", message: String(error) }, 500);
    }
  })
  .openapi(updateUserByIdRoute, async (c) => {
    const { id } = c.req.valid("param");
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
