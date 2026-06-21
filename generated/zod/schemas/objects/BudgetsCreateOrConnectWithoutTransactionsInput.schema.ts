import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BudgetsWhereUniqueInputObjectSchema as BudgetsWhereUniqueInputObjectSchema } from './BudgetsWhereUniqueInput.schema';
import { BudgetsCreateWithoutTransactionsInputObjectSchema as BudgetsCreateWithoutTransactionsInputObjectSchema } from './BudgetsCreateWithoutTransactionsInput.schema';
import { BudgetsUncheckedCreateWithoutTransactionsInputObjectSchema as BudgetsUncheckedCreateWithoutTransactionsInputObjectSchema } from './BudgetsUncheckedCreateWithoutTransactionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BudgetsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BudgetsCreateWithoutTransactionsInputObjectSchema), z.lazy(() => BudgetsUncheckedCreateWithoutTransactionsInputObjectSchema)])
}).strict();
export const BudgetsCreateOrConnectWithoutTransactionsInputObjectSchema: z.ZodType<Prisma.BudgetsCreateOrConnectWithoutTransactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsCreateOrConnectWithoutTransactionsInput>;
export const BudgetsCreateOrConnectWithoutTransactionsInputObjectZodSchema = makeSchema();
