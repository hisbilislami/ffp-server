import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { BudgetsWhereInputObjectSchema as BudgetsWhereInputObjectSchema } from './objects/BudgetsWhereInput.schema';

export const BudgetsDeleteManySchema: z.ZodType<Prisma.BudgetsDeleteManyArgs> = z.object({ where: BudgetsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BudgetsDeleteManyArgs>;

export const BudgetsDeleteManyZodSchema = z.object({ where: BudgetsWhereInputObjectSchema.optional() }).strict();