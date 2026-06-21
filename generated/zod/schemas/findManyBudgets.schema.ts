import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { BudgetsIncludeObjectSchema as BudgetsIncludeObjectSchema } from './objects/BudgetsInclude.schema';
import { BudgetsOrderByWithRelationInputObjectSchema as BudgetsOrderByWithRelationInputObjectSchema } from './objects/BudgetsOrderByWithRelationInput.schema';
import { BudgetsWhereInputObjectSchema as BudgetsWhereInputObjectSchema } from './objects/BudgetsWhereInput.schema';
import { BudgetsWhereUniqueInputObjectSchema as BudgetsWhereUniqueInputObjectSchema } from './objects/BudgetsWhereUniqueInput.schema';
import { BudgetsScalarFieldEnumSchema } from './enums/BudgetsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BudgetsFindManySelectSchema: z.ZodType<Prisma.BudgetsSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    periodStart: z.boolean().optional(),
    periodEnd: z.boolean().optional(),
    user: z.boolean().optional(),
    userId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    Transactions: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.BudgetsSelect>;

export const BudgetsFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    periodStart: z.boolean().optional(),
    periodEnd: z.boolean().optional(),
    user: z.boolean().optional(),
    userId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    Transactions: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const BudgetsFindManySchema: z.ZodType<Prisma.BudgetsFindManyArgs> = z.object({ select: BudgetsFindManySelectSchema.optional(), include: z.lazy(() => BudgetsIncludeObjectSchema.optional()), orderBy: z.union([BudgetsOrderByWithRelationInputObjectSchema, BudgetsOrderByWithRelationInputObjectSchema.array()]).optional(), where: BudgetsWhereInputObjectSchema.optional(), cursor: BudgetsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BudgetsScalarFieldEnumSchema, BudgetsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.BudgetsFindManyArgs>;

export const BudgetsFindManyZodSchema = z.object({ select: BudgetsFindManySelectSchema.optional(), include: z.lazy(() => BudgetsIncludeObjectSchema.optional()), orderBy: z.union([BudgetsOrderByWithRelationInputObjectSchema, BudgetsOrderByWithRelationInputObjectSchema.array()]).optional(), where: BudgetsWhereInputObjectSchema.optional(), cursor: BudgetsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BudgetsScalarFieldEnumSchema, BudgetsScalarFieldEnumSchema.array()]).optional() }).strict();