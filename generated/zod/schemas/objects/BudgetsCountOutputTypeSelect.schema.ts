import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BudgetsCountOutputTypeCountTransactionsArgsObjectSchema as BudgetsCountOutputTypeCountTransactionsArgsObjectSchema } from './BudgetsCountOutputTypeCountTransactionsArgs.schema'

const makeSchema = () => z.object({
  Transactions: z.union([z.boolean(), z.lazy(() => BudgetsCountOutputTypeCountTransactionsArgsObjectSchema)]).optional()
}).strict();
export const BudgetsCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.BudgetsCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsCountOutputTypeSelect>;
export const BudgetsCountOutputTypeSelectObjectZodSchema = makeSchema();
