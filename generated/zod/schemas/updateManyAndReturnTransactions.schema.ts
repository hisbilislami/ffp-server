import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TransactionsSelectObjectSchema as TransactionsSelectObjectSchema } from './objects/TransactionsSelect.schema';
import { TransactionsUpdateManyMutationInputObjectSchema as TransactionsUpdateManyMutationInputObjectSchema } from './objects/TransactionsUpdateManyMutationInput.schema';
import { TransactionsWhereInputObjectSchema as TransactionsWhereInputObjectSchema } from './objects/TransactionsWhereInput.schema';

export const TransactionsUpdateManyAndReturnSchema: z.ZodType<Prisma.TransactionsUpdateManyAndReturnArgs> = z.object({ select: TransactionsSelectObjectSchema.optional(), data: TransactionsUpdateManyMutationInputObjectSchema, where: TransactionsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TransactionsUpdateManyAndReturnArgs>;

export const TransactionsUpdateManyAndReturnZodSchema = z.object({ select: TransactionsSelectObjectSchema.optional(), data: TransactionsUpdateManyMutationInputObjectSchema, where: TransactionsWhereInputObjectSchema.optional() }).strict();