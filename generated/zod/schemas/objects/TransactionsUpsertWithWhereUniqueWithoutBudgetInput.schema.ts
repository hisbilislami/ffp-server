import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TransactionsWhereUniqueInputObjectSchema as TransactionsWhereUniqueInputObjectSchema } from './TransactionsWhereUniqueInput.schema';
import { TransactionsUpdateWithoutBudgetInputObjectSchema as TransactionsUpdateWithoutBudgetInputObjectSchema } from './TransactionsUpdateWithoutBudgetInput.schema';
import { TransactionsUncheckedUpdateWithoutBudgetInputObjectSchema as TransactionsUncheckedUpdateWithoutBudgetInputObjectSchema } from './TransactionsUncheckedUpdateWithoutBudgetInput.schema';
import { TransactionsCreateWithoutBudgetInputObjectSchema as TransactionsCreateWithoutBudgetInputObjectSchema } from './TransactionsCreateWithoutBudgetInput.schema';
import { TransactionsUncheckedCreateWithoutBudgetInputObjectSchema as TransactionsUncheckedCreateWithoutBudgetInputObjectSchema } from './TransactionsUncheckedCreateWithoutBudgetInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TransactionsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TransactionsUpdateWithoutBudgetInputObjectSchema), z.lazy(() => TransactionsUncheckedUpdateWithoutBudgetInputObjectSchema)]),
  create: z.union([z.lazy(() => TransactionsCreateWithoutBudgetInputObjectSchema), z.lazy(() => TransactionsUncheckedCreateWithoutBudgetInputObjectSchema)])
}).strict();
export const TransactionsUpsertWithWhereUniqueWithoutBudgetInputObjectSchema: z.ZodType<Prisma.TransactionsUpsertWithWhereUniqueWithoutBudgetInput> = makeSchema() as unknown as z.ZodType<Prisma.TransactionsUpsertWithWhereUniqueWithoutBudgetInput>;
export const TransactionsUpsertWithWhereUniqueWithoutBudgetInputObjectZodSchema = makeSchema();
