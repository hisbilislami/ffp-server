import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const TransactionsOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.TransactionsOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TransactionsOrderByRelationAggregateInput>;
export const TransactionsOrderByRelationAggregateInputObjectZodSchema = makeSchema();
