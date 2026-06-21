import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TransactionsSelectObjectSchema as TransactionsSelectObjectSchema } from './objects/TransactionsSelect.schema';
import { TransactionsIncludeObjectSchema as TransactionsIncludeObjectSchema } from './objects/TransactionsInclude.schema';
import { TransactionsWhereUniqueInputObjectSchema as TransactionsWhereUniqueInputObjectSchema } from './objects/TransactionsWhereUniqueInput.schema';

export const TransactionsDeleteOneSchema: z.ZodType<Prisma.TransactionsDeleteArgs> = z.object({ select: TransactionsSelectObjectSchema.optional(), include: TransactionsIncludeObjectSchema.optional(), where: TransactionsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TransactionsDeleteArgs>;

export const TransactionsDeleteOneZodSchema = z.object({ select: TransactionsSelectObjectSchema.optional(), include: TransactionsIncludeObjectSchema.optional(), where: TransactionsWhereUniqueInputObjectSchema }).strict();