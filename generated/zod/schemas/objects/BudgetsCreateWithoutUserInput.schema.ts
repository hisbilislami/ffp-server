import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TransactionsCreateNestedManyWithoutBudgetInputObjectSchema as TransactionsCreateNestedManyWithoutBudgetInputObjectSchema } from './TransactionsCreateNestedManyWithoutBudgetInput.schema'

const makeSchema = () => z.object({
  name: z.string().max(255),
  periodStart: z.coerce.date(),
  periodEnd: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  Transactions: z.lazy(() => TransactionsCreateNestedManyWithoutBudgetInputObjectSchema).optional()
}).strict();
export const BudgetsCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.BudgetsCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsCreateWithoutUserInput>;
export const BudgetsCreateWithoutUserInputObjectZodSchema = makeSchema();
