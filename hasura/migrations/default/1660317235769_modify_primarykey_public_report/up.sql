BEGIN TRANSACTION;
ALTER TABLE "public"."report" DROP CONSTRAINT "Report_pkey";

ALTER TABLE "public"."report"
    ADD CONSTRAINT "Report_pkey" PRIMARY KEY ("id");
COMMIT TRANSACTION;
