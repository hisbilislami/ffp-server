import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { BudgetsSelectObjectSchema as BudgetsSelectObjectSchema } from './objects/BudgetsSelect.schema';
import { BudgetsIncludeObjectSchema as BudgetsIncludeObjectSchema } from './objects/BudgetsInclude.schema';
import { BudgetsCreateInputObjectSchema as BudgetsCreateInputObjectSchema } from './objects/BudgetsCreateInput.schema';
import { BudgetsUncheckedCreateInputObjectSchema as BudgetsUncheckedCreateInputObjectSchema } from './objects/BudgetsUncheckedCreateInput.schema';

export const BudgetsCreateOneSchema: z.ZodType<Prisma.BudgetsCreateArgs> = z.object({ select: BudgetsSelectObjectSchema.optional(), include: BudgetsIncludeObjectSchema.optional(), data: z.union([BudgetsCreateInputObjectSchema, BudgetsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.BudgetsCreateArgs>;

export const BudgetsCreateOneZodSchema = z.object({ select: BudgetsSelectObjectSchema.optional(), include: BudgetsIncludeObjectSchema.optional(), data: z.union([BudgetsCreateInputObjectSchema, BudgetsUncheckedCreateInputObjectSchema]) }).strict();