<script lang="ts">
	import { onMount } from 'svelte';
	import { blur, fade } from 'svelte/transition';
	import Rectangle from '$lib/components/Rectangle.svelte';

	let visible = false;

	onMount(() => {
		visible = true;
	});
</script>

<section class="container flex flex-col items-center py-32 mx-auto">
	<div class="w-full mx-auto text-left md:w-11/12 xl:w-8/12 md:text-center">
		{#if visible}
			<h1
				class="mb-3 text-4xl font-bold text-gray-900 dark:text-gray-400 md:text-5xl md:leading-tight md:font-extrabold"
				in:blur={{ duration: 2000 }}
			>
				SvelteKit Boilerplate
			</h1>
		{/if}
		<p class="mb-6 text-lg text-gray-500 md:text-xl md:leading-normal">
			The structure of the project follows the pattern Domain-driven design DDD (features)
		</p>
		<div
			class="flex flex-col justify-start mb-3 space-x-0 space-y-2 text-xs text-gray-600 md:flex-row md:justify-center md:space-x-8 md:space-y-0"
		>
			<div class="flex items-center">
				<svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mr-1 text-green-600">
					<path
						fill-rule="evenodd"
						d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
				Smaller footprint
			</div>
			<div class="flex items-center">
				<svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mr-1 text-green-600">
					<path
						fill-rule="evenodd"
						d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
				SEO and progressive enhancement of a server-rendered app
			</div>
			<div class="flex items-center">
				<svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mr-1 text-green-600">
					<path
						fill-rule="evenodd"
						d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
				Advanced routing, SSR, code-splitting, offline support and more
			</div>
		</div>
	</div>
	<br />
	<Rectangle on:trigger={(event) => alert(event.detail)} />
</section>
