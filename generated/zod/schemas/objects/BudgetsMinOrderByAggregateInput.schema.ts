import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  periodStart: SortOrderSchema.optional(),
  periodEnd: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional()
}).strict();
export const BudgetsMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BudgetsMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsMinOrderByAggregateInput>;
export const BudgetsMinOrderByAggregateInputObjectZodSchema = makeSchema();
