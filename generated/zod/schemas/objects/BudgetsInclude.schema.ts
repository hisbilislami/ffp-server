import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { TransactionsFindManySchema as TransactionsFindManySchema } from '../findManyTransactions.schema';
import { BudgetsCountOutputTypeArgsObjectSchema as BudgetsCountOutputTypeArgsObjectSchema } from './BudgetsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  Transactions: z.union([z.boolean(), z.lazy(() => TransactionsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => BudgetsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const BudgetsIncludeObjectSchema: z.ZodType<Prisma.BudgetsInclude> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsInclude>;
export const BudgetsIncludeObjectZodSchema = makeSchema();
