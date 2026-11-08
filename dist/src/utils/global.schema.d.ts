import z from "zod";
export declare const paginationQuerySchema: z.ZodObject<{
    page: z.ZodPipe<z.ZodDefault<z.ZodOptional<z.ZodString>>, z.ZodTransform<number, string>>;
    limit: z.ZodPipe<z.ZodDefault<z.ZodOptional<z.ZodString>>, z.ZodTransform<number, string>>;
    search: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type PaginationQueryInput = z.infer<typeof paginationQuerySchema>;
