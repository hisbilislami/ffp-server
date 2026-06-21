import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutBudgetsInputObjectSchema as UserCreateWithoutBudgetsInputObjectSchema } from './UserCreateWithoutBudgetsInput.schema';
import { UserUncheckedCreateWithoutBudgetsInputObjectSchema as UserUncheckedCreateWithoutBudgetsInputObjectSchema } from './UserUncheckedCreateWithoutBudgetsInput.schema';
import { UserCreateOrConnectWithoutBudgetsInputObjectSchema as UserCreateOrConnectWithoutBudgetsInputObjectSchema } from './UserCreateOrConnectWithoutBudgetsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutBudgetsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBudgetsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBudgetsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutBudgetsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutBudgetsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutBudgetsInput>;
export const UserCreateNestedOneWithoutBudgetsInputObjectZodSchema = makeSchema();
