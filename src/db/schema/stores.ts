import { pgTable, text } from "drizzle-orm/pg-core";

export const stores = pgTable("stores", {
  id: text().$defaultFn(() => crypto.randomUUID()).primaryKey(),
  name: text().notNull(),
  ownerId: text().notNull().unique(),
  email: text().notNull().unique(),
  vpa: text().notNull(),
});
