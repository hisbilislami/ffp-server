import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutBudgetsNestedInputObjectSchema as UserUpdateOneRequiredWithoutBudgetsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutBudgetsNestedInput.schema';
import { TransactionsUpdateManyWithoutBudgetNestedInputObjectSchema as TransactionsUpdateManyWithoutBudgetNestedInputObjectSchema } from './TransactionsUpdateManyWithoutBudgetNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  periodStart: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  periodEnd: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutBudgetsNestedInputObjectSchema).optional(),
  Transactions: z.lazy(() => TransactionsUpdateManyWithoutBudgetNestedInputObjectSchema).optional()
}).strict();
export const BudgetsUpdateInputObjectSchema: z.ZodType<Prisma.BudgetsUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsUpdateInput>;
export const BudgetsUpdateInputObjectZodSchema = makeSchema();
