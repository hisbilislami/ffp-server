import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { BudgetsCreateManyInputObjectSchema as BudgetsCreateManyInputObjectSchema } from './objects/BudgetsCreateManyInput.schema';

export const BudgetsCreateManySchema: z.ZodType<Prisma.BudgetsCreateManyArgs> = z.object({ data: z.union([ BudgetsCreateManyInputObjectSchema, z.array(BudgetsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BudgetsCreateManyArgs>;

export const BudgetsCreateManyZodSchema = z.object({ data: z.union([ BudgetsCreateManyInputObjectSchema, z.array(BudgetsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();