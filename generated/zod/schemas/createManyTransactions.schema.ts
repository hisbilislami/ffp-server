import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TransactionsCreateManyInputObjectSchema as TransactionsCreateManyInputObjectSchema } from './objects/TransactionsCreateManyInput.schema';

export const TransactionsCreateManySchema: z.ZodType<Prisma.TransactionsCreateManyArgs> = z.object({ data: z.union([ TransactionsCreateManyInputObjectSchema, z.array(TransactionsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TransactionsCreateManyArgs>;

export const TransactionsCreateManyZodSchema = z.object({ data: z.union([ TransactionsCreateManyInputObjectSchema, z.array(TransactionsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();