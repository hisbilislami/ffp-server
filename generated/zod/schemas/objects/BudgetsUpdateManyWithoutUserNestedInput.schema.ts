import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BudgetsCreateWithoutUserInputObjectSchema as BudgetsCreateWithoutUserInputObjectSchema } from './BudgetsCreateWithoutUserInput.schema';
import { BudgetsUncheckedCreateWithoutUserInputObjectSchema as BudgetsUncheckedCreateWithoutUserInputObjectSchema } from './BudgetsUncheckedCreateWithoutUserInput.schema';
import { BudgetsCreateOrConnectWithoutUserInputObjectSchema as BudgetsCreateOrConnectWithoutUserInputObjectSchema } from './BudgetsCreateOrConnectWithoutUserInput.schema';
import { BudgetsUpsertWithWhereUniqueWithoutUserInputObjectSchema as BudgetsUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './BudgetsUpsertWithWhereUniqueWithoutUserInput.schema';
import { BudgetsCreateManyUserInputEnvelopeObjectSchema as BudgetsCreateManyUserInputEnvelopeObjectSchema } from './BudgetsCreateManyUserInputEnvelope.schema';
import { BudgetsWhereUniqueInputObjectSchema as BudgetsWhereUniqueInputObjectSchema } from './BudgetsWhereUniqueInput.schema';
import { BudgetsUpdateWithWhereUniqueWithoutUserInputObjectSchema as BudgetsUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './BudgetsUpdateWithWhereUniqueWithoutUserInput.schema';
import { BudgetsUpdateManyWithWhereWithoutUserInputObjectSchema as BudgetsUpdateManyWithWhereWithoutUserInputObjectSchema } from './BudgetsUpdateManyWithWhereWithoutUserInput.schema';
import { BudgetsScalarWhereInputObjectSchema as BudgetsScalarWhereInputObjectSchema } from './BudgetsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BudgetsCreateWithoutUserInputObjectSchema), z.lazy(() => BudgetsCreateWithoutUserInputObjectSchema).array(), z.lazy(() => BudgetsUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => BudgetsUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BudgetsCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => BudgetsCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => BudgetsUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => BudgetsUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BudgetsCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => BudgetsWhereUniqueInputObjectSchema), z.lazy(() => BudgetsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => BudgetsWhereUniqueInputObjectSchema), z.lazy(() => BudgetsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => BudgetsWhereUniqueInputObjectSchema), z.lazy(() => BudgetsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => BudgetsWhereUniqueInputObjectSchema), z.lazy(() => BudgetsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => BudgetsUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => BudgetsUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => BudgetsUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => BudgetsUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => BudgetsScalarWhereInputObjectSchema), z.lazy(() => BudgetsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const BudgetsUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.BudgetsUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsUpdateManyWithoutUserNestedInput>;
export const BudgetsUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
