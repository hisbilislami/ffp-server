import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TransactionsCreateManyInputObjectSchema as TransactionsCreateManyInputObjectSchema } from './objects/TransactionsCreateManyInput.schema';

export const TransactionsCreateManySchema: z.ZodType<Prisma.TransactionsCreateManyArgs> = z.object({ data: z.union([ TransactionsCreateManyInputObjectSchema, z.array(TransactionsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.TransactionsCreateManyArgs>;

export const TransactionsCreateManyZodSchema = z.object({ data: z.union([ TransactionsCreateManyInputObjectSchema, z.array(TransactionsCreateManyInputObjectSchema) ]),  }).strict();