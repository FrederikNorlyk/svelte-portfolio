import { ProjectsClient } from '$lib/clients/ProjectsClient';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const client = new ProjectsClient();
	const projects = await client.listAll('creation_date');

	return {
		projects: projects.map((p) => p.serialize())
	};
};
