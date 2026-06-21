import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TransactionsSelectObjectSchema as TransactionsSelectObjectSchema } from './objects/TransactionsSelect.schema';
import { TransactionsIncludeObjectSchema as TransactionsIncludeObjectSchema } from './objects/TransactionsInclude.schema';
import { TransactionsCreateInputObjectSchema as TransactionsCreateInputObjectSchema } from './objects/TransactionsCreateInput.schema';
import { TransactionsUncheckedCreateInputObjectSchema as TransactionsUncheckedCreateInputObjectSchema } from './objects/TransactionsUncheckedCreateInput.schema';

export const TransactionsCreateOneSchema: z.ZodType<Prisma.TransactionsCreateArgs> = z.object({ select: TransactionsSelectObjectSchema.optional(), include: TransactionsIncludeObjectSchema.optional(), data: z.union([TransactionsCreateInputObjectSchema, TransactionsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.TransactionsCreateArgs>;

export const TransactionsCreateOneZodSchema = z.object({ select: TransactionsSelectObjectSchema.optional(), include: TransactionsIncludeObjectSchema.optional(), data: z.union([TransactionsCreateInputObjectSchema, TransactionsUncheckedCreateInputObjectSchema]) }).strict();