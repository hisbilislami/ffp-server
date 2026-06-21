import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TransactionsUncheckedCreateNestedManyWithoutBudgetInputObjectSchema as TransactionsUncheckedCreateNestedManyWithoutBudgetInputObjectSchema } from './TransactionsUncheckedCreateNestedManyWithoutBudgetInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  periodStart: z.coerce.date(),
  periodEnd: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  Transactions: z.lazy(() => TransactionsUncheckedCreateNestedManyWithoutBudgetInputObjectSchema).optional()
}).strict();
export const BudgetsUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.BudgetsUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsUncheckedCreateWithoutUserInput>;
export const BudgetsUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
