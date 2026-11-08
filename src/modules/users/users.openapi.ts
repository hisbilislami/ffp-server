import { createRoute } from "@hono/zod-openapi";
import { z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import {
  updateUserSchema,
  userPaginationSchema,
  userResponseSchema,
  updateUserResponseSchema,
} from "./users.schema";
import {
  createPaginatedResponse,
  createSuccessResponse,
  errorResponses,
} from "../../utils/openapi-responses";

export const getAllUsersRoute = createRoute({
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
});

export const getMeRoute = createRoute({
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
});

export const updateMeRoute = createRoute({
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
});

export const getUserByIdRoute = createRoute({
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
});

export const updateUserByIdRoute = createRoute({
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
});
