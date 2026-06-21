import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { TransactionsOrderByRelationAggregateInputObjectSchema as TransactionsOrderByRelationAggregateInputObjectSchema } from './TransactionsOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  periodStart: SortOrderSchema.optional(),
  periodEnd: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  Transactions: z.lazy(() => TransactionsOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const BudgetsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.BudgetsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsOrderByWithRelationInput>;
export const BudgetsOrderByWithRelationInputObjectZodSchema = makeSchema();
