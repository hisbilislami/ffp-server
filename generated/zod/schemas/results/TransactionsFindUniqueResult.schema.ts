import * as z from 'zod';
export const TransactionsFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  budget: z.unknown(),
  budgetId: z.number().int(),
  name: z.string().optional(),
  estimatePrice: z.number(),
  realPrice: z.number(),
  diffPrice: z.number().optional(),
  qty: z.number().int(),
  description: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional()
}));