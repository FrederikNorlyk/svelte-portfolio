<script lang="ts">
	import IconArrowTopRightOnSquare from '$lib/icons/IconArrowTopRightOnSquare.svelte';

	const projects = [
		{
			id: 1,
			title: 'Project one with a long name',
			body: 'On project one i worked on one thing, On project one i worked on one thing, On project one i worked on one thing, On project one i worked on one thing, On project one i worked on one thing, On project one i worked on one thing, On project one i worked on one thing, On project one i worked on one thing, On project one i worked on one thing, On project one i worked on one thing, On project one i worked on one thing, ',
			link: 'https://github.com/FrederikNorlyk',
			linkText: 'Visit my github',
			image: 'https://frederiknorlyk.dk/images/svelte.jpg',
			technologies: ['Java', 'Flutter', 'Ext JS']
		},
		{
			id: 2,
			title: 'Project two',
			body: 'On project two i worked on two things',
			link: 'https://github.com/FrederikNorlyk',
			linkText: 'Check out project two',
			image: 'https://frederiknorlyk.dk/images/opinionMining.png',
			technologies: ['Svelte', 'React', 'Python', 'TypeScript']
		}
	];
</script>

<div class="space-y-10">
	{#each projects as project (project.id)}
		<div class="space-y-1">
			<div class="card rounded-md bg-white flex overflow-hidden items-center space-x-5">
				<img class="w-32 border-r" src={project.image} alt="Thumbnail for {project.title}" />
				<p class="text-3xl">{project.title}</p>
			</div>
			<div class="card rounded-md bg-white p-10 space-y-2">
				<p>{project.body}</p>
				{#if project.link}
					<a class="chip variant-soft hover:variant-filled" href={project.link}>
						<span><IconArrowTopRightOnSquare cssClass="h-3" /></span>
						<span>{project.linkText}</span>
					</a>
				{/if}
				<h2 class="text-sm">Technologies</h2>
				<div class="space-x-1">
					{#each project.technologies as technology (technology)}
						<span class="badge variant-filled">{technology}</span>
					{/each}
				</div>
			</div>
		</div>
	{/each}
</div>
