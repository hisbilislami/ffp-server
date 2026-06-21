import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TransactionsSelectObjectSchema as TransactionsSelectObjectSchema } from './objects/TransactionsSelect.schema';
import { TransactionsIncludeObjectSchema as TransactionsIncludeObjectSchema } from './objects/TransactionsInclude.schema';
import { TransactionsWhereUniqueInputObjectSchema as TransactionsWhereUniqueInputObjectSchema } from './objects/TransactionsWhereUniqueInput.schema';

export const TransactionsFindUniqueSchema: z.ZodType<Prisma.TransactionsFindUniqueArgs> = z.object({ select: TransactionsSelectObjectSchema.optional(), include: TransactionsIncludeObjectSchema.optional(), where: TransactionsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TransactionsFindUniqueArgs>;

export const TransactionsFindUniqueZodSchema = z.object({ select: TransactionsSelectObjectSchema.optional(), include: TransactionsIncludeObjectSchema.optional(), where: TransactionsWhereUniqueInputObjectSchema }).strict();