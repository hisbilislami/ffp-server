import * as z from 'zod';
// prettier-ignore
export const BudgetsInputSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    periodStart: z.coerce.date(),
    periodEnd: z.coerce.date(),
    user: z.unknown(),
    userId: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    deletedAt: z.coerce.date().optional().nullable(),
    Transactions: z.array(z.unknown())
}).strict();

export type BudgetsInputType = z.infer<typeof BudgetsInputSchema>;
