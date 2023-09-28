<script lang="ts">
	import LinkChip from '$lib/components/LinkChip.svelte';
import IconArrowTopRightOnSquare from '$lib/icons/IconArrowTopRightOnSquare.svelte';
	import { Project } from '$lib/models/Project.js';

	export let data
	const projects = data.projects.map((p) => Project.parse(p));
</script>

<div class="space-y-10">
	{#each projects as project (project.getId())}
		<section class="space-y-1">
			<div class="card rounded-md bg-white flex overflow-hidden items-center space-x-5 pr-5">
				<img class="w-32 border-r" src=/projects/{project.getImage()} alt="Thumbnail for {project.getTitle()}" />
				<p style="" class="smart-break text-2xl sm:text-3xl w-full overflow-ellipsis break-words">{project.getTitle()}</p>
			</div>
			<div class="card rounded-md bg-white p-10 space-y-2">
				{#each project.getBody() as paragraph }
					<p>{paragraph}</p>
				{/each}
				{#if project.getLink() }
					<LinkChip href={project.getLink()} text={project.getLinkText()} />
				{/if}
				<h2 class="text-sm">Technologies</h2>
				<div class="space-x-1">
					{#each project.getTechnologies() as technology (technology)}
						<span class="badge variant-filled">{technology}</span>
					{/each}
				</div>
			</div>
		</section>
	{/each}
</div>

<style>
	/* Tailwind "break-word" can not break long words only long sentences */
	.smart-break {
		overflow-wrap: break-word;
		word-wrap: break-word;
		-ms-word-break: break-all;
		word-break: break-word;
		-ms-hyphens: auto;
		-moz-hyphens: auto;
		-webkit-hyphens: auto;
		hyphens: auto;
	}
</style>