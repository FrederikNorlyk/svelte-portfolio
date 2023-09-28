<script lang="ts">
    import { PUBLIC_CONTACT, PUBLIC_ABOUT, PUBLIC_USERNAME } from '$env/static/public';
	import LinkChip from '$lib/components/LinkChip.svelte';
</script>

<section class="card bg-white p-6 space-y-3">
    <img class="w-48 h-48 rounded-full" src="/profile.png" alt={PUBLIC_USERNAME}>
    <h1 class="text-xl">Om mig</h1>
    <p>{PUBLIC_ABOUT}</p>
    <LinkChip href={PUBLIC_CONTACT} text="Kontakt mig" />
</section>