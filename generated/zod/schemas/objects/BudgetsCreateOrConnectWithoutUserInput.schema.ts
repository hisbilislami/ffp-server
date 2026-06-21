import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BudgetsWhereUniqueInputObjectSchema as BudgetsWhereUniqueInputObjectSchema } from './BudgetsWhereUniqueInput.schema';
import { BudgetsCreateWithoutUserInputObjectSchema as BudgetsCreateWithoutUserInputObjectSchema } from './BudgetsCreateWithoutUserInput.schema';
import { BudgetsUncheckedCreateWithoutUserInputObjectSchema as BudgetsUncheckedCreateWithoutUserInputObjectSchema } from './BudgetsUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BudgetsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BudgetsCreateWithoutUserInputObjectSchema), z.lazy(() => BudgetsUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const BudgetsCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.BudgetsCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsCreateOrConnectWithoutUserInput>;
export const BudgetsCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
