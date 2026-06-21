import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TransactionsSelectObjectSchema as TransactionsSelectObjectSchema } from './objects/TransactionsSelect.schema';
import { TransactionsIncludeObjectSchema as TransactionsIncludeObjectSchema } from './objects/TransactionsInclude.schema';
import { TransactionsWhereUniqueInputObjectSchema as TransactionsWhereUniqueInputObjectSchema } from './objects/TransactionsWhereUniqueInput.schema';
import { TransactionsCreateInputObjectSchema as TransactionsCreateInputObjectSchema } from './objects/TransactionsCreateInput.schema';
import { TransactionsUncheckedCreateInputObjectSchema as TransactionsUncheckedCreateInputObjectSchema } from './objects/TransactionsUncheckedCreateInput.schema';
import { TransactionsUpdateInputObjectSchema as TransactionsUpdateInputObjectSchema } from './objects/TransactionsUpdateInput.schema';
import { TransactionsUncheckedUpdateInputObjectSchema as TransactionsUncheckedUpdateInputObjectSchema } from './objects/TransactionsUncheckedUpdateInput.schema';

export const TransactionsUpsertOneSchema: z.ZodType<Prisma.TransactionsUpsertArgs> = z.object({ select: TransactionsSelectObjectSchema.optional(), include: TransactionsIncludeObjectSchema.optional(), where: TransactionsWhereUniqueInputObjectSchema, create: z.union([ TransactionsCreateInputObjectSchema, TransactionsUncheckedCreateInputObjectSchema ]), update: z.union([ TransactionsUpdateInputObjectSchema, TransactionsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.TransactionsUpsertArgs>;

export const TransactionsUpsertOneZodSchema = z.object({ select: TransactionsSelectObjectSchema.optional(), include: TransactionsIncludeObjectSchema.optional(), where: TransactionsWhereUniqueInputObjectSchema, create: z.union([ TransactionsCreateInputObjectSchema, TransactionsUncheckedCreateInputObjectSchema ]), update: z.union([ TransactionsUpdateInputObjectSchema, TransactionsUncheckedUpdateInputObjectSchema ]) }).strict();