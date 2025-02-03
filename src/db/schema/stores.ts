import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const stores = pgTable("stores", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text().notNull(),
  email: text().notNull().unique(),
  phoneNo: text().notNull().unique(),
  vpa: text().notNull(),
});
