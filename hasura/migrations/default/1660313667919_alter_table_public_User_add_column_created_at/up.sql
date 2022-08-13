alter table "public"."User" add column "created_at" timestamptz
 null default now();
