import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BudgetsScalarWhereInputObjectSchema as BudgetsScalarWhereInputObjectSchema } from './BudgetsScalarWhereInput.schema';
import { BudgetsUpdateManyMutationInputObjectSchema as BudgetsUpdateManyMutationInputObjectSchema } from './BudgetsUpdateManyMutationInput.schema';
import { BudgetsUncheckedUpdateManyWithoutUserInputObjectSchema as BudgetsUncheckedUpdateManyWithoutUserInputObjectSchema } from './BudgetsUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BudgetsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => BudgetsUpdateManyMutationInputObjectSchema), z.lazy(() => BudgetsUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const BudgetsUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.BudgetsUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsUpdateManyWithWhereWithoutUserInput>;
export const BudgetsUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
