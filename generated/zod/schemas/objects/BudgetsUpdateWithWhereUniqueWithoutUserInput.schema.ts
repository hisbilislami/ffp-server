import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BudgetsWhereUniqueInputObjectSchema as BudgetsWhereUniqueInputObjectSchema } from './BudgetsWhereUniqueInput.schema';
import { BudgetsUpdateWithoutUserInputObjectSchema as BudgetsUpdateWithoutUserInputObjectSchema } from './BudgetsUpdateWithoutUserInput.schema';
import { BudgetsUncheckedUpdateWithoutUserInputObjectSchema as BudgetsUncheckedUpdateWithoutUserInputObjectSchema } from './BudgetsUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BudgetsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => BudgetsUpdateWithoutUserInputObjectSchema), z.lazy(() => BudgetsUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const BudgetsUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.BudgetsUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsUpdateWithWhereUniqueWithoutUserInput>;
export const BudgetsUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
