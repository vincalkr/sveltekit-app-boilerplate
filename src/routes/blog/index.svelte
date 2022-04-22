<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import trpc, { isTRPCClientError } from '$lib/trpcClient';
 
	export const load: Load = async ({ fetch }) => {
		const trpcClient = trpc(fetch);

		let posts;

		try {
			posts = await trpcClient.query('posts:list');
		} 
		catch(exception) {
			if(isTRPCClientError(exception)) {
				return {
					status: exception.data?.httpStatus,	
				}
			}
		}

		return {
			props: {
				posts
			}
		}
	}

</script>

<script lang="ts">
	import type { Post, User, Comment } from '@prisma/client';

	export let posts: (Post & { author: User; _count: { comment: number } })[];
</script>

<section class="py-6 sm:py-12 bg-coolGray-100 text-coolGray-800">
	<div class="container p-6 mx-auto space-y-8">
		<div class="space-y-2 text-center">
			<h2 class="text-3xl font-bold">My Blog</h2>
			<p class="font-serif text-sm text-coolGray-600">Tech, business, and personal stories.</p>
		</div>
		<div class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
			{#each posts as post}
				<article class="flex flex-col bg-coolGray-50 shadow-md rounded">
					<a href={`blog/posts/${post.id}`} aria-label="Te nulla oportere reprimique his dolorum">
						<img
							alt=""
							class="object-cover w-full h-52 bg-coolGray-500"
							src="https://source.unsplash.com/201x201/?fashion"
						/>
					</a>
					<div class="flex flex-col flex-1 p-6">
						<a href="#" aria-label="Te nulla oportere reprimique his dolorum" />
						<a href="#" class="text-xs tracking-wider uppercase hover:underline text-indigo-600"
							>{post.author.name}</a
						>
						<h3 class="flex-1 py-2 text-lg font-semibold leading-snug">
							{post.title}
						</h3>
						<span>{Intl.DateTimeFormat('it-IT').format(new Date(post.createdAt))}</span>
						<div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
							{#if post._count.comment > 0}
								<span
									><strong>{post._count.comment}</strong> comment{(post._count.comment > 1 &&
										'i') ||
										'o'}</span
								>
							{:else}
								<span>Nessun commento</span>
							{/if}
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
