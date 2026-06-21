import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutBudgetsInputObjectSchema as UserCreateWithoutBudgetsInputObjectSchema } from './UserCreateWithoutBudgetsInput.schema';
import { UserUncheckedCreateWithoutBudgetsInputObjectSchema as UserUncheckedCreateWithoutBudgetsInputObjectSchema } from './UserUncheckedCreateWithoutBudgetsInput.schema';
import { UserCreateOrConnectWithoutBudgetsInputObjectSchema as UserCreateOrConnectWithoutBudgetsInputObjectSchema } from './UserCreateOrConnectWithoutBudgetsInput.schema';
import { UserUpsertWithoutBudgetsInputObjectSchema as UserUpsertWithoutBudgetsInputObjectSchema } from './UserUpsertWithoutBudgetsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutBudgetsInputObjectSchema as UserUpdateToOneWithWhereWithoutBudgetsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutBudgetsInput.schema';
import { UserUpdateWithoutBudgetsInputObjectSchema as UserUpdateWithoutBudgetsInputObjectSchema } from './UserUpdateWithoutBudgetsInput.schema';
import { UserUncheckedUpdateWithoutBudgetsInputObjectSchema as UserUncheckedUpdateWithoutBudgetsInputObjectSchema } from './UserUncheckedUpdateWithoutBudgetsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutBudgetsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBudgetsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBudgetsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutBudgetsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutBudgetsInputObjectSchema), z.lazy(() => UserUpdateWithoutBudgetsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutBudgetsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutBudgetsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutBudgetsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutBudgetsNestedInput>;
export const UserUpdateOneRequiredWithoutBudgetsNestedInputObjectZodSchema = makeSchema();
