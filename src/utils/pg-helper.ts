import { PrismaClient } from "../../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = Bun.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("Setup your database connection in your environment system.");
}

const adapter = new PrismaPg({
  connectionString: connectionString!,
});

export const prisma = new PrismaClient({ adapter });
