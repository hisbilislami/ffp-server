import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { TransactionsListRelationFilterObjectSchema as TransactionsListRelationFilterObjectSchema } from './TransactionsListRelationFilter.schema'

const budgetswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BudgetsWhereInputObjectSchema), z.lazy(() => BudgetsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BudgetsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BudgetsWhereInputObjectSchema), z.lazy(() => BudgetsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  periodStart: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  periodEnd: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  Transactions: z.lazy(() => TransactionsListRelationFilterObjectSchema).optional()
}).strict();
export const BudgetsWhereInputObjectSchema: z.ZodType<Prisma.BudgetsWhereInput> = budgetswhereinputSchema as unknown as z.ZodType<Prisma.BudgetsWhereInput>;
export const BudgetsWhereInputObjectZodSchema = budgetswhereinputSchema;
