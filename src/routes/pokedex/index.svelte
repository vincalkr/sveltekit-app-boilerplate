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

	import pokemonState, { actions as pokemonActions } from '../../lib/features/pokemon/state';
	import { useGetPokemon, useGetPokeman } from '../../lib/features/pokemon/queries';
	import type { Pokemon } from '../../lib/features/pokemon/types';

	let search: string = '';

	$: pokemon = useGetPokemon(search);

	let filteredPokemon = [];

	$: {
		if ($pokemon.isSuccess) {
			if (search) {
				console.log(search);
				filteredPokemon = $pokemon.data.results.filter((pokeman) =>
					pokeman.name.toLowerCase().includes(search.toLowerCase())
				);
				console.log(filteredPokemon);
			} else {
				filteredPokemon = [...$pokemon.data.results];
			}
		}
		/*$pokemon.data.results = filteredPokemon;
		console.log($pokemon.data.results);*/
	}

	function selectPokemonHandler(pokemon: Pokemon) {
		pokemonActions.select(pokemon);
		scrollTo({ top: 0, behavior: 'smooth' });
	}

	function getImageSource(pokemon: Pokemon) {
		let stringa = pokemon.url.substr(0, pokemon.url.length - 1);
		let i = stringa.substring(stringa.lastIndexOf('/') + 1);
		return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
	}

	/*$: console.log($pokemonState.selected);
	$: console.log($pokemon);
	$: console.log(search);*/
</script>

<svelte:head>
	<title>Pokedex</title>
</svelte:head>

<!-- {@debug msg, host} -->

<div class="theme-neon grid grid-cols-1 md:grid-cols-1 m-5 justify-items-center">
	<div class="flex flex-col m-3 dark:text-white">
		{#if $pokemonState.selected}
			<div class="flex flex-col space-x-1 border-2 p-2 mb-2 rounded-md items-center">
				<h3 class="text-lg font-semibold">Selected pokemon:</h3>
				<p class="py-4 text-xl font-bold">{$pokemonState.selected.name}</p>
				<img
					src={getImageSource($pokemonState.selected)}
					alt="coin avatar"
					class="mx-auto w-35 h-35 rounded-sm animate-bounce"
				/>
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
	</div>
	<br />

	<h1 class="py-2 text-xl font-bold">Cerca Pokemon</h1>
	<div class="flex items-center border-2 rounded-lg ">
		<input
			bind:value={search}
			class="rounded-lg border-0 focus:border-0 focus:outline-none focus:shadow-none"
			type="text"
			placeholder="Search"
		/>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6 mr-2 text-gray-300"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
			/>
		</svg>
	</div>
	<section class="lg:container grid lg:grid-cols-3 gap-4">
		{#if $pokemon.isSuccess}
			{#each filteredPokemon as pokeman, i}
				<div tabindex={i} class="focus:outline-none">
					<div class="flex h-full">
						<div
							tabindex="0"
							class="w-full focus:outline-none lg:m-3 bg-gray-100 p-6 shadow rounded"
						>
							<img
								src={getImageSource(pokeman)}
								alt="coin avatar"
								class="mx-auto w-35 h-35 rounded-sm"
							/>
							<div class="py-4 flex items-start justify-between w-full">
								<div class="pl-3 w-full">
									<p
										tabindex="0"
										class="focus:outline-none text-xl font-medium leading-5 text-gray-800"
									>
										{pokeman.name}
									</p>
								</div>
								<div
									class="hover:cursor-pointer"
									role="img"
									aria-label="bookmark"
									on:click={() => selectPokemonHandler(pokeman)}
								>
									<svg
										class="focus:outline-none"
										width="28"
										height="28"
										viewBox="0 0 28 28"
										fill={$pokemonState.selected === pokeman ? '#ffc107' : '#ffff'}
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
							<a href="pokedex/{pokeman.name}"
								><button
									type="button"
									class="w-full px-4 py-2 text--lg border border-purple-500 rounded-lg text-white bg-purple-600 hover:bg-purple-800 "
									>Details</button
								></a
							>
						</div>
					</div>
				</div>
			{/each}
		{:else if $pokemon.isError}
			<div class="w-full md:max-w-lg p-5 rounded-lg mb-5 border-2 border-opacity-50 shadow-sm">
				<div class="flex-auto py-7">
					<div class="flex flex-wrap items-baseline">
						<h1 class="w-full flex-none text-3xl text-primary mb-1.5 dark:text-white">
							{$pokemon.error.message}
						</h1>
					</div>
				</div>
			</div>
		{:else if $pokemon.isLoading}
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
