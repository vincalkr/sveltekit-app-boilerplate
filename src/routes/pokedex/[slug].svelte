<script lang="ts">
	import { page } from '$app/stores';
	import { useGetPokeman } from '$lib/features/pokemon/queries';

	export let pokeman = useGetPokeman($page.params.slug);

	function getImageSource(id: number) {
		return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
	}
</script>

{#if $pokeman.isSuccess}
	<div class="mx-auto shadow-lg rounded-2xl w-full p-4 my-12 bg-white dark:bg-gray-800">
		<div class="flex flex-row items-start gap-4">
			<img
				src={getImageSource($pokeman.data.id)}
				alt={$pokeman.data.name}
				class="w-28 h-28 rounded-lg"
			/>
			<div class="h-28 w-full flex flex-col justify-between">
				<div>
					<p class="text-gray-800 dark:text-white text-xl font-medium">
						{$pokeman.data.name}
					</p>
					<p class="text-gray-700 text-xs">Pokemon tipo {$pokeman.data.types[0].type.name}</p>
				</div>
				<div class="rounded-lg bg-blue-100 dark:bg-white p-2 w-full">
					<div
						class="flex items-center justify-start space-x-12 text-xs text-gray-400 dark:text-black"
					>
						<p class="flex flex-col">
							Abilità principale
							<span class="text-black dark:text-indigo-500 font-bold">
								{$pokeman.data.moves[0].move.name}
							</span>
						</p>
						<p class="flex flex-col">
							Peso
							<span class="text-black dark:text-indigo-500 font-bold">
								{$pokeman.data.weight}kg
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="flex items-center justify-between gap-4 mt-6">
			<button
				type="button"
				class="w-1/2 px-4 py-2 text--lg border border-purple-500 rounded-lg text-grey-500 bg-white hover:bg-gray-200 "
			>
				Indietro
			</button>
			<button
				type="button"
				class="w-1/2 px-4 py-2 text-lg border border-gray-700 rounded-lg text-white bg-purple-600 hover:bg-purple-700 "
			>
				Aggiungi alla squadra
			</button>
		</div>
	</div>
{/if}
