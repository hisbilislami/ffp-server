import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TransactionsSelectObjectSchema as TransactionsSelectObjectSchema } from './objects/TransactionsSelect.schema';
import { TransactionsIncludeObjectSchema as TransactionsIncludeObjectSchema } from './objects/TransactionsInclude.schema';
import { TransactionsUpdateInputObjectSchema as TransactionsUpdateInputObjectSchema } from './objects/TransactionsUpdateInput.schema';
import { TransactionsUncheckedUpdateInputObjectSchema as TransactionsUncheckedUpdateInputObjectSchema } from './objects/TransactionsUncheckedUpdateInput.schema';
import { TransactionsWhereUniqueInputObjectSchema as TransactionsWhereUniqueInputObjectSchema } from './objects/TransactionsWhereUniqueInput.schema';

export const TransactionsUpdateOneSchema: z.ZodType<Prisma.TransactionsUpdateArgs> = z.object({ select: TransactionsSelectObjectSchema.optional(), include: TransactionsIncludeObjectSchema.optional(), data: z.union([TransactionsUpdateInputObjectSchema, TransactionsUncheckedUpdateInputObjectSchema]), where: TransactionsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TransactionsUpdateArgs>;

export const TransactionsUpdateOneZodSchema = z.object({ select: TransactionsSelectObjectSchema.optional(), include: TransactionsIncludeObjectSchema.optional(), data: z.union([TransactionsUpdateInputObjectSchema, TransactionsUncheckedUpdateInputObjectSchema]), where: TransactionsWhereUniqueInputObjectSchema }).strict();