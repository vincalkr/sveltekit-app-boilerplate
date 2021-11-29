<script lang="ts" context="module">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';
	export async function load({ page: { host } }: LoadInput): Promise<LoadOutput> {
		return {
			props: {
				msg: 'Server Side',
				host
			}
		};
	}
</script>

<script lang="ts">
	export let msg: string;
	export let host: string;

	import moviesState, { actions as moviesActions } from '../lib/features/movies/state';
	import { useGetMovies } from '../lib/features/movies/queries';
	import type { Movie } from '../lib/features/movies/types';

	let search: string = 'matrix';

	$: movies = useGetMovies(search);

	function selectMovieHandler(movie: Movie) {
		moviesActions.select(movie);
		scrollTo({ top: 0, behavior: 'smooth' });
	}

	$: console.log($moviesState.selected);
	$: console.log(search);
</script>

<svelte:head>
	<title>TV show information</title>
</svelte:head>

<!-- {@debug msg, host} -->

<div class="theme-neon grid grid-cols-1 md:grid-cols-1 m-5 justify-items-center">
	<div class="dark:text-white">{`SSR Rendering: ${host} - ${msg}`}</div>
	<div class="flex flex-col m-3 dark:text-white">
		{#if $moviesState.selected}
			<div class="flex space-x-1 border-2 p-2 mb-2 rounded-md items-center animate-pulse">
				<h3 class="text-lg font-semibold">Selected show:</h3>
				<p>{$moviesState.selected.show.name}</p>
			</div>
		{/if}
		<!-- <label for="page-size" class="text-skin-base"> Page items: </label>
		<select
			name="page-size"
			class="dark:text-black"
			on:change={(event) => (pageSize = Number(event.currentTarget.value))}
		>
			<option value="1"> 1</option>
			<option value="5" selected> 5</option>
			<option value="10">10</option>
			<option value="100">100 </option>
		</select> -->
		<div class="square" />
		<button class="btn p-111">Click me</button>
	</div>
	<br />
	<div class="flex items-center border-2 rounded-lg">
		<input bind:value={search} class="rounded-lg border-0 focus:border-0 focus:outline-none focus:shadow-none" type="text" placeholder="Search" /> 
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
		  </svg>
	</div>
	<section class="lg:container grid lg:grid-cols-2 gap-4">
	{#if $movies.isSuccess}
		{#each $movies.data as movie, i}
			<div tabindex={i} class="focus:outline-none">
				<div class="flex h-full">
					<div
						tabindex="0"
						class="focus:outline-none lg:m-3 bg-white p-6 shadow rounded"
					>
						<div class="flex items-center border-b border-gray-200 pb-6">
							<img
								src={movie.show.image?.medium}
								alt="coin avatar"
								class="w-20 h-20 rounded-sm"
							/>
							<div class="flex items-start justify-between w-full">
								<div class="pl-3 w-full">
									<p
										tabindex="0"
										class="focus:outline-none text-xl font-medium leading-5 text-gray-800"
									>
										{movie.show.name}
									</p>
									<p
										tabindex="0"
										class="focus:outline-none text-sm leading-normal pt-2 text-gray-500"
									>
										Score: {movie.score.toFixed(1)}
									</p>
								</div>
								<div class="hover:cursor-pointer" role="img" aria-label="bookmark" on:click={() => selectMovieHandler($movies.data[i])}>
									<svg
										class="focus:outline-none"
										width="28"
										height="28"
										viewBox="0 0 28 28"
										fill={$moviesState.selected === movie ? '#ffc107' : '#ffff'}
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z"
											stroke="#2C3E50"
											stroke-width="1.25"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
							</div>
						</div>
						<div class="px-2">
							<p tabindex="0" class="focus:outline-none text-sm leading-5 py-4 text-gray-600">
								{@html movie.show.summary}
							</p>
							<div tabindex="0" class="focus:outline-none flex">
								{#if movie.show.genres[0]}
								<div class="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">
									{movie.show.genres[0]}
								</div>
								{/if}
								{#if movie.show.genres[1]}
								<div
									class="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100"
								>
									{movie.show.genres[1]}
								</div>
							{/if}
							</div>
						</div>
					</div>

				</div>
			</div>
		{/each}
	{:else if $movies.isError}
		<div class="w-full md:max-w-lg p-5 rounded-lg mb-5 border-2 border-opacity-50 shadow-sm">
			<div class="flex-auto py-7">
				<div class="flex flex-wrap items-baseline">
					<h1 class="w-full flex-none text-3xl text-primary mb-1.5 dark:text-white">
						{$movies.error.message}
					</h1>
				</div>
			</div>
		</div>
	{:else if $movies.isLoading}
		<section class="flex flex-col items-center space-y-3 absolute top-1/4 left-1/2 right-1/2">
			<div class="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900" />
			<span class="text-lg">Caricamento...</span>
		</section>
	{/if}
	</section>
	<!--
	 <Pagination
		pageCount={($exams.pagination && Number($exams.pagination['x-pagination-page-count'])) || 1}
		currentPage={($exams.pagination && Number($exams.pagination['x-pagination-page'])) || 1}
	/>
	-->
</div>
