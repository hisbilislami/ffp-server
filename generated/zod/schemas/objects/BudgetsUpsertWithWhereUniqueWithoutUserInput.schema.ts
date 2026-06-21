import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BudgetsWhereUniqueInputObjectSchema as BudgetsWhereUniqueInputObjectSchema } from './BudgetsWhereUniqueInput.schema';
import { BudgetsUpdateWithoutUserInputObjectSchema as BudgetsUpdateWithoutUserInputObjectSchema } from './BudgetsUpdateWithoutUserInput.schema';
import { BudgetsUncheckedUpdateWithoutUserInputObjectSchema as BudgetsUncheckedUpdateWithoutUserInputObjectSchema } from './BudgetsUncheckedUpdateWithoutUserInput.schema';
import { BudgetsCreateWithoutUserInputObjectSchema as BudgetsCreateWithoutUserInputObjectSchema } from './BudgetsCreateWithoutUserInput.schema';
import { BudgetsUncheckedCreateWithoutUserInputObjectSchema as BudgetsUncheckedCreateWithoutUserInputObjectSchema } from './BudgetsUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BudgetsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => BudgetsUpdateWithoutUserInputObjectSchema), z.lazy(() => BudgetsUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => BudgetsCreateWithoutUserInputObjectSchema), z.lazy(() => BudgetsUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const BudgetsUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.BudgetsUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsUpsertWithWhereUniqueWithoutUserInput>;
export const BudgetsUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
