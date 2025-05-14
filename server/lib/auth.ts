import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "../db";
import * as schema from "../db/schemas/auth";

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET || undefined,
  emailAndPassword: {
    enabled: true,
  },
  advanced: {
    cookiePrefix: "better-auth",
  },
  trustedOrigins: [process.env.CORS_ORIGIN || "http://localhost:3050"],
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: schema,
  }),
});
