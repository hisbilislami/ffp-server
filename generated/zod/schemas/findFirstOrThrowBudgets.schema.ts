import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { BudgetsIncludeObjectSchema as BudgetsIncludeObjectSchema } from './objects/BudgetsInclude.schema';
import { BudgetsOrderByWithRelationInputObjectSchema as BudgetsOrderByWithRelationInputObjectSchema } from './objects/BudgetsOrderByWithRelationInput.schema';
import { BudgetsWhereInputObjectSchema as BudgetsWhereInputObjectSchema } from './objects/BudgetsWhereInput.schema';
import { BudgetsWhereUniqueInputObjectSchema as BudgetsWhereUniqueInputObjectSchema } from './objects/BudgetsWhereUniqueInput.schema';
import { BudgetsScalarFieldEnumSchema } from './enums/BudgetsScalarFieldEnum.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './objects/UserArgs.schema';
import { TransactionsFindManySchema } from './findManyTransactions.schema';
import { BudgetsCountOutputTypeArgsObjectSchema as BudgetsCountOutputTypeArgsObjectSchema } from './objects/BudgetsCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BudgetsFindFirstOrThrowSelectSchema: z.ZodType<Prisma.BudgetsSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    periodStart: z.boolean().optional(),
    periodEnd: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    userId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    Transactions: z.union([z.boolean(), z.lazy(() => TransactionsFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => BudgetsCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.BudgetsSelect>;

export const BudgetsFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    periodStart: z.boolean().optional(),
    periodEnd: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    userId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    Transactions: z.union([z.boolean(), z.lazy(() => TransactionsFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => BudgetsCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const BudgetsFindFirstOrThrowSchema: z.ZodType<Prisma.BudgetsFindFirstOrThrowArgs> = z.object({ select: BudgetsFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => BudgetsIncludeObjectSchema.optional()), orderBy: z.union([BudgetsOrderByWithRelationInputObjectSchema, BudgetsOrderByWithRelationInputObjectSchema.array()]).optional(), where: BudgetsWhereInputObjectSchema.optional(), cursor: BudgetsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BudgetsScalarFieldEnumSchema, BudgetsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.BudgetsFindFirstOrThrowArgs>;

export const BudgetsFindFirstOrThrowZodSchema = z.object({ select: BudgetsFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => BudgetsIncludeObjectSchema.optional()), orderBy: z.union([BudgetsOrderByWithRelationInputObjectSchema, BudgetsOrderByWithRelationInputObjectSchema.array()]).optional(), where: BudgetsWhereInputObjectSchema.optional(), cursor: BudgetsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BudgetsScalarFieldEnumSchema, BudgetsScalarFieldEnumSchema.array()]).optional() }).strict();