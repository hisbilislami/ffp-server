import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TransactionsCreateWithoutBudgetInputObjectSchema as TransactionsCreateWithoutBudgetInputObjectSchema } from './TransactionsCreateWithoutBudgetInput.schema';
import { TransactionsUncheckedCreateWithoutBudgetInputObjectSchema as TransactionsUncheckedCreateWithoutBudgetInputObjectSchema } from './TransactionsUncheckedCreateWithoutBudgetInput.schema';
import { TransactionsCreateOrConnectWithoutBudgetInputObjectSchema as TransactionsCreateOrConnectWithoutBudgetInputObjectSchema } from './TransactionsCreateOrConnectWithoutBudgetInput.schema';
import { TransactionsCreateManyBudgetInputEnvelopeObjectSchema as TransactionsCreateManyBudgetInputEnvelopeObjectSchema } from './TransactionsCreateManyBudgetInputEnvelope.schema';
import { TransactionsWhereUniqueInputObjectSchema as TransactionsWhereUniqueInputObjectSchema } from './TransactionsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TransactionsCreateWithoutBudgetInputObjectSchema), z.lazy(() => TransactionsCreateWithoutBudgetInputObjectSchema).array(), z.lazy(() => TransactionsUncheckedCreateWithoutBudgetInputObjectSchema), z.lazy(() => TransactionsUncheckedCreateWithoutBudgetInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TransactionsCreateOrConnectWithoutBudgetInputObjectSchema), z.lazy(() => TransactionsCreateOrConnectWithoutBudgetInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TransactionsCreateManyBudgetInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TransactionsWhereUniqueInputObjectSchema), z.lazy(() => TransactionsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TransactionsCreateNestedManyWithoutBudgetInputObjectSchema: z.ZodType<Prisma.TransactionsCreateNestedManyWithoutBudgetInput> = makeSchema() as unknown as z.ZodType<Prisma.TransactionsCreateNestedManyWithoutBudgetInput>;
export const TransactionsCreateNestedManyWithoutBudgetInputObjectZodSchema = makeSchema();
