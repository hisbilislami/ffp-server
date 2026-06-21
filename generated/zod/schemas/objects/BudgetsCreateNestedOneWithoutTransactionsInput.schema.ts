import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BudgetsCreateWithoutTransactionsInputObjectSchema as BudgetsCreateWithoutTransactionsInputObjectSchema } from './BudgetsCreateWithoutTransactionsInput.schema';
import { BudgetsUncheckedCreateWithoutTransactionsInputObjectSchema as BudgetsUncheckedCreateWithoutTransactionsInputObjectSchema } from './BudgetsUncheckedCreateWithoutTransactionsInput.schema';
import { BudgetsCreateOrConnectWithoutTransactionsInputObjectSchema as BudgetsCreateOrConnectWithoutTransactionsInputObjectSchema } from './BudgetsCreateOrConnectWithoutTransactionsInput.schema';
import { BudgetsWhereUniqueInputObjectSchema as BudgetsWhereUniqueInputObjectSchema } from './BudgetsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BudgetsCreateWithoutTransactionsInputObjectSchema), z.lazy(() => BudgetsUncheckedCreateWithoutTransactionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => BudgetsCreateOrConnectWithoutTransactionsInputObjectSchema).optional(),
  connect: z.lazy(() => BudgetsWhereUniqueInputObjectSchema).optional()
}).strict();
export const BudgetsCreateNestedOneWithoutTransactionsInputObjectSchema: z.ZodType<Prisma.BudgetsCreateNestedOneWithoutTransactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsCreateNestedOneWithoutTransactionsInput>;
export const BudgetsCreateNestedOneWithoutTransactionsInputObjectZodSchema = makeSchema();
