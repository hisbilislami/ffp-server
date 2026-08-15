import { createRoute } from "@hono/zod-openapi";
import {
  budgetPaginationSchema,
  budgetResponseSchema,
  createBudgetResponseSchema,
  createBudgetSchema,
  updateBudgetResponseSchema,
  updateBudgetSchema,
} from "./budgets.schema";
import {
  createPaginatedResponse,
  createSuccessResponse,
  errorResponses,
} from "../../utils/openapi-responses";
import * as HttpStatusCodes from "stoker/http-status-codes";

export const getAllBudgets = createRoute({
  method: "get",
  path: "/",
  tags: ["Budgets"],
  summary: "Get all budgets",
  request: {
    query: budgetPaginationSchema,
  },
  responses: {
    ...createPaginatedResponse(budgetResponseSchema),
    ...errorResponses(
      HttpStatusCodes.UNAUTHORIZED,
      HttpStatusCodes.BAD_REQUEST,
      HttpStatusCodes.INTERNAL_SERVER_ERROR,
    ),
  },
});

export const createBudget = createRoute({
  method: "post",
  path: "/create",
  tags: ["Budgets"],
  summary: "Create a budget",
  request: {
    body: {
      content: {
        "application/json": {
          schema: createBudgetSchema,
        },
      },
    },
  },
  responses: {
    ...createSuccessResponse(createBudgetResponseSchema),
    ...errorResponses(
      HttpStatusCodes.BAD_REQUEST,
      HttpStatusCodes.UNAUTHORIZED,
      HttpStatusCodes.INTERNAL_SERVER_ERROR,
    ),
  },
});

export const updateBudget = createRoute({
  method: "put",
  path: "/update",
  tags: ["Budgets"],
  summary: "Update the budget",
  request: {
    body: {
      content: {
        "application/json": {
          schema: updateBudgetSchema,
        },
      },
    },
  },
  responses: {
    ...createSuccessResponse(updateBudgetResponseSchema),
    ...errorResponses(
      HttpStatusCodes.BAD_REQUEST,
      HttpStatusCodes.UNAUTHORIZED,
      HttpStatusCodes.INTERNAL_SERVER_ERROR,
    ),
  },
});
