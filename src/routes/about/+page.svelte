<script lang="ts">
    import { PUBLIC_CONTACT, PUBLIC_ABOUT, PUBLIC_USERNAME } from '$env/static/public';
	import LinkChip from '$lib/components/LinkChip.svelte';
</script>

<section class="card bg-white p-6 flex space-x-4">
    <img class="w-48 rounded-full" src="/profile.png" alt={PUBLIC_USERNAME}>
    <div>

        <h1>Om mig</h1>
        <p>{PUBLIC_ABOUT}</p>
        <LinkChip href={PUBLIC_CONTACT} text="Kontakt mig" />
    </div>
</section>