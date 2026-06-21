import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TransactionsWhereInputObjectSchema as TransactionsWhereInputObjectSchema } from './objects/TransactionsWhereInput.schema';

export const TransactionsDeleteManySchema: z.ZodType<Prisma.TransactionsDeleteManyArgs> = z.object({ where: TransactionsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TransactionsDeleteManyArgs>;

export const TransactionsDeleteManyZodSchema = z.object({ where: TransactionsWhereInputObjectSchema.optional() }).strict();