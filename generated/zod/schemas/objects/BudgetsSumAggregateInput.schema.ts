import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const BudgetsSumAggregateInputObjectSchema: z.ZodType<Prisma.BudgetsSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsSumAggregateInputType>;
export const BudgetsSumAggregateInputObjectZodSchema = makeSchema();
