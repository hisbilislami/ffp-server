import * as z from 'zod';
import { TransactionsWhereInputObjectSchema as TransactionsWhereInputObjectSchema } from './TransactionsWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TransactionsWhereInputObjectSchema).optional()
}).strict();
export const BudgetsCountOutputTypeCountTransactionsArgsObjectSchema = makeSchema();
export const BudgetsCountOutputTypeCountTransactionsArgsObjectZodSchema = makeSchema();
