import { pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: uuid().defaultRandom().primaryKey().notNull(),
  name: varchar({ length: 160 }).notNull(),
  email: varchar({ length: 120 }).notNull(),
  clerkId: varchar("clerk_id", { length: 255 }).notNull(),
});
