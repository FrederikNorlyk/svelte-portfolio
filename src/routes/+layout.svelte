<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';

	import {
		AppShell,
		AppBar,
		Avatar,
		Toast,
		Modal,
		type PopupSettings,
		popup,
		LightSwitch
	} from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar
			shadow="shadow-md"
			padding="p-3 pl-5 pr-5 sm:pl-16 sm:pr-16 md:pl-20 md:pr-20 2xl:pl-36 2xl:pr-36"
		>
			<svelte:fragment slot="lead">
				<a
					href="/accounts"
					class="select-none text-3xl"
					style="font-family: 'Permanent Marker', cursive;"
				>
					USER NAME
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface hidden sm:block"
					href="/"
					rel="noreferrer">Portfolio</a
				>
				<a class="btn btn-sm variant-ghost-surface hidden sm:block" href="/about" rel="noreferrer"
					>About me</a
				>
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<div class="m-5 sm:ml-16 sm:mr-16 sm:mt-10 md:ml-40 md:mr-40 2xl:ml-64 2xl:mr-64">
		<slot />
	</div>
</AppShell>
