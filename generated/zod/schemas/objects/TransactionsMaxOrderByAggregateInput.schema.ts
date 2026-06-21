import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  budgetId: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  estimatePrice: SortOrderSchema.optional(),
  realPrice: SortOrderSchema.optional(),
  diffPrice: SortOrderSchema.optional(),
  qty: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional()
}).strict();
export const TransactionsMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TransactionsMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TransactionsMaxOrderByAggregateInput>;
export const TransactionsMaxOrderByAggregateInputObjectZodSchema = makeSchema();
