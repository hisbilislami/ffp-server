// import { prismaAdapter } from "@better-auth/prisma-adapter";
// import { betterAuth } from "better-auth";
// import { prisma } from "./pg-helper";
// import { bearer } from "better-auth/plugins";
//
// const allowedOrigins = (
//   process.env.CORS_ORIGINS ?? "http://localhost:3000,http://localhost:3001"
// )
//   .split(",")
//   .map((origin) => origin.trim())
//   .filter(Boolean);
//
// export const auth = betterAuth({
//   database: prismaAdapter(prisma, {
//     provider: "postgresql",
//   }),
//   baseURL: process.env.BETTER_AUTH_URL ?? "http://localhost:3000/auth",
//   trustedOrigins: allowedOrigins,
//   emailAndPassword: {
//     enabled: true,
//   },
//   plugins: [bearer()],
// });
import { betterAuth } from "better-auth";
import { bearer } from "better-auth/plugins";

const allowedOrigins = (
  process.env.CORS_ORIGINS ?? "http://localhost:3000,http://localhost:3001"
)
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL ?? "http://localhost:3000/auth",
  trustedOrigins: allowedOrigins,
  emailAndPassword: {
    enabled: true,
  },
  plugins: [],
});
