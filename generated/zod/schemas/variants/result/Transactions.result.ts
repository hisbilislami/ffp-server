import * as z from 'zod';
// prettier-ignore
export const TransactionsResultSchema = z.object({
    id: z.number().int(),
    budget: z.unknown(),
    budgetId: z.number().int(),
    name: z.string().nullable(),
    estimatePrice: z.number(),
    realPrice: z.number(),
    diffPrice: z.number().nullable(),
    qty: z.number().int(),
    description: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable()
}).strict();

export type TransactionsResultType = z.infer<typeof TransactionsResultSchema>;
