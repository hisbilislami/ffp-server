import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { BudgetsSelectObjectSchema as BudgetsSelectObjectSchema } from './objects/BudgetsSelect.schema';
import { BudgetsCreateManyInputObjectSchema as BudgetsCreateManyInputObjectSchema } from './objects/BudgetsCreateManyInput.schema';

export const BudgetsCreateManyAndReturnSchema: z.ZodType<Prisma.BudgetsCreateManyAndReturnArgs> = z.object({ select: BudgetsSelectObjectSchema.optional(), data: z.union([ BudgetsCreateManyInputObjectSchema, z.array(BudgetsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BudgetsCreateManyAndReturnArgs>;

export const BudgetsCreateManyAndReturnZodSchema = z.object({ select: BudgetsSelectObjectSchema.optional(), data: z.union([ BudgetsCreateManyInputObjectSchema, z.array(BudgetsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();