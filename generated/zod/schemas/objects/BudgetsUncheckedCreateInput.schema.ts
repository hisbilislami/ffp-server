import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TransactionsUncheckedCreateNestedManyWithoutBudgetInputObjectSchema as TransactionsUncheckedCreateNestedManyWithoutBudgetInputObjectSchema } from './TransactionsUncheckedCreateNestedManyWithoutBudgetInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().max(255),
  periodStart: z.coerce.date(),
  periodEnd: z.coerce.date(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  Transactions: z.lazy(() => TransactionsUncheckedCreateNestedManyWithoutBudgetInputObjectSchema).optional()
}).strict();
export const BudgetsUncheckedCreateInputObjectSchema: z.ZodType<Prisma.BudgetsUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsUncheckedCreateInput>;
export const BudgetsUncheckedCreateInputObjectZodSchema = makeSchema();
