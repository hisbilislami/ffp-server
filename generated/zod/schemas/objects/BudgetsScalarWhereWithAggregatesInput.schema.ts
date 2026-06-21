import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const budgetsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => BudgetsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BudgetsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BudgetsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BudgetsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BudgetsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  periodStart: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  periodEnd: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const BudgetsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.BudgetsScalarWhereWithAggregatesInput> = budgetsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.BudgetsScalarWhereWithAggregatesInput>;
export const BudgetsScalarWhereWithAggregatesInputObjectZodSchema = budgetsscalarwherewithaggregatesinputSchema;
