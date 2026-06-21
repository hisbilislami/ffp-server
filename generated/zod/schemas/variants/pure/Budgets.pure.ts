import * as z from 'zod';
// prettier-ignore
export const BudgetsModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    periodStart: z.date(),
    periodEnd: z.date(),
    user: z.unknown(),
    userId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    Transactions: z.array(z.unknown())
}).strict();

export type BudgetsPureType = z.infer<typeof BudgetsModelSchema>;
