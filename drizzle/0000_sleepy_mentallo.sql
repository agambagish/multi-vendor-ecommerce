CREATE TABLE "stores" (
	"id" uuid DEFAULT gen_random_uuid(),
	"name" text NOT NULL,
	"owner_id" text NOT NULL,
	"email" text NOT NULL,
	"vpa" text NOT NULL,
	CONSTRAINT "stores_ownerId_unique" UNIQUE("owner_id"),
	CONSTRAINT "stores_email_unique" UNIQUE("email")
);
