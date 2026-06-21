import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BudgetsOrderByWithRelationInputObjectSchema as BudgetsOrderByWithRelationInputObjectSchema } from './BudgetsOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  budgetId: SortOrderSchema.optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  estimatePrice: SortOrderSchema.optional(),
  realPrice: SortOrderSchema.optional(),
  diffPrice: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  qty: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  budget: z.lazy(() => BudgetsOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const TransactionsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TransactionsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TransactionsOrderByWithRelationInput>;
export const TransactionsOrderByWithRelationInputObjectZodSchema = makeSchema();
