import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { BudgetsSelectObjectSchema as BudgetsSelectObjectSchema } from './objects/BudgetsSelect.schema';
import { BudgetsIncludeObjectSchema as BudgetsIncludeObjectSchema } from './objects/BudgetsInclude.schema';
import { BudgetsWhereUniqueInputObjectSchema as BudgetsWhereUniqueInputObjectSchema } from './objects/BudgetsWhereUniqueInput.schema';
import { BudgetsCreateInputObjectSchema as BudgetsCreateInputObjectSchema } from './objects/BudgetsCreateInput.schema';
import { BudgetsUncheckedCreateInputObjectSchema as BudgetsUncheckedCreateInputObjectSchema } from './objects/BudgetsUncheckedCreateInput.schema';
import { BudgetsUpdateInputObjectSchema as BudgetsUpdateInputObjectSchema } from './objects/BudgetsUpdateInput.schema';
import { BudgetsUncheckedUpdateInputObjectSchema as BudgetsUncheckedUpdateInputObjectSchema } from './objects/BudgetsUncheckedUpdateInput.schema';

export const BudgetsUpsertOneSchema: z.ZodType<Prisma.BudgetsUpsertArgs> = z.object({ select: BudgetsSelectObjectSchema.optional(), include: BudgetsIncludeObjectSchema.optional(), where: BudgetsWhereUniqueInputObjectSchema, create: z.union([ BudgetsCreateInputObjectSchema, BudgetsUncheckedCreateInputObjectSchema ]), update: z.union([ BudgetsUpdateInputObjectSchema, BudgetsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.BudgetsUpsertArgs>;

export const BudgetsUpsertOneZodSchema = z.object({ select: BudgetsSelectObjectSchema.optional(), include: BudgetsIncludeObjectSchema.optional(), where: BudgetsWhereUniqueInputObjectSchema, create: z.union([ BudgetsCreateInputObjectSchema, BudgetsUncheckedCreateInputObjectSchema ]), update: z.union([ BudgetsUpdateInputObjectSchema, BudgetsUncheckedUpdateInputObjectSchema ]) }).strict();