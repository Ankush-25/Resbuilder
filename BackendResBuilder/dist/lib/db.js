//Direct Usage of the postgres sql not prisma
import { Pool } from "pg";
import dotenv from 'dotenv';
import { log } from "../logger/Logger.js";
dotenv.config();
if (!process.env.POSTGRES_URI) {
    throw new Error("POSTGRES_URI is not defined in environment variables");
}
export const pool = new Pool({
    connectionString: process.env.POSTGRES_URI,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});
export const query = (text, params) => {
    return pool.query(text, params);
};
export async function connectDB() {
    const client = await pool.connect();
    try {
        const res = await client.query("SELECT NOW()");
        console.log("Postgres successfully connected", res.rows[0].now);
        log.info("Postgres successfully connected", res.rows[0].now);
    }
    catch (error) {
        console.error("Database connection failed:", error);
        log.error("Database connection failed:", error);
    }
    finally {
        client.release();
    }
}
export default pool;
//# sourceMappingURL=db.js.map