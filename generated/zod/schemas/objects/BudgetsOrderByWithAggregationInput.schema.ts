import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BudgetsCountOrderByAggregateInputObjectSchema as BudgetsCountOrderByAggregateInputObjectSchema } from './BudgetsCountOrderByAggregateInput.schema';
import { BudgetsAvgOrderByAggregateInputObjectSchema as BudgetsAvgOrderByAggregateInputObjectSchema } from './BudgetsAvgOrderByAggregateInput.schema';
import { BudgetsMaxOrderByAggregateInputObjectSchema as BudgetsMaxOrderByAggregateInputObjectSchema } from './BudgetsMaxOrderByAggregateInput.schema';
import { BudgetsMinOrderByAggregateInputObjectSchema as BudgetsMinOrderByAggregateInputObjectSchema } from './BudgetsMinOrderByAggregateInput.schema';
import { BudgetsSumOrderByAggregateInputObjectSchema as BudgetsSumOrderByAggregateInputObjectSchema } from './BudgetsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  periodStart: SortOrderSchema.optional(),
  periodEnd: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => BudgetsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => BudgetsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => BudgetsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => BudgetsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => BudgetsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const BudgetsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.BudgetsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsOrderByWithAggregationInput>;
export const BudgetsOrderByWithAggregationInputObjectZodSchema = makeSchema();
