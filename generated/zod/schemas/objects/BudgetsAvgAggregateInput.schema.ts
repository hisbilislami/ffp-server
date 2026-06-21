import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const BudgetsAvgAggregateInputObjectSchema: z.ZodType<Prisma.BudgetsAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsAvgAggregateInputType>;
export const BudgetsAvgAggregateInputObjectZodSchema = makeSchema();
