import { prisma } from "../../utils/pg-helper";
import { UpdateUserInput, UserPaginationInput } from "./users.schema";

export const usersService = {
  async getAllUsers(filters: UserPaginationInput) {
    const { page, limit, search } = filters;

    const whereCondition = search
      ? {
          OR: [
            { name: { contains: search, mode: "insensitive" as const } },
            { email: { contains: search, mode: "insensitive" as const } },
          ],
        }
      : {};

    return prisma.user.paginate({
      where: whereCondition,
      page,
      limit,
      orderBy: { createdAt: "desc" },
    });
  },

  async getUserById(id: string) {
    return prisma.user.findUnique({
      where: { id },
    });
  },

  async updateUser(id: string, data: UpdateUserInput) {
    return prisma.user.update({
      where: { id },
      data: {
        name: data.name,
        image: data.image,
      },
    });
  },
};
