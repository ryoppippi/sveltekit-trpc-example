<script>
	export let data;

	$: ({ message } = data);
</script>

<p>{message}</p>
