import { defineConfig } from "drizzle-kit";
import { databaseUrl } from "./configs/db";

export default defineConfig({
  out: "./db/drizzle",
  schema: "./db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: databaseUrl,
  },
});
