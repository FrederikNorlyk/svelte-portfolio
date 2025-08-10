<script lang="ts">
	import IconArrowTopRightOnSquare from '$lib/icons/IconArrowTopRightOnSquare.svelte';

	export let href: string;
	export let text: string;
</script>

<a class="preset-tonal chip hover:preset-filled" {href} target="_blank">
	<span><IconArrowTopRightOnSquare cssClass="h-3" /></span>
	<span>{text}</span>
</a>
