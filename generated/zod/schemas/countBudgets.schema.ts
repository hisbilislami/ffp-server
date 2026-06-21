import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { BudgetsOrderByWithRelationInputObjectSchema as BudgetsOrderByWithRelationInputObjectSchema } from './objects/BudgetsOrderByWithRelationInput.schema';
import { BudgetsWhereInputObjectSchema as BudgetsWhereInputObjectSchema } from './objects/BudgetsWhereInput.schema';
import { BudgetsWhereUniqueInputObjectSchema as BudgetsWhereUniqueInputObjectSchema } from './objects/BudgetsWhereUniqueInput.schema';
import { BudgetsCountAggregateInputObjectSchema as BudgetsCountAggregateInputObjectSchema } from './objects/BudgetsCountAggregateInput.schema';

export const BudgetsCountSchema: z.ZodType<Prisma.BudgetsCountArgs> = z.object({ orderBy: z.union([BudgetsOrderByWithRelationInputObjectSchema, BudgetsOrderByWithRelationInputObjectSchema.array()]).optional(), where: BudgetsWhereInputObjectSchema.optional(), cursor: BudgetsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BudgetsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.BudgetsCountArgs>;

export const BudgetsCountZodSchema = z.object({ orderBy: z.union([BudgetsOrderByWithRelationInputObjectSchema, BudgetsOrderByWithRelationInputObjectSchema.array()]).optional(), where: BudgetsWhereInputObjectSchema.optional(), cursor: BudgetsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BudgetsCountAggregateInputObjectSchema ]).optional() }).strict();