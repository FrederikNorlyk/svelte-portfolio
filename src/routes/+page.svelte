<script lang="ts">
	import EmbeddedYoutube from '$lib/components/EmbeddedYoutube.svelte';
	import LinkChip from '$lib/components/LinkChip.svelte';
	import { Project } from '$lib/models/Project.js';

	export let data;
	const projects = data.projects.map((p) => Project.parse(p));
</script>

<div class="space-y-10">
	{#each projects as project (project.getId())}
		<section class="space-y-1">
			<div class="card flex items-center space-x-5 overflow-hidden bg-white pr-5">
				<img
					class="w-32 border-r"
					src="/projects/{project.getImage()}"
					alt="Thumbnail for {project.getTitle()}"
				/>
				<p style="" class="smart-break w-full text-2xl break-words overflow-ellipsis sm:text-3xl">
					{project.getTitle()}
				</p>
			</div>
			<div class="card space-y-2 bg-white p-10">
				{#each project.getBody() as paragraph}
					<p>{paragraph}</p>
				{/each}

				{#if project.getLink()}
					{#if project.getLink().startsWith('https://www.youtube.com/embed')}
						<EmbeddedYoutube src={project.getLink()} title={project.getLinkText()} />
					{:else}
						<LinkChip href={project.getLink()} text={project.getLinkText()} />
					{/if}
				{/if}
				<h2 class="text-sm">Technologies</h2>
				<div class="space-x-1">
					{#each project.getTechnologies() as technology (technology)}
						<span class="variant-filled badge">{technology}</span>
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
