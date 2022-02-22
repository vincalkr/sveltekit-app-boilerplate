<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ url: { pathname }, params }) => ({
	  props: {
		key: pathname
	  },
	})
  </script>
  
<script lang="ts">
	import '$lib/styles.css';
	import '@fortawesome/fontawesome-free/css/all.css';
	import { QueryClientProvider, QueryClient } from '@sveltestack/svelte-query';
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';

	export let key: string;

	$: console.log({ ssr: key});
	$: console.log({ spa: $page.url.pathname});

	const queryClient = new QueryClient();
</script>


<QueryClientProvider client={queryClient}>
	<PageTransition refresh={key}>
		<article class="dark:bg-gray-800">
			<section class="bg-gray-100">
				<Navigation />
			</section>
			<aside />
			<main>
				<slot>Empty content</slot>
			</main>
			<aside />
			{#if $page.url.pathname != '/'}
				<Footer />
			{/if}
		</article>
	</PageTransition>
</QueryClientProvider>
