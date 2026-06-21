import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBudgetsInputObjectSchema as UserCreateWithoutBudgetsInputObjectSchema } from './UserCreateWithoutBudgetsInput.schema';
import { UserUncheckedCreateWithoutBudgetsInputObjectSchema as UserUncheckedCreateWithoutBudgetsInputObjectSchema } from './UserUncheckedCreateWithoutBudgetsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutBudgetsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBudgetsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutBudgetsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutBudgetsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutBudgetsInput>;
export const UserCreateOrConnectWithoutBudgetsInputObjectZodSchema = makeSchema();
