import * as z from 'zod';
export const TransactionsFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});