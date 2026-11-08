import * as z from 'zod';
// prettier-ignore
export const TransactionsInputSchema = z.object({
    id: z.number().int(),
    budget: z.unknown(),
    budgetId: z.number().int(),
    name: z.string().optional().nullable(),
    estimatePrice: z.number(),
    realPrice: z.number(),
    diffPrice: z.number().optional().nullable(),
    qty: z.number().int(),
    description: z.string().optional().nullable(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    deletedAt: z.coerce.date().optional().nullable()
}).strict();

export type TransactionsInputType = z.infer<typeof TransactionsInputSchema>;
