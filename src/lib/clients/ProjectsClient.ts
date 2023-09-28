import { Project } from "$lib/models/Project"
import { DatabaseClient } from "$lib/clients/DatabaseClient"
import type { QueryResultRow } from "@vercel/postgres"

/**
 * Client for querying projects in the database.
 */
export class ProjectsClient extends DatabaseClient<Project> {

    protected override getTableName(): string {
        return 'portfolio_projects'
    }

    protected override parse(row: QueryResultRow) {
        return new Project(
            +row.id, 
            new Date(row.creation_date), 
            row.title, 
            row.body, 
            row.link, 
            row.link_text, 
            row.image, 
            row.technologies
        )
    }
}