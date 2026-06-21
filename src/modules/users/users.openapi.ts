import { defineOpenAPIRoute, createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import {
  updateUserSchema,
  userPaginationSchema,
  userResponseSchema,
  updateUserResponseSchema,
} from "./users.schema";
import {
  createSuccessResponse,
  createPaginatedResponse,
  errorResponses,
} from "../../utils/openapi-responses";
import { usersService } from "./users.service";
import { auth } from "../../utils/auth";

type Variables = {
  user: typeof auth.$Infer.Session.user;
  session: typeof auth.$Infer.Session.session;
};

export const getAllUsersRoute = defineOpenAPIRoute({
  route: createRoute({
    method: "get",
    path: "/",
    tags: ["Users"],
    summary: "Get all users",
    request: {
      query: userPaginationSchema,
    },
    responses: {
      ...createPaginatedResponse(userResponseSchema),
      ...errorResponses(
        HttpStatusCodes.UNAUTHORIZED,
        HttpStatusCodes.INTERNAL_SERVER_ERROR,
      ),
    },
  }),
  handler: async (c) => {
    const queryFilter = c.req.valid("query");
    try {
      const result = await usersService.getAllUsers(queryFilter);
      return c.json({ status: "success", ...result });
    } catch (error) {
      return c.json({ status: "error", message: String(error) }, 500);
    }
  },
});

export const getMeRoute = defineOpenAPIRoute({
  route: createRoute({
    method: "get",
    path: "/me",
    tags: ["Users"],
    summary: "Get current user",
    responses: {
      ...createSuccessResponse(userResponseSchema),
      ...errorResponses(
        HttpStatusCodes.UNAUTHORIZED,
        HttpStatusCodes.NOT_FOUND,
        HttpStatusCodes.INTERNAL_SERVER_ERROR,
      ),
    },
  }),
  handler: async (c) => {
    const currentUser = c.get("user");
    try {
      const userProfile = await usersService.getUserById(currentUser.id);
      if (!userProfile) {
        return c.json({ status: "error", message: "User not found!" }, 404);
      }
      return c.json({ status: "success", data: userProfile });
    } catch (error) {
      return c.json({ status: "error", message: String(error) }, 500);
    }
  },
});

export const updateMeRoute = defineOpenAPIRoute({
  route: createRoute({
    method: "put",
    path: "/me",
    tags: ["Users"],
    summary: "Update current user",
    request: {
      body: {
        content: {
          "application/json": {
            schema: updateUserSchema,
          },
        },
      },
    },
    responses: {
      ...createSuccessResponse(updateUserResponseSchema),
      ...errorResponses(
        HttpStatusCodes.BAD_REQUEST,
        HttpStatusCodes.UNAUTHORIZED,
        HttpStatusCodes.UNPROCESSABLE_ENTITY,
        HttpStatusCodes.INTERNAL_SERVER_ERROR,
      ),
    },
  }),
  handler: async (c) => {
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
  },
});

export const getUserByIdRoute = defineOpenAPIRoute({
  route: createRoute({
    method: "get",
    path: "/{id}",
    tags: ["Users"],
    summary: "Get user by id",
    request: {
      params: z.object({
        id: z.string().openapi({ example: "user-123" }),
      }),
    },
    responses: {
      ...createSuccessResponse(userResponseSchema),
      ...errorResponses(
        HttpStatusCodes.UNAUTHORIZED,
        HttpStatusCodes.NOT_FOUND,
        HttpStatusCodes.INTERNAL_SERVER_ERROR,
      ),
    },
  }),
  handler: async (c) => {
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
  },
});

export const updateUserByIdRoute = defineOpenAPIRoute({
  route: createRoute({
    method: "put",
    path: "/{id}",
    tags: ["Users"],
    summary: "Update user by id",
    request: {
      params: z.object({
        id: z.string().openapi({ example: "user-123" }),
      }),
      body: {
        content: {
          "application/json": {
            schema: updateUserSchema,
          },
        },
      },
    },
    responses: {
      ...createSuccessResponse(updateUserResponseSchema),
      ...errorResponses(
        HttpStatusCodes.BAD_REQUEST,
        HttpStatusCodes.UNAUTHORIZED,
        HttpStatusCodes.NOT_FOUND,
        HttpStatusCodes.UNPROCESSABLE_ENTITY,
        HttpStatusCodes.INTERNAL_SERVER_ERROR,
      ),
    },
  }),
  handler: async (c) => {
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
  },
});
