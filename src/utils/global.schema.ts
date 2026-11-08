import z from "zod";

// export const paginationQuerySchema = z.object({
//   page: z
//     .string()
//     .optional()
//     .default("1")
//     .transform((val) => Math.max(1, parseInt(val, 10))),
//   limit: z
//     .string()
//     .optional()
//     .default("10")
//     .transform((val) => Math.min(100, Math.max(1, parseInt(val, 10)))),
//   search: z.string().optional(),
// });

export const paginationQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(10),
  search: z.string().optional(),
});

export type PaginationQueryInput = z.infer<typeof paginationQuerySchema>;
