import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { BudgetsUpdateManyMutationInputObjectSchema as BudgetsUpdateManyMutationInputObjectSchema } from './objects/BudgetsUpdateManyMutationInput.schema';
import { BudgetsWhereInputObjectSchema as BudgetsWhereInputObjectSchema } from './objects/BudgetsWhereInput.schema';

export const BudgetsUpdateManySchema: z.ZodType<Prisma.BudgetsUpdateManyArgs> = z.object({ data: BudgetsUpdateManyMutationInputObjectSchema, where: BudgetsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BudgetsUpdateManyArgs>;

export const BudgetsUpdateManyZodSchema = z.object({ data: BudgetsUpdateManyMutationInputObjectSchema, where: BudgetsWhereInputObjectSchema.optional() }).strict();