import type { PageServerLoad } from "./$types"
import { ProjectsClient } from "$lib/clients/ProjectsClient"

export const load: PageServerLoad = async (event) => {
    const client = new ProjectsClient()
    const projects = await client.listAll('creation_date')

    return {
        projects: projects.map((p) => p.serialize())
    }
}