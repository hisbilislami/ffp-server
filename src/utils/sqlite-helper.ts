import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { Prisma, PrismaClient } from "../../generated/prisma/client";

const connectionString = Bun.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("Setup your database connection in your environment system.");
}

const adapter = new PrismaBetterSqlite3(
  { url: "file:./prisma/ffp-server.db" },
  { timestampFormat: "unixepoch-ms" },
);

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
        const requestedLimit = args.limit ?? 10;

        if (page < 1) {
          throw new Error("Pagination page must be greater than 0.");
        }

        if (requestedLimit < 1) {
          throw new Error("Pagination limit must be greater than 0.");
        }

        const limit = Math.min(requestedLimit, 50);
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
