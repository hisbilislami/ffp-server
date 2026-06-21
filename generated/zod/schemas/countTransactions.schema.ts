import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TransactionsOrderByWithRelationInputObjectSchema as TransactionsOrderByWithRelationInputObjectSchema } from './objects/TransactionsOrderByWithRelationInput.schema';
import { TransactionsWhereInputObjectSchema as TransactionsWhereInputObjectSchema } from './objects/TransactionsWhereInput.schema';
import { TransactionsWhereUniqueInputObjectSchema as TransactionsWhereUniqueInputObjectSchema } from './objects/TransactionsWhereUniqueInput.schema';
import { TransactionsCountAggregateInputObjectSchema as TransactionsCountAggregateInputObjectSchema } from './objects/TransactionsCountAggregateInput.schema';

export const TransactionsCountSchema: z.ZodType<Prisma.TransactionsCountArgs> = z.object({ orderBy: z.union([TransactionsOrderByWithRelationInputObjectSchema, TransactionsOrderByWithRelationInputObjectSchema.array()]).optional(), where: TransactionsWhereInputObjectSchema.optional(), cursor: TransactionsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TransactionsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TransactionsCountArgs>;

export const TransactionsCountZodSchema = z.object({ orderBy: z.union([TransactionsOrderByWithRelationInputObjectSchema, TransactionsOrderByWithRelationInputObjectSchema.array()]).optional(), where: TransactionsWhereInputObjectSchema.optional(), cursor: TransactionsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TransactionsCountAggregateInputObjectSchema ]).optional() }).strict();