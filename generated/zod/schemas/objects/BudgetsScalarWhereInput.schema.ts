import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const budgetsscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BudgetsScalarWhereInputObjectSchema), z.lazy(() => BudgetsScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BudgetsScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BudgetsScalarWhereInputObjectSchema), z.lazy(() => BudgetsScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  periodStart: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  periodEnd: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const BudgetsScalarWhereInputObjectSchema: z.ZodType<Prisma.BudgetsScalarWhereInput> = budgetsscalarwhereinputSchema as unknown as z.ZodType<Prisma.BudgetsScalarWhereInput>;
export const BudgetsScalarWhereInputObjectZodSchema = budgetsscalarwhereinputSchema;
