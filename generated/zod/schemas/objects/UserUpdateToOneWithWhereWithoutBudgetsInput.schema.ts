import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutBudgetsInputObjectSchema as UserUpdateWithoutBudgetsInputObjectSchema } from './UserUpdateWithoutBudgetsInput.schema';
import { UserUncheckedUpdateWithoutBudgetsInputObjectSchema as UserUncheckedUpdateWithoutBudgetsInputObjectSchema } from './UserUncheckedUpdateWithoutBudgetsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutBudgetsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutBudgetsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutBudgetsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBudgetsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBudgetsInput>;
export const UserUpdateToOneWithWhereWithoutBudgetsInputObjectZodSchema = makeSchema();
