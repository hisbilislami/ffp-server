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
export const BudgetsCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BudgetsCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsCountOrderByAggregateInput>;
export const BudgetsCountOrderByAggregateInputObjectZodSchema = makeSchema();
