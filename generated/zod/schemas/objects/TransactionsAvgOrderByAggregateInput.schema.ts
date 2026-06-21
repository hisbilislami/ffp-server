import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  budgetId: SortOrderSchema.optional(),
  estimatePrice: SortOrderSchema.optional(),
  realPrice: SortOrderSchema.optional(),
  diffPrice: SortOrderSchema.optional(),
  qty: SortOrderSchema.optional()
}).strict();
export const TransactionsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TransactionsAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TransactionsAvgOrderByAggregateInput>;
export const TransactionsAvgOrderByAggregateInputObjectZodSchema = makeSchema();
