//Direct Usage of the postgres sql not prisma
import { Pool } from "pg";
import dotenv from 'dotenv';
import type { QueryResultRow } from "pg";
import { log } from "../logger/Logger.js";
dotenv.config();
if (!process.env.DATABASE_URL
) {
  throw new Error("DATABASE_URL is not defined in environment variables");
}
 const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export const query = <T extends QueryResultRow>(text: string, params?: unknown[]) => {
  return pool.query<T>(text, params);
};


export async function connectDB(): Promise<void> {
  const client = await pool.connect();
  try {
    const res = await client.query("SELECT NOW()");
    console.log("Postgres successfully connected", res.rows[0].now);
    log.info("Postgres successfully connected", res.rows[0].now);
  } catch (error) {
    console.error("Database connection failed:", error);
    log.error("Database connection failed:", error as Error);
  } finally {
    client.release();
  }
}
export default pool;