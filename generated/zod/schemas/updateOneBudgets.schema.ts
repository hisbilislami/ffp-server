import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { BudgetsSelectObjectSchema as BudgetsSelectObjectSchema } from './objects/BudgetsSelect.schema';
import { BudgetsIncludeObjectSchema as BudgetsIncludeObjectSchema } from './objects/BudgetsInclude.schema';
import { BudgetsUpdateInputObjectSchema as BudgetsUpdateInputObjectSchema } from './objects/BudgetsUpdateInput.schema';
import { BudgetsUncheckedUpdateInputObjectSchema as BudgetsUncheckedUpdateInputObjectSchema } from './objects/BudgetsUncheckedUpdateInput.schema';
import { BudgetsWhereUniqueInputObjectSchema as BudgetsWhereUniqueInputObjectSchema } from './objects/BudgetsWhereUniqueInput.schema';

export const BudgetsUpdateOneSchema: z.ZodType<Prisma.BudgetsUpdateArgs> = z.object({ select: BudgetsSelectObjectSchema.optional(), include: BudgetsIncludeObjectSchema.optional(), data: z.union([BudgetsUpdateInputObjectSchema, BudgetsUncheckedUpdateInputObjectSchema]), where: BudgetsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BudgetsUpdateArgs>;

export const BudgetsUpdateOneZodSchema = z.object({ select: BudgetsSelectObjectSchema.optional(), include: BudgetsIncludeObjectSchema.optional(), data: z.union([BudgetsUpdateInputObjectSchema, BudgetsUncheckedUpdateInputObjectSchema]), where: BudgetsWhereUniqueInputObjectSchema }).strict();