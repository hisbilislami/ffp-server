import * as z from 'zod';
export const BudgetsCreateResultSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  periodStart: z.date(),
  periodEnd: z.date(),
  user: z.unknown(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  Transactions: z.array(z.unknown())
});