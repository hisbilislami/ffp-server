import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const BudgetsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BudgetsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsSumOrderByAggregateInput>;
export const BudgetsSumOrderByAggregateInputObjectZodSchema = makeSchema();
