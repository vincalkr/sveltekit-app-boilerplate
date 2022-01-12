<script>
	import Rectangle from '$lib/components/Rectangle.svelte';
</script>

<section class="container flex flex-col items-center py-32 mx-auto w-full">
	<div class="w-full mx-auto text-left md:w-11/12 xl:w-8/12 md:text-center">
		<h1
			class="mb-3 text-4xl font-bold text-gray-900 dark:text-gray-400 md:text-5xl md:leading-tight md:font-extrabold"
		>
			Galleria
		</h1>
		<p class="mb-6 text-lg text-gray-500 md:text-xl md:leading-normal">Esplora i dipinti</p>
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
				Ciao
			</div>
			<div class="flex items-center">
				<svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mr-1 text-green-600">
					<path
						fill-rule="evenodd"
						d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
				Nexev
			</div>
			<div class="flex items-center">
				<svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mr-1 text-green-600">
					<path
						fill-rule="evenodd"
						d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
				Svelte
			</div>
		</div>
	</div>
	<br />

	<section>
		<div
			class="
    relative
    items-center
    w-full
    px-5
    py-12
    mx-auto
    md:px-12
    max-w-7xl
  "
		>
			<div class="grid w-full grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3">
				<div class="p-6">
					<img
						class="hover:-translate-y-1 hover:scale-110 duration-300
          object-cover object-center
          w-full
          mb-8
          lg:h-48
          md:h-36
          rounded-xl
        "
						src="https://www.storicang.it/medio/2021/07/22/van-gogh-dipinse-la-straordinaria-notte-stellata-nel-1889_57fea25a_800x620.jpg"
						alt="blog"
					/>
					<h1
						class="
          mx-auto
          mb-8
          text-2xl
          font-semibold
          leading-none
          tracking-tighter
          text-neutral-600
          lg:text-3xl
        "
					>
						Titolo
					</h1>
					<p class="mx-auto text-base leading-relaxed text-gray-500">Anno</p>
					<div class="mt-4">
						<a
							href="#"
							class="
            inline-flex
            items-center
            mt-4
            font-semibold
            text-blue-600
            lg:mb-0
            hover:text-neutral-600
          "
							title="read more"
						>
							Read More »
						</a>
					</div>
				</div>
				<div class="p-6">
					<img
						class="hover:-translate-y-1 hover:scale-110 duration-300 
          object-cover object-center
          w-full
          mb-8
          lg:h-48
          md:h-36
          rounded-xl
        "
						src="https://arte.sky.it/archivio/wp-content/uploads/2015/08/Van-Gogh-HR-620x388.jpg"
						alt="blog"
					/>
					<h1
						class="
          mx-auto
          mb-8
          text-2xl
          font-semibold
          leading-none
          tracking-tighter
          text-neutral-600
          lg:text-3xl
        "
					>
						Titolo
					</h1>
					<p class="mx-auto text-base leading-relaxed text-gray-500">Anno</p>
					<div class="mt-4">
						<a
							href="#"
							class="
            inline-flex
            items-center
            mt-4
            font-semibold
            text-blue-600
            lg:mb-0
            hover:text-neutral-600
          "
							title="read more"
						>
							Read More »
						</a>
					</div>
				</div>
				<div class="p-6">
					<img
						class="hover:-translate-y-1 hover:scale-110 duration-300
          object-cover object-center
          w-full
          mb-8
          lg:h-48
          md:h-36
          rounded-xl
        "
						src="https://i2.wp.com/orizzontecultura.com/wp-content/uploads/2020/10/VAN_GOGH_1470..jpg?resize=930%2C620&ssl=1"
						alt="blog"
					/>
					<h1
						class="
          mx-auto
          mb-8
          text-2xl
          font-semibold
          leading-none
          tracking-tighter
          text-neutral-600
          lg:text-3xl
        "
					>
						Titolo
					</h1>
					<p class="mx-auto text-base leading-relaxed text-gray-500">Anno</p>
					<div class="mt-4">
						<a
							href="#"
							class="
            inline-flex
            items-center
            mt-4
            font-semibold
            text-blue-600
            lg:mb-0
            hover:text-neutral-600
          "
							title="read more"
						>
							Read More »
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</section>
