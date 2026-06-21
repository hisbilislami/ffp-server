import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { BudgetsSelectObjectSchema as BudgetsSelectObjectSchema } from './objects/BudgetsSelect.schema';
import { BudgetsUpdateManyMutationInputObjectSchema as BudgetsUpdateManyMutationInputObjectSchema } from './objects/BudgetsUpdateManyMutationInput.schema';
import { BudgetsWhereInputObjectSchema as BudgetsWhereInputObjectSchema } from './objects/BudgetsWhereInput.schema';

export const BudgetsUpdateManyAndReturnSchema: z.ZodType<Prisma.BudgetsUpdateManyAndReturnArgs> = z.object({ select: BudgetsSelectObjectSchema.optional(), data: BudgetsUpdateManyMutationInputObjectSchema, where: BudgetsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BudgetsUpdateManyAndReturnArgs>;

export const BudgetsUpdateManyAndReturnZodSchema = z.object({ select: BudgetsSelectObjectSchema.optional(), data: BudgetsUpdateManyMutationInputObjectSchema, where: BudgetsWhereInputObjectSchema.optional() }).strict();