import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedOneWithoutBudgetsInputObjectSchema as UserCreateNestedOneWithoutBudgetsInputObjectSchema } from './UserCreateNestedOneWithoutBudgetsInput.schema'

const makeSchema = () => z.object({
  name: z.string().max(255),
  periodStart: z.coerce.date(),
  periodEnd: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutBudgetsInputObjectSchema)
}).strict();
export const BudgetsCreateWithoutTransactionsInputObjectSchema: z.ZodType<Prisma.BudgetsCreateWithoutTransactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsCreateWithoutTransactionsInput>;
export const BudgetsCreateWithoutTransactionsInputObjectZodSchema = makeSchema();
