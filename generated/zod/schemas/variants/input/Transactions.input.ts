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
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().optional().nullable()
}).strict();

export type TransactionsInputType = z.infer<typeof TransactionsInputSchema>;
