import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TransactionsIncludeObjectSchema as TransactionsIncludeObjectSchema } from './objects/TransactionsInclude.schema';
import { TransactionsOrderByWithRelationInputObjectSchema as TransactionsOrderByWithRelationInputObjectSchema } from './objects/TransactionsOrderByWithRelationInput.schema';
import { TransactionsWhereInputObjectSchema as TransactionsWhereInputObjectSchema } from './objects/TransactionsWhereInput.schema';
import { TransactionsWhereUniqueInputObjectSchema as TransactionsWhereUniqueInputObjectSchema } from './objects/TransactionsWhereUniqueInput.schema';
import { TransactionsScalarFieldEnumSchema } from './enums/TransactionsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TransactionsFindManySelectSchema: z.ZodType<Prisma.TransactionsSelect> = z.object({
    id: z.boolean().optional(),
    budget: z.boolean().optional(),
    budgetId: z.boolean().optional(),
    name: z.boolean().optional(),
    estimatePrice: z.boolean().optional(),
    realPrice: z.boolean().optional(),
    diffPrice: z.boolean().optional(),
    qty: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TransactionsSelect>;

export const TransactionsFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    budget: z.boolean().optional(),
    budgetId: z.boolean().optional(),
    name: z.boolean().optional(),
    estimatePrice: z.boolean().optional(),
    realPrice: z.boolean().optional(),
    diffPrice: z.boolean().optional(),
    qty: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional()
  }).strict();

export const TransactionsFindManySchema: z.ZodType<Prisma.TransactionsFindManyArgs> = z.object({ select: TransactionsFindManySelectSchema.optional(), include: z.lazy(() => TransactionsIncludeObjectSchema.optional()), orderBy: z.union([TransactionsOrderByWithRelationInputObjectSchema, TransactionsOrderByWithRelationInputObjectSchema.array()]).optional(), where: TransactionsWhereInputObjectSchema.optional(), cursor: TransactionsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TransactionsScalarFieldEnumSchema, TransactionsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TransactionsFindManyArgs>;

export const TransactionsFindManyZodSchema = z.object({ select: TransactionsFindManySelectSchema.optional(), include: z.lazy(() => TransactionsIncludeObjectSchema.optional()), orderBy: z.union([TransactionsOrderByWithRelationInputObjectSchema, TransactionsOrderByWithRelationInputObjectSchema.array()]).optional(), where: TransactionsWhereInputObjectSchema.optional(), cursor: TransactionsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TransactionsScalarFieldEnumSchema, TransactionsScalarFieldEnumSchema.array()]).optional() }).strict();