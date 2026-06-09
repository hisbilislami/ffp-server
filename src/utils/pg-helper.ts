import { Prisma, PrismaClient } from "../../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = Bun.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("Setup your database connection in your environment system.");
}

const adapter = new PrismaPg({
  connectionString: connectionString!,
});

export const basePrisma = new PrismaClient({ adapter });

export const prisma = basePrisma.$extends({
  model: {
    $allModels: {
      async paginate<T>(
        this: T,
        args: Prisma.Args<T, "findMany"> & {
          page?: number;
          limit?: number;
        },
      ) {
        const page = args.page ?? 1;
        const limit = args.limit ?? 10;

        const skip = (page - 1) * limit;
        const take = limit;

        const { page: _, limit: __, ...prismaArgs } = args;

        const [data, total] = await Promise.all([
          (this as any).findMany({
            ...prismaArgs,
            skip,
            take,
          }),
          (this as any).count({
            where: (prismaArgs as any).where,
          }),
        ]);

        const lastPage = Math.ceil(total / limit);

        return {
          data,
          meta: {
            total,
            page,
            limit,
            lastPage,
            hasNextPage: page < lastPage,
            hasPrevPage: page > 1,
          },
        };
      },
    },
  },
});
