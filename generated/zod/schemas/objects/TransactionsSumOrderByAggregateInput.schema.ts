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
export const TransactionsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TransactionsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TransactionsSumOrderByAggregateInput>;
export const TransactionsSumOrderByAggregateInputObjectZodSchema = makeSchema();
