import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedOneWithoutBudgetsInputObjectSchema as UserCreateNestedOneWithoutBudgetsInputObjectSchema } from './UserCreateNestedOneWithoutBudgetsInput.schema';
import { TransactionsCreateNestedManyWithoutBudgetInputObjectSchema as TransactionsCreateNestedManyWithoutBudgetInputObjectSchema } from './TransactionsCreateNestedManyWithoutBudgetInput.schema'

const makeSchema = () => z.object({
  name: z.string().max(255),
  periodStart: z.coerce.date(),
  periodEnd: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutBudgetsInputObjectSchema),
  Transactions: z.lazy(() => TransactionsCreateNestedManyWithoutBudgetInputObjectSchema).optional()
}).strict();
export const BudgetsCreateInputObjectSchema: z.ZodType<Prisma.BudgetsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsCreateInput>;
export const BudgetsCreateInputObjectZodSchema = makeSchema();
