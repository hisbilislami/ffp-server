import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TransactionsCreateWithoutBudgetInputObjectSchema as TransactionsCreateWithoutBudgetInputObjectSchema } from './TransactionsCreateWithoutBudgetInput.schema';
import { TransactionsUncheckedCreateWithoutBudgetInputObjectSchema as TransactionsUncheckedCreateWithoutBudgetInputObjectSchema } from './TransactionsUncheckedCreateWithoutBudgetInput.schema';
import { TransactionsCreateOrConnectWithoutBudgetInputObjectSchema as TransactionsCreateOrConnectWithoutBudgetInputObjectSchema } from './TransactionsCreateOrConnectWithoutBudgetInput.schema';
import { TransactionsUpsertWithWhereUniqueWithoutBudgetInputObjectSchema as TransactionsUpsertWithWhereUniqueWithoutBudgetInputObjectSchema } from './TransactionsUpsertWithWhereUniqueWithoutBudgetInput.schema';
import { TransactionsCreateManyBudgetInputEnvelopeObjectSchema as TransactionsCreateManyBudgetInputEnvelopeObjectSchema } from './TransactionsCreateManyBudgetInputEnvelope.schema';
import { TransactionsWhereUniqueInputObjectSchema as TransactionsWhereUniqueInputObjectSchema } from './TransactionsWhereUniqueInput.schema';
import { TransactionsUpdateWithWhereUniqueWithoutBudgetInputObjectSchema as TransactionsUpdateWithWhereUniqueWithoutBudgetInputObjectSchema } from './TransactionsUpdateWithWhereUniqueWithoutBudgetInput.schema';
import { TransactionsUpdateManyWithWhereWithoutBudgetInputObjectSchema as TransactionsUpdateManyWithWhereWithoutBudgetInputObjectSchema } from './TransactionsUpdateManyWithWhereWithoutBudgetInput.schema';
import { TransactionsScalarWhereInputObjectSchema as TransactionsScalarWhereInputObjectSchema } from './TransactionsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TransactionsCreateWithoutBudgetInputObjectSchema), z.lazy(() => TransactionsCreateWithoutBudgetInputObjectSchema).array(), z.lazy(() => TransactionsUncheckedCreateWithoutBudgetInputObjectSchema), z.lazy(() => TransactionsUncheckedCreateWithoutBudgetInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TransactionsCreateOrConnectWithoutBudgetInputObjectSchema), z.lazy(() => TransactionsCreateOrConnectWithoutBudgetInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TransactionsUpsertWithWhereUniqueWithoutBudgetInputObjectSchema), z.lazy(() => TransactionsUpsertWithWhereUniqueWithoutBudgetInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TransactionsCreateManyBudgetInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TransactionsWhereUniqueInputObjectSchema), z.lazy(() => TransactionsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TransactionsWhereUniqueInputObjectSchema), z.lazy(() => TransactionsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TransactionsWhereUniqueInputObjectSchema), z.lazy(() => TransactionsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TransactionsWhereUniqueInputObjectSchema), z.lazy(() => TransactionsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TransactionsUpdateWithWhereUniqueWithoutBudgetInputObjectSchema), z.lazy(() => TransactionsUpdateWithWhereUniqueWithoutBudgetInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TransactionsUpdateManyWithWhereWithoutBudgetInputObjectSchema), z.lazy(() => TransactionsUpdateManyWithWhereWithoutBudgetInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TransactionsScalarWhereInputObjectSchema), z.lazy(() => TransactionsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TransactionsUncheckedUpdateManyWithoutBudgetNestedInputObjectSchema: z.ZodType<Prisma.TransactionsUncheckedUpdateManyWithoutBudgetNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TransactionsUncheckedUpdateManyWithoutBudgetNestedInput>;
export const TransactionsUncheckedUpdateManyWithoutBudgetNestedInputObjectZodSchema = makeSchema();
