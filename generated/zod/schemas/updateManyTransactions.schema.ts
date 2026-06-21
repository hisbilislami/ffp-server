import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TransactionsUpdateManyMutationInputObjectSchema as TransactionsUpdateManyMutationInputObjectSchema } from './objects/TransactionsUpdateManyMutationInput.schema';
import { TransactionsWhereInputObjectSchema as TransactionsWhereInputObjectSchema } from './objects/TransactionsWhereInput.schema';

export const TransactionsUpdateManySchema: z.ZodType<Prisma.TransactionsUpdateManyArgs> = z.object({ data: TransactionsUpdateManyMutationInputObjectSchema, where: TransactionsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TransactionsUpdateManyArgs>;

export const TransactionsUpdateManyZodSchema = z.object({ data: TransactionsUpdateManyMutationInputObjectSchema, where: TransactionsWhereInputObjectSchema.optional() }).strict();