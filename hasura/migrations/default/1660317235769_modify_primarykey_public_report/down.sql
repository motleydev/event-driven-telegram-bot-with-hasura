alter table "public"."report" drop constraint "report_pkey";
alter table "public"."report"
    add constraint "Report_pkey"
    primary key ("id", "t_message_id");
