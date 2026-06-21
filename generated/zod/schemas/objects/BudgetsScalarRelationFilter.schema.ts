import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BudgetsWhereInputObjectSchema as BudgetsWhereInputObjectSchema } from './BudgetsWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => BudgetsWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => BudgetsWhereInputObjectSchema).optional()
}).strict();
export const BudgetsScalarRelationFilterObjectSchema: z.ZodType<Prisma.BudgetsScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsScalarRelationFilter>;
export const BudgetsScalarRelationFilterObjectZodSchema = makeSchema();
