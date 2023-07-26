<script>
	import { trpc } from '$lib/trpc/client';

	const greeting = trpc().example.greeting.query();
</script>

{#await greeting}
	<p>loading...</p>
{:then { message }}
	<p>{message}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
