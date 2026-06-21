import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BudgetsArgsObjectSchema as BudgetsArgsObjectSchema } from './BudgetsArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  budget: z.union([z.boolean(), z.lazy(() => BudgetsArgsObjectSchema)]).optional(),
  budgetId: z.boolean().optional(),
  name: z.boolean().optional(),
  estimatePrice: z.boolean().optional(),
  realPrice: z.boolean().optional(),
  diffPrice: z.boolean().optional(),
  qty: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional()
}).strict();
export const TransactionsSelectObjectSchema: z.ZodType<Prisma.TransactionsSelect> = makeSchema() as unknown as z.ZodType<Prisma.TransactionsSelect>;
export const TransactionsSelectObjectZodSchema = makeSchema();
