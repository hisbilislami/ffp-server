import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { TransactionsFindManySchema as TransactionsFindManySchema } from '../findManyTransactions.schema';
import { BudgetsCountOutputTypeArgsObjectSchema as BudgetsCountOutputTypeArgsObjectSchema } from './BudgetsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  periodStart: z.boolean().optional(),
  periodEnd: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  userId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  Transactions: z.union([z.boolean(), z.lazy(() => TransactionsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => BudgetsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const BudgetsSelectObjectSchema: z.ZodType<Prisma.BudgetsSelect> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsSelect>;
export const BudgetsSelectObjectZodSchema = makeSchema();
