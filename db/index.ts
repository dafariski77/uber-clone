import { databaseUrl } from "@/configs/db";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(databaseUrl!);

export const db = drizzle(sql);
