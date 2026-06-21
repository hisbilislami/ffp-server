import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BudgetsWhereInputObjectSchema as BudgetsWhereInputObjectSchema } from './BudgetsWhereInput.schema';
import { BudgetsUpdateWithoutTransactionsInputObjectSchema as BudgetsUpdateWithoutTransactionsInputObjectSchema } from './BudgetsUpdateWithoutTransactionsInput.schema';
import { BudgetsUncheckedUpdateWithoutTransactionsInputObjectSchema as BudgetsUncheckedUpdateWithoutTransactionsInputObjectSchema } from './BudgetsUncheckedUpdateWithoutTransactionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BudgetsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => BudgetsUpdateWithoutTransactionsInputObjectSchema), z.lazy(() => BudgetsUncheckedUpdateWithoutTransactionsInputObjectSchema)])
}).strict();
export const BudgetsUpdateToOneWithWhereWithoutTransactionsInputObjectSchema: z.ZodType<Prisma.BudgetsUpdateToOneWithWhereWithoutTransactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsUpdateToOneWithWhereWithoutTransactionsInput>;
export const BudgetsUpdateToOneWithWhereWithoutTransactionsInputObjectZodSchema = makeSchema();
