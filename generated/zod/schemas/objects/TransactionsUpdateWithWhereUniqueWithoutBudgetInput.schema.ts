import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TransactionsWhereUniqueInputObjectSchema as TransactionsWhereUniqueInputObjectSchema } from './TransactionsWhereUniqueInput.schema';
import { TransactionsUpdateWithoutBudgetInputObjectSchema as TransactionsUpdateWithoutBudgetInputObjectSchema } from './TransactionsUpdateWithoutBudgetInput.schema';
import { TransactionsUncheckedUpdateWithoutBudgetInputObjectSchema as TransactionsUncheckedUpdateWithoutBudgetInputObjectSchema } from './TransactionsUncheckedUpdateWithoutBudgetInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TransactionsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TransactionsUpdateWithoutBudgetInputObjectSchema), z.lazy(() => TransactionsUncheckedUpdateWithoutBudgetInputObjectSchema)])
}).strict();
export const TransactionsUpdateWithWhereUniqueWithoutBudgetInputObjectSchema: z.ZodType<Prisma.TransactionsUpdateWithWhereUniqueWithoutBudgetInput> = makeSchema() as unknown as z.ZodType<Prisma.TransactionsUpdateWithWhereUniqueWithoutBudgetInput>;
export const TransactionsUpdateWithWhereUniqueWithoutBudgetInputObjectZodSchema = makeSchema();
