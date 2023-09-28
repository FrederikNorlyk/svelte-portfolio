import { POSTGRES_URL } from "$env/static/private"
import type { DatabaseRecord } from "$lib/models/DatabaseRecord"
import { createPool, type QueryResultRow } from "@vercel/postgres"

/**
 * Abstract class for clients used to query the database.
 */
export abstract class DatabaseClient<T extends DatabaseRecord> {

    private pool

    /**
     * Constructor.
     */
    constructor() {
        this.pool = createPool({connectionString: POSTGRES_URL})
    }

    /**
     * Get the database pool.
     * 
     * @returns database pool
     */
    protected getPool() {
        return this.pool;
    }

    /**
     * Returns the name of the table to query.
     */
    protected abstract getTableName(): string

    /**
     * Parses a query result row into a database record.
     * 
     * @param row a row returned by a query
     */
    protected abstract parse(row: QueryResultRow): T

    /**
     * List all records.
     * 
     * @param orderBy the column to sort the columns by
     * @returns all records
     */
    public async listAll(orderBy: string): Promise<T[]> {
        let result
        try {
            result = await this.pool.query(`
                SELECT * 
                FROM ${this.getTableName()} 
                ORDER BY ${orderBy} DESC
            `)
        } catch (e) {
            console.error(e)
            return []
        }

        return result.rows.map((row) => this.parse(row))
    }
}