<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { Post } from '$lib/features/blog/types';

	const allPosts = import.meta.globEager('../../../lib/features/blog/posts/**/*.svx');

	let posts: Post[] = [];

	for (const path in allPosts) {
		const module = allPosts[path];

		posts = [...posts, { metadata: module.metadata, path, module: module.default }];
	}

	export const load: Load = async ({
		page: {
			params: { slug }
		},
	}) => {
		const post = posts.find((post) => post.metadata.slug === slug);

		return {
			props: {
				page: post.module,
				metadata: post.metadata
			}
		};
	};
</script>

<script lang="ts">
	export let page;
	export let metadata;
</script>

<div>
	<svelte:component this={page} />
</div>
