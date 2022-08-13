CREATE TABLE "User" (
  "id" SERIAL PRIMARY KEY,
  "name" text NOT NULL,
  "t_id" text UNIQUE NOT NULL
);

CREATE TABLE "Report" (
  "id" SERIAL,
  "location" geometry(point),
  "image_url" text,
  "t_update_id" text UNIQUE NOT NULL,
  "t_user_id" text UNIQUE NOT NULL,
  "t_message_id" text,
  PRIMARY KEY ("id", "t_message_id")
);

ALTER TABLE "Report" ADD FOREIGN KEY ("t_user_id") REFERENCES "User" ("t_id");
