ALTER TABLE "user" RENAME COLUMN "password_hash" TO "password";--> statement-breakpoint
ALTER TABLE "user" DROP CONSTRAINT "user_name_unique";--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "email" text NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_email_unique" UNIQUE("email");