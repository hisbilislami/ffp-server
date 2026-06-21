import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  budgetId: z.literal(true).optional(),
  name: z.literal(true).optional(),
  estimatePrice: z.literal(true).optional(),
  realPrice: z.literal(true).optional(),
  diffPrice: z.literal(true).optional(),
  qty: z.literal(true).optional(),
  description: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional()
}).strict();
export const TransactionsMinAggregateInputObjectSchema: z.ZodType<Prisma.TransactionsMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TransactionsMinAggregateInputType>;
export const TransactionsMinAggregateInputObjectZodSchema = makeSchema();
