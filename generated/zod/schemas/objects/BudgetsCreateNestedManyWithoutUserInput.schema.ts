import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BudgetsCreateWithoutUserInputObjectSchema as BudgetsCreateWithoutUserInputObjectSchema } from './BudgetsCreateWithoutUserInput.schema';
import { BudgetsUncheckedCreateWithoutUserInputObjectSchema as BudgetsUncheckedCreateWithoutUserInputObjectSchema } from './BudgetsUncheckedCreateWithoutUserInput.schema';
import { BudgetsCreateOrConnectWithoutUserInputObjectSchema as BudgetsCreateOrConnectWithoutUserInputObjectSchema } from './BudgetsCreateOrConnectWithoutUserInput.schema';
import { BudgetsCreateManyUserInputEnvelopeObjectSchema as BudgetsCreateManyUserInputEnvelopeObjectSchema } from './BudgetsCreateManyUserInputEnvelope.schema';
import { BudgetsWhereUniqueInputObjectSchema as BudgetsWhereUniqueInputObjectSchema } from './BudgetsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BudgetsCreateWithoutUserInputObjectSchema), z.lazy(() => BudgetsCreateWithoutUserInputObjectSchema).array(), z.lazy(() => BudgetsUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => BudgetsUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BudgetsCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => BudgetsCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BudgetsCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => BudgetsWhereUniqueInputObjectSchema), z.lazy(() => BudgetsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const BudgetsCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.BudgetsCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsCreateNestedManyWithoutUserInput>;
export const BudgetsCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
