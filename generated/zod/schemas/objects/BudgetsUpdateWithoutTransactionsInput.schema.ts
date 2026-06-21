import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutBudgetsNestedInputObjectSchema as UserUpdateOneRequiredWithoutBudgetsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutBudgetsNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  periodStart: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  periodEnd: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutBudgetsNestedInputObjectSchema).optional()
}).strict();
export const BudgetsUpdateWithoutTransactionsInputObjectSchema: z.ZodType<Prisma.BudgetsUpdateWithoutTransactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsUpdateWithoutTransactionsInput>;
export const BudgetsUpdateWithoutTransactionsInputObjectZodSchema = makeSchema();
