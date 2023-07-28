<script>
	export let data;

	$: ({
		greeting: { message }
	} = data);
</script>

<p>{message}</p>
