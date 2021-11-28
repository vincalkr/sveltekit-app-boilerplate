<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { Post } from '$lib/features/blog/types';

	export const load: Load = async ({ page, fetch }) => {

	const allPosts = import.meta.glob('../../lib/features/blog/posts/**/*.svx');

	let posts: Post[] = [];

	for (const path in allPosts) {
		const module = await allPosts[path]();

		posts = [...posts, { metadata: module.metadata, path, module: module.default }];
	}

	return {
			props: {
				posts
			}
		};
	}
</script>

<script lang="ts">

	export let posts: Post[];
</script>

{#each posts as { metadata }}
	<li>
		<a rel="prefetch" href="blog/posts/{metadata.slug}">
			<h2>
				{metadata.title}
			</h2>
		</a>
	</li>
{/each}

{#if posts.length === 0}
	<p>No posts found.</p>
{/if}
