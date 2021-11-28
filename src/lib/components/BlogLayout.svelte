<script>
	export let title;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<article class="container prose py-4">
	<slot>No content</slot>
</article>
