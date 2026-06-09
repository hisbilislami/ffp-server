import z from "zod";
import { paginationQuerySchema } from "../../utils/global.schema";

export const userPaginationSchema = paginationQuerySchema;

export const updateUserSchema = z.object({
  name: z
    .string()
    .min(2, "the name field at least must be have 2 characters or more.")
    .max(255)
    .optional(),
  image: z.string().url("Invalid format").optional().nullable(),
});

export type UserPaginationInput = z.infer<typeof userPaginationSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
