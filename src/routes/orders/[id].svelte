<script context="module">
	export async function load({ page }) {
		const id = page.params.id;
		const url = `https://fakestoreapi.com/products/${id}`;
		const res = await fetch(url);
		const order = await res.json();
		return { props: { order } };
	}
</script>

<script>
	export let order;
</script>

<div class="mx-auto shadow-lg rounded-2xl w-full my-12 bg-white dark:bg-gray-800">
	<div class="flex flex-row items-start gap-4">
		<img src={order.image} alt={order.name} class="w-28 h-28 rounded-lg" />
		<div class="h-28 w-full flex flex-col justify-between">
			<div>
				<p class="text-gray-800 dark:text-white text-xl font-medium">ID Ordine: {order.id}</p>
				<p class="text-gray-700 text-xs">{order.title}</p>
			</div>
			<div class="rounded-lg bg-blue-100 dark:bg-white p-2 w-full">
				<div
					class="flex items-center justify-start space-x-12 text-xs text-gray-400 dark:text-black"
				>
					<p class="flex flex-col">
						Data ordine
						<span class="text-black dark:text-indigo-500 font-bold"> 12/10/2021 </span>
					</p>
					<p class="flex flex-col">
						Prezzo
						<span class="text-black dark:text-indigo-500 font-bold"> {order.price}$ </span>
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
			Annulla ordine
		</button>
		<button
			type="button"
			class="w-1/2 px-4 py-2 text-lg border border-gray-700 rounded-lg text-white bg-purple-600 hover:bg-purple-700 "
		>
			Traccia spedizione
		</button>
	</div>
</div>
