import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  periodStart: z.literal(true).optional(),
  periodEnd: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional()
}).strict();
export const BudgetsMinAggregateInputObjectSchema: z.ZodType<Prisma.BudgetsMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsMinAggregateInputType>;
export const BudgetsMinAggregateInputObjectZodSchema = makeSchema();
