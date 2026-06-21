import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TransactionsWhereUniqueInputObjectSchema as TransactionsWhereUniqueInputObjectSchema } from './TransactionsWhereUniqueInput.schema';
import { TransactionsCreateWithoutBudgetInputObjectSchema as TransactionsCreateWithoutBudgetInputObjectSchema } from './TransactionsCreateWithoutBudgetInput.schema';
import { TransactionsUncheckedCreateWithoutBudgetInputObjectSchema as TransactionsUncheckedCreateWithoutBudgetInputObjectSchema } from './TransactionsUncheckedCreateWithoutBudgetInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TransactionsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TransactionsCreateWithoutBudgetInputObjectSchema), z.lazy(() => TransactionsUncheckedCreateWithoutBudgetInputObjectSchema)])
}).strict();
export const TransactionsCreateOrConnectWithoutBudgetInputObjectSchema: z.ZodType<Prisma.TransactionsCreateOrConnectWithoutBudgetInput> = makeSchema() as unknown as z.ZodType<Prisma.TransactionsCreateOrConnectWithoutBudgetInput>;
export const TransactionsCreateOrConnectWithoutBudgetInputObjectZodSchema = makeSchema();
