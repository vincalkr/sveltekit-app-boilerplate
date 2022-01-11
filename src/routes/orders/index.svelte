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

	import Pagination from '$lib/components/Pagination.svelte';
	import orderState, { actions as orderActions } from '../../lib/features/orders/state';
	import { useGetOrder } from '../../lib/features/orders/queries';
	import type { Order } from '../../lib/features/orders/types';

	let search: string = '';

	$: orders = useGetOrder(search);

	function selectOrderHandler(order: Order) {
		orderActions.select(order);
		scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<section class="container flex flex-col items-center py-12 mx-auto">
	<div class="w-full mx-auto text-left md:w-11/12 xl:w-8/12 md:text-center">
		<h1
			class="mb-3 text-4xl font-bold text-gray-900 dark:text-gray-400 md:text-5xl md:leading-tight md:font-extrabold"
		>
			Riepilogo ordini
		</h1>
		<p class="py-3 mb-6 text-lg text-gray-500 md:text-xl md:leading-normal">
			Questi sono gli ordini che hai effettuato su prestashop
		</p>

		<table class="w-full table-fixed border-separate border border-purple-800">
			<thead>
				<tr>
					<th class="w-1/5  border border-purple-600 px-6">Ordine</th>
					<th class="w-2/5  border border-purple-600 px-6">Descrizione</th>
					<th class="w-2/5  border border-purple-600 px-6">Prezzo</th>
				</tr>
			</thead>
			<tbody>
				{#if $orders.isSuccess}
					{#each $orders.data as order, i}
						<tr>
							<td class="border border-purple-600">
								<a rel="prefetch" href="orders/{order.id}"
									><button
										class="mx-2 my-2 bg-purple-100 transition duration-150 ease-in-out hover:bg-indigo-700 hover:text-white rounded border border-indigo-700 text-indigo-700 text-lg px-6 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-700"
									>
										{order.id}</button
									></a
								></td
							>
							<td class="border border-purple-600">{order.title}</td>
							<td class="border border-purple-600">{order.price}$</td>
						</tr>
					{/each}
				{:else if $orders.isError}
					<p class="mb-6 text-lg text-red-500 md:text-xl md:leading-normal">Errore</p>
				{:else if $orders.isLoading}
					<tr class="h-8">
						<td class=" border border-purple-600">
							<div class="animate-pulse mx-2 h-4  bg-purple-400 rounded w-5/6" />
						</td>
						<td class=" border border-purple-600">
							<div class="animate-pulse mx-2 h-4  bg-purple-400 rounded w-5/6" />
						</td>
						<td class=" border border-purple-600">
							<div class="animate-pulse mx-2 h-4  bg-purple-400 rounded w-5/6" />
						</td>
					</tr>
					<tr class="h-8">
						<td class=" border border-purple-600">
							<div class=" animate-pulse mx-2 h-4  bg-purple-400 rounded w-5/6" />
						</td>
						<td class=" border border-purple-600">
							<div class="animate-pulse mx-2 h-4  bg-purple-400 rounded w-5/6" />
						</td>
						<td class=" border border-purple-600">
							<div class="animate-pulse mx-2 h-4  bg-purple-400 rounded w-5/6" />
						</td>
					</tr>
					<tr class="h-8">
						<td class=" border border-purple-600">
							<div class="animate-pulse mx-2 h-4  bg-purple-400 rounded w-5/6" />
						</td>
						<td class=" border border-purple-600">
							<div class="animate-pulse mx-2 h-4  bg-purple-400 rounded w-5/6" />
						</td>
						<td class=" border border-purple-600">
							<div class="animate-pulse mx-2 h-4  bg-purple-400 rounded w-5/6" />
						</td>
					</tr>
				{/if}
			</tbody>
		</table>

		<div
			class="flex flex-col justify-start mb-3 space-x-0 space-y-2 text-xs text-gray-600 md:flex-row md:justify-center md:space-x-8 md:space-y-0"
		/>
	</div>
	<br />

	<Pagination />
</section>
