import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  budgetId: z.literal(true).optional(),
  estimatePrice: z.literal(true).optional(),
  realPrice: z.literal(true).optional(),
  diffPrice: z.literal(true).optional(),
  qty: z.literal(true).optional()
}).strict();
export const TransactionsSumAggregateInputObjectSchema: z.ZodType<Prisma.TransactionsSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TransactionsSumAggregateInputType>;
export const TransactionsSumAggregateInputObjectZodSchema = makeSchema();
