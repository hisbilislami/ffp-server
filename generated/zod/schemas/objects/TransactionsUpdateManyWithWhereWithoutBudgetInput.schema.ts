import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TransactionsScalarWhereInputObjectSchema as TransactionsScalarWhereInputObjectSchema } from './TransactionsScalarWhereInput.schema';
import { TransactionsUpdateManyMutationInputObjectSchema as TransactionsUpdateManyMutationInputObjectSchema } from './TransactionsUpdateManyMutationInput.schema';
import { TransactionsUncheckedUpdateManyWithoutBudgetInputObjectSchema as TransactionsUncheckedUpdateManyWithoutBudgetInputObjectSchema } from './TransactionsUncheckedUpdateManyWithoutBudgetInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TransactionsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TransactionsUpdateManyMutationInputObjectSchema), z.lazy(() => TransactionsUncheckedUpdateManyWithoutBudgetInputObjectSchema)])
}).strict();
export const TransactionsUpdateManyWithWhereWithoutBudgetInputObjectSchema: z.ZodType<Prisma.TransactionsUpdateManyWithWhereWithoutBudgetInput> = makeSchema() as unknown as z.ZodType<Prisma.TransactionsUpdateManyWithWhereWithoutBudgetInput>;
export const TransactionsUpdateManyWithWhereWithoutBudgetInputObjectZodSchema = makeSchema();
