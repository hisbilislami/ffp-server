import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { BudgetsWhereInputObjectSchema as BudgetsWhereInputObjectSchema } from './BudgetsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => BudgetsWhereInputObjectSchema).optional(),
  some: z.lazy(() => BudgetsWhereInputObjectSchema).optional(),
  none: z.lazy(() => BudgetsWhereInputObjectSchema).optional()
}).strict();
export const BudgetsListRelationFilterObjectSchema: z.ZodType<Prisma.BudgetsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsListRelationFilter>;
export const BudgetsListRelationFilterObjectZodSchema = makeSchema();
