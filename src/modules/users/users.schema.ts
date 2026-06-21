import { z } from "@hono/zod-openapi";
import { paginationQuerySchema } from "../../utils/global.schema";
import {
  UserFindManyResultSchema,
  UserFindUniqueResultSchema,
  UserUpdateResultSchema,
} from "../../../generated/zod/schemas";

export const userPaginationSchema = paginationQuerySchema;

export const updateUserSchema = z.object({
  name: z
    .string()
    .min(2, "the name field at least must be have 2 characters or more.")
    .max(255)
    .optional(),
  image: z.url({ error: "Invalid format" }).optional().nullable(),
});

export const userResponseSchema = UserFindUniqueResultSchema.openapi("User");
export const usersResponseSchema = UserFindManyResultSchema.openapi("Users");
export const updateUserResponseSchema =
  UserUpdateResultSchema.openapi("UpdateUser");

export type UserPaginationInput = z.infer<typeof userPaginationSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
