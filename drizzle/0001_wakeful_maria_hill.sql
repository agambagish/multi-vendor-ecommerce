ALTER TABLE "stores" ADD PRIMARY KEY ("id");--> statement-breakpoint
ALTER TABLE "stores" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "stores" ALTER COLUMN "id" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "stores" ALTER COLUMN "id" SET NOT NULL;