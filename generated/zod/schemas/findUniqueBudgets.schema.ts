import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { BudgetsSelectObjectSchema as BudgetsSelectObjectSchema } from './objects/BudgetsSelect.schema';
import { BudgetsIncludeObjectSchema as BudgetsIncludeObjectSchema } from './objects/BudgetsInclude.schema';
import { BudgetsWhereUniqueInputObjectSchema as BudgetsWhereUniqueInputObjectSchema } from './objects/BudgetsWhereUniqueInput.schema';

export const BudgetsFindUniqueSchema: z.ZodType<Prisma.BudgetsFindUniqueArgs> = z.object({ select: BudgetsSelectObjectSchema.optional(), include: BudgetsIncludeObjectSchema.optional(), where: BudgetsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BudgetsFindUniqueArgs>;

export const BudgetsFindUniqueZodSchema = z.object({ select: BudgetsSelectObjectSchema.optional(), include: BudgetsIncludeObjectSchema.optional(), where: BudgetsWhereUniqueInputObjectSchema }).strict();