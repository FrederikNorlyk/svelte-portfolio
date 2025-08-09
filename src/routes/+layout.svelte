<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch, type PopupSettings, popup } from '@skeletonlabs/skeleton';
	import { PUBLIC_USERNAME } from '$env/static/public';
	import IconBarsThree from '$lib/icons/IconBarsThree.svelte';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	const userMenuPopup: PopupSettings = {
		event: 'click',
		target: 'userMenuPopup',
		placement: 'bottom'
	};
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar
			shadow="shadow-md"
			padding="p-3 pl-5 pr-5 sm:pl-16 sm:pr-16 md:pl-40 md:pr-40 2xl:pl-64 2xl:pr-64"
		>
			<svelte:fragment slot="lead">
				<a href="/" class="select-none text-3xl">
					{PUBLIC_USERNAME}
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />

				<a class="variant-ghost-surface btn btn-sm hidden sm:block" href="/" rel="noreferrer">
					Portfolio
				</a>
				<a class="variant-ghost-surface btn btn-sm hidden sm:block" href="/about" rel="noreferrer">
					Om mig
				</a>

				<button class="pr-4 sm:hidden" use:popup={userMenuPopup} aria-label="Menu button">
					<IconBarsThree cssClass="w-8 h-8" />
				</button>

				<div data-popup="userMenuPopup">
					<div class="borderborder-gray-400 card mr-3 mt-3 w-40 space-y-2 p-4 shadow-xl">
						<a class="variant-ghost btn w-full sm:hidden" href="/" rel="noreferrer">Portfolio</a>
						<a class="variant-ghost btn w-full sm:hidden" href="/about" rel="noreferrer">Om mig</a>
					</div>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<div class="m-5 pb-96 sm:ml-16 sm:mr-16 sm:mt-10 md:ml-40 md:mr-40 2xl:ml-64 2xl:mr-64">
		<slot />
	</div>
</AppShell>
