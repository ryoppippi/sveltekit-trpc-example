<script>
	import { page } from '$app/stores';

	const routes = Object.keys(import.meta.glob('./**/+page.svelte'))
		.map((route) => '/' + route.replace('./', '').replace('+page.svelte', '').replace(/\/$/, ''))
		.sort((a, b) => a.split('/').length - b.split('/').length);
</script>

<div class="header">
	{#each routes as route}
		<div>
			{#if route !== $page.route.id}
				<a href={route}>{route}</a>
			{:else}
				<p>{route}</p>
			{/if}
		</div>
	{/each}
</div>

<slot />

<style>
	.header {
		display: flex;
		gap: 1rem;
	}
</style>
