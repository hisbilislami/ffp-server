import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TransactionsWhereInputObjectSchema as TransactionsWhereInputObjectSchema } from './TransactionsWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TransactionsWhereInputObjectSchema).optional()
}).strict();
export const BudgetsCountOutputTypeCountTransactionsArgsObjectSchema = makeSchema();
export const BudgetsCountOutputTypeCountTransactionsArgsObjectZodSchema = makeSchema();
