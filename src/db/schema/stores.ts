import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const stores = pgTable("stores", {
  id: uuid().defaultRandom(),
  name: text().notNull(),
  ownerId: text().notNull().unique(),
  email: text().notNull().unique(),
  vpa: text().notNull(),
});
