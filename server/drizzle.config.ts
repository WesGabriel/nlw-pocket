import { env } from "./src/env";
import { defineConfig } from "./node_modules/drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./.migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
