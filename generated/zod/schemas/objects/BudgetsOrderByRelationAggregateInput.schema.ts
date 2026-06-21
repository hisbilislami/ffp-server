import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const BudgetsOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.BudgetsOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsOrderByRelationAggregateInput>;
export const BudgetsOrderByRelationAggregateInputObjectZodSchema = makeSchema();
