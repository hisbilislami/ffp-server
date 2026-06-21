import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BudgetsUpdateWithoutTransactionsInputObjectSchema as BudgetsUpdateWithoutTransactionsInputObjectSchema } from './BudgetsUpdateWithoutTransactionsInput.schema';
import { BudgetsUncheckedUpdateWithoutTransactionsInputObjectSchema as BudgetsUncheckedUpdateWithoutTransactionsInputObjectSchema } from './BudgetsUncheckedUpdateWithoutTransactionsInput.schema';
import { BudgetsCreateWithoutTransactionsInputObjectSchema as BudgetsCreateWithoutTransactionsInputObjectSchema } from './BudgetsCreateWithoutTransactionsInput.schema';
import { BudgetsUncheckedCreateWithoutTransactionsInputObjectSchema as BudgetsUncheckedCreateWithoutTransactionsInputObjectSchema } from './BudgetsUncheckedCreateWithoutTransactionsInput.schema';
import { BudgetsWhereInputObjectSchema as BudgetsWhereInputObjectSchema } from './BudgetsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => BudgetsUpdateWithoutTransactionsInputObjectSchema), z.lazy(() => BudgetsUncheckedUpdateWithoutTransactionsInputObjectSchema)]),
  create: z.union([z.lazy(() => BudgetsCreateWithoutTransactionsInputObjectSchema), z.lazy(() => BudgetsUncheckedCreateWithoutTransactionsInputObjectSchema)]),
  where: z.lazy(() => BudgetsWhereInputObjectSchema).optional()
}).strict();
export const BudgetsUpsertWithoutTransactionsInputObjectSchema: z.ZodType<Prisma.BudgetsUpsertWithoutTransactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsUpsertWithoutTransactionsInput>;
export const BudgetsUpsertWithoutTransactionsInputObjectZodSchema = makeSchema();
