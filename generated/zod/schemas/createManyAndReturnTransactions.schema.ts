import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TransactionsSelectObjectSchema as TransactionsSelectObjectSchema } from './objects/TransactionsSelect.schema';
import { TransactionsCreateManyInputObjectSchema as TransactionsCreateManyInputObjectSchema } from './objects/TransactionsCreateManyInput.schema';

export const TransactionsCreateManyAndReturnSchema: z.ZodType<Prisma.TransactionsCreateManyAndReturnArgs> = z.object({ select: TransactionsSelectObjectSchema.optional(), data: z.union([ TransactionsCreateManyInputObjectSchema, z.array(TransactionsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TransactionsCreateManyAndReturnArgs>;

export const TransactionsCreateManyAndReturnZodSchema = z.object({ select: TransactionsSelectObjectSchema.optional(), data: z.union([ TransactionsCreateManyInputObjectSchema, z.array(TransactionsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();