<script lang="ts">
	import { PUBLIC_CONTACT, PUBLIC_ABOUT, PUBLIC_USERNAME } from '$env/static/public';
	import LinkChip from '$lib/components/LinkChip.svelte';
</script>

<section class="card space-y-3 bg-white p-6">
	<img class="h-48 w-48 rounded-full" src="/profile.png" alt={PUBLIC_USERNAME} />
	<h1 class="text-xl">Om mig</h1>
	<p>{PUBLIC_ABOUT}</p>
	<LinkChip href={PUBLIC_CONTACT} text="Kontakt mig" />
</section>
