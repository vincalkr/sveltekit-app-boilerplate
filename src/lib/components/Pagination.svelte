<script lang="ts">
	export let pageCount: number = 1;
	export let currentPage: number = 1;
</script>

<article class="flex justify-center items-center ">
	<nav class="relative inline-flex shadow-sm -space-x-px" aria-label="Pagination">
		<a
			href="#"
			class="relative inline-flex items-center px-2 py-3 rounded-l-md border border-gray-200 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
		>
			<i class="fa fa-angle-double-left px-2" />
		</a>
		<a
			href="#"
			class="relative inline-flex items-center px-4 py-3 border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
		>
			<i class="fa fa-angle-left" />
		</a>
		{#each new Array(pageCount) as item, i}
			{#if i < 5}
				<a
					href="#"
					class={`relative inline-flex items-center px-4 py-3 border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ${
						(i + 1 == currentPage && 'bg-gray-100') || ''
					}`}
				>
					{i + 1}
				</a>
			{:else if i > 5 && i < 10}
				<a
					href="#"
					class={`hidden sm:block relative inline-flex items-center px-4 py-3 border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ${
						(i + 1 == currentPage && 'bg-gray-100') || ''
					}`}
				>
					{i + 1}
				</a>
			{/if}
		{/each}
		<!-- <a
				href="#"
				class="relative inline-flex items-center px-4 py-3 border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
			>
				2
			</a>
			<a
				href="#"
				class="hidden md:inline-flex relative items-center px-4 py-3 border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
			>
				3
			</a>
			<span
				class="relative inline-flex items-center px-4 py-3 border border-gray-200 bg-white text-sm font-medium text-gray-700"
			>
				...
			</span>
			<a
				href="#"
				class="hidden md:inline-flex relative items-center px-4 py-3 border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
			>
				8
			</a>
			<a
				href="#"
				class="relative inline-flex items-center px-4 py-3 border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
			>
				9
			</a>
			<a
				href="#"
				class="relative inline-flex items-center px-4 py-3 border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
			>
				10
			</a> -->
		<a
			href="#"
			class="relative inline-flex items-center px-4 py-3 border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
		>
			<i class="fa fa-angle-right" />
		</a>
		<a
			href="#"
			class="relative inline-flex items-center px-2 py-3 rounded-r-md border border-gray-200 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
		>
			<i class="fa fa-angle-double-right px-2" />
		</a>
	</nav>
</article>
