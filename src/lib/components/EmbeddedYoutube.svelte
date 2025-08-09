<script lang="ts">
	export let src: string;
	export let title: string;
</script>

<iframe
	class="h-96 w-full"
	{src}
	{title}
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	allowfullscreen
></iframe>
