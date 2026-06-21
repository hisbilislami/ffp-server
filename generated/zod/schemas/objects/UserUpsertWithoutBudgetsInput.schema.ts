import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserUpdateWithoutBudgetsInputObjectSchema as UserUpdateWithoutBudgetsInputObjectSchema } from './UserUpdateWithoutBudgetsInput.schema';
import { UserUncheckedUpdateWithoutBudgetsInputObjectSchema as UserUncheckedUpdateWithoutBudgetsInputObjectSchema } from './UserUncheckedUpdateWithoutBudgetsInput.schema';
import { UserCreateWithoutBudgetsInputObjectSchema as UserCreateWithoutBudgetsInputObjectSchema } from './UserCreateWithoutBudgetsInput.schema';
import { UserUncheckedCreateWithoutBudgetsInputObjectSchema as UserUncheckedCreateWithoutBudgetsInputObjectSchema } from './UserUncheckedCreateWithoutBudgetsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutBudgetsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutBudgetsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutBudgetsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBudgetsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutBudgetsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutBudgetsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutBudgetsInput>;
export const UserUpsertWithoutBudgetsInputObjectZodSchema = makeSchema();
