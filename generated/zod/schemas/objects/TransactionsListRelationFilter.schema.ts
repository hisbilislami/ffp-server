import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TransactionsWhereInputObjectSchema as TransactionsWhereInputObjectSchema } from './TransactionsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => TransactionsWhereInputObjectSchema).optional(),
  some: z.lazy(() => TransactionsWhereInputObjectSchema).optional(),
  none: z.lazy(() => TransactionsWhereInputObjectSchema).optional()
}).strict();
export const TransactionsListRelationFilterObjectSchema: z.ZodType<Prisma.TransactionsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TransactionsListRelationFilter>;
export const TransactionsListRelationFilterObjectZodSchema = makeSchema();
