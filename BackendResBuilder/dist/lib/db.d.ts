import { Pool } from "pg";
import type { QueryResultRow } from "pg";
export declare const pool: Pool;
export declare const query: <T extends QueryResultRow>(text: string, params?: unknown[]) => Promise<import("pg").QueryResult<T>>;
export declare function connectDB(): Promise<void>;
export default pool;
//# sourceMappingURL=db.d.ts.map