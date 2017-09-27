CREATE TABLE "public"."products" (
    "id" serial primary key,
    "name" varchar(40),
    "description" varchar(80),
    "price" integer,
    "imageurl" text
);