import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BudgetsCreateWithoutTransactionsInputObjectSchema as BudgetsCreateWithoutTransactionsInputObjectSchema } from './BudgetsCreateWithoutTransactionsInput.schema';
import { BudgetsUncheckedCreateWithoutTransactionsInputObjectSchema as BudgetsUncheckedCreateWithoutTransactionsInputObjectSchema } from './BudgetsUncheckedCreateWithoutTransactionsInput.schema';
import { BudgetsCreateOrConnectWithoutTransactionsInputObjectSchema as BudgetsCreateOrConnectWithoutTransactionsInputObjectSchema } from './BudgetsCreateOrConnectWithoutTransactionsInput.schema';
import { BudgetsUpsertWithoutTransactionsInputObjectSchema as BudgetsUpsertWithoutTransactionsInputObjectSchema } from './BudgetsUpsertWithoutTransactionsInput.schema';
import { BudgetsWhereUniqueInputObjectSchema as BudgetsWhereUniqueInputObjectSchema } from './BudgetsWhereUniqueInput.schema';
import { BudgetsUpdateToOneWithWhereWithoutTransactionsInputObjectSchema as BudgetsUpdateToOneWithWhereWithoutTransactionsInputObjectSchema } from './BudgetsUpdateToOneWithWhereWithoutTransactionsInput.schema';
import { BudgetsUpdateWithoutTransactionsInputObjectSchema as BudgetsUpdateWithoutTransactionsInputObjectSchema } from './BudgetsUpdateWithoutTransactionsInput.schema';
import { BudgetsUncheckedUpdateWithoutTransactionsInputObjectSchema as BudgetsUncheckedUpdateWithoutTransactionsInputObjectSchema } from './BudgetsUncheckedUpdateWithoutTransactionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BudgetsCreateWithoutTransactionsInputObjectSchema), z.lazy(() => BudgetsUncheckedCreateWithoutTransactionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => BudgetsCreateOrConnectWithoutTransactionsInputObjectSchema).optional(),
  upsert: z.lazy(() => BudgetsUpsertWithoutTransactionsInputObjectSchema).optional(),
  connect: z.lazy(() => BudgetsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => BudgetsUpdateToOneWithWhereWithoutTransactionsInputObjectSchema), z.lazy(() => BudgetsUpdateWithoutTransactionsInputObjectSchema), z.lazy(() => BudgetsUncheckedUpdateWithoutTransactionsInputObjectSchema)]).optional()
}).strict();
export const BudgetsUpdateOneRequiredWithoutTransactionsNestedInputObjectSchema: z.ZodType<Prisma.BudgetsUpdateOneRequiredWithoutTransactionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsUpdateOneRequiredWithoutTransactionsNestedInput>;
export const BudgetsUpdateOneRequiredWithoutTransactionsNestedInputObjectZodSchema = makeSchema();
