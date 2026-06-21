import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { TransactionsUncheckedUpdateManyWithoutBudgetNestedInputObjectSchema as TransactionsUncheckedUpdateManyWithoutBudgetNestedInputObjectSchema } from './TransactionsUncheckedUpdateManyWithoutBudgetNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  periodStart: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  periodEnd: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Transactions: z.lazy(() => TransactionsUncheckedUpdateManyWithoutBudgetNestedInputObjectSchema).optional()
}).strict();
export const BudgetsUncheckedUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.BudgetsUncheckedUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsUncheckedUpdateWithoutUserInput>;
export const BudgetsUncheckedUpdateWithoutUserInputObjectZodSchema = makeSchema();
