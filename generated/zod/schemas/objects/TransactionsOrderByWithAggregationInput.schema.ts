import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TransactionsCountOrderByAggregateInputObjectSchema as TransactionsCountOrderByAggregateInputObjectSchema } from './TransactionsCountOrderByAggregateInput.schema';
import { TransactionsAvgOrderByAggregateInputObjectSchema as TransactionsAvgOrderByAggregateInputObjectSchema } from './TransactionsAvgOrderByAggregateInput.schema';
import { TransactionsMaxOrderByAggregateInputObjectSchema as TransactionsMaxOrderByAggregateInputObjectSchema } from './TransactionsMaxOrderByAggregateInput.schema';
import { TransactionsMinOrderByAggregateInputObjectSchema as TransactionsMinOrderByAggregateInputObjectSchema } from './TransactionsMinOrderByAggregateInput.schema';
import { TransactionsSumOrderByAggregateInputObjectSchema as TransactionsSumOrderByAggregateInputObjectSchema } from './TransactionsSumOrderByAggregateInput.schema'

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
  _count: z.lazy(() => TransactionsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => TransactionsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TransactionsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TransactionsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => TransactionsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TransactionsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TransactionsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TransactionsOrderByWithAggregationInput>;
export const TransactionsOrderByWithAggregationInputObjectZodSchema = makeSchema();
