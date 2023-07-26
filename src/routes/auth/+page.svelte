<script>
	export let data;
</script>

{#await data.streamed.greeting}
	<p>loading...</p>
{:then { message }}
	<p>{message}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
