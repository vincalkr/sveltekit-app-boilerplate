<script>
	import { fade, fly } from 'svelte/transition';

	let shown = false;
	export function show() {
		shown = !shown;
	}
</script>

<div class="h-full w-full">
	<!-- Code block starts -->
	<nav role="navigation" class="bg-white shadow inline-block xl:block ">
		<div class="mx-auto container px-6 py-2 xl:py-0">
			<div class="flex items-center justify-between">
				<div class="inset-y-0 left-0 flex items-center xl:hidden">
					<div
						class="py-4 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-100 focus:outline-none transition duration-150 ease-in-out"
					>
						<div id="menu" class="visible xl:hidden">
							{#if shown}
								<ul
									transition:fly={{ x: 200, duration: 200 }}
									class="py-2 border-r bg-purple-50 absolute rounded left-0 right-0 shadow mt-8 md:mt-8"
								>
									<a href="/">
										<li
											class=" border rounded border-purple-200 hover:border hover:rounded hover:border-purple-600 hover:bg-purple-200 flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
										>
											<div class="flex items-center">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													class="icon icon-tabler icon-tabler-grid"
													width="20"
													height="20"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													fill="none"
													stroke-linecap="round"
													stroke-linejoin="round"
												>
													<path stroke="none" d="M0 0h24v24H0z" />
													<rect x="4" y="4" width="6" height="6" rx="1" />
													<rect x="14" y="4" width="6" height="6" rx="1" />
													<rect x="4" y="14" width="6" height="6" rx="1" />
													<rect x="14" y="14" width="6" height="6" rx="1" />
												</svg>
												<span class="ml-2 font-bold">Home</span>
											</div>
										</li>
									</a>
									<a href="movies">
										<li
											class="border rounded border-purple-200 hover:border hover:rounded hover:border-purple-600 hover:bg-purple-200 flex xl:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none justify-center"
											onclick="dropdownHandler(this)"
										>
											<div class="flex items-center">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													class="icon icon-tabler icon-tabler-puzzle"
													width="20"
													height="20"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													fill="none"
													stroke-linecap="round"
													stroke-linejoin="round"
												>
													<path stroke="none" d="M0 0h24v24H0z" />
													<path
														d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"
													/>
												</svg>
												<span class="ml-2 font-bold">Movies</span>
											</div>
										</li>
									</a>
									<a href="pokedex">
										<li
											class="border rounded border-purple-200 hover:border hover:rounded hover:border-purple-600 hover:bg-purple-200 flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-2 hover:text-indigo-700 items-center focus:text-indigo-700 focus:outline-none"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												class="bi bi-dribbble"
												viewBox="0 0 16 16"
											>
												<path
													fill-rule="evenodd"
													d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8zm5.284 3.688a6.802 6.802 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A6.95 6.95 0 0 1 8 1.18zm-2.907.642A43.123 43.123 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.865 6.865 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.817 6.817 0 0 1-1.752-4.564zM8 14.837a6.785 6.785 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.246 28.246 0 0 1 1.457 5.18A6.722 6.722 0 0 1 8 14.837zm3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.774 6.774 0 0 1-2.924 4.573z"
												/>
											</svg>
											<span class="ml-2 font-bold">Pokedex</span>
										</li>
									</a>
									<a href="orders">
										<li
											class="border rounded border-purple-200 hover:border hover:rounded hover:border-purple-600 hover:bg-purple-200 flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-2 hover:text-indigo-700 items-center focus:text-indigo-700 focus:outline-none"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="#000000"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												><line x1="3" y1="12" x2="21" y2="12" /><line
													x1="3"
													y1="6"
													x2="21"
													y2="6"
												/><line x1="3" y1="18" x2="21" y2="18" /></svg
											>
											<span class="ml-2 font-bold">Orders</span>
										</li>
									</a>
									<a href="file">
										<li
											class="border rounded border-purple-200 hover:border hover:rounded hover:border-purple-600 hover:bg-purple-200 flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-2 hover:text-indigo-700 items-center focus:text-indigo-700 focus:outline-none"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="#000000"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												><path
													d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
												/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" /></svg
											>
											<span class="ml-2 font-bold">File</span>
										</li>
									</a>
									<a href="blog">
										<li
											class="border rounded border-purple-200 hover:border hover:rounded hover:border-purple-600 hover:bg-purple-200 flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-2 hover:text-indigo-700 items-center focus:text-indigo-700 focus:outline-none"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="icon icon-tabler icon-tabler-compass"
												width="20"
												height="20"
												viewBox="0 0 24 24"
												stroke-width="1.5"
												stroke="currentColor"
												fill="none"
												stroke-linecap="round"
												stroke-linejoin="round"
											>
												<path stroke="none" d="M0 0h24v24H0z" />
												<polyline points="8 16 10 10 16 8 14 14 8 16" />
												<circle cx="12" cy="12" r="9" />
											</svg>
											<span class="ml-2 font-bold">Blog</span>
										</li>
									</a>
								</ul>
							{/if}
						</div>
					</div>
				</div>
				<button
					id="menu-button"
					class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-md flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start"
				>
					<div class="flex items-center">
						<svg
							id="logo"
							enable-background="new 0 0 300 300"
							height="44"
							viewBox="0 0 300 300"
							width="43"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<g>
								<path
									fill="#4c51bf"
									d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
								/>
							</g>
						</svg>
						<button on:click={show}>
							<h2 class="hidden sm:block text-base text-gray-700 font-bold leading-normal px-3">
								SvelteKit
							</h2>
						</button>
					</div>
				</button>
				<div class="flex">
					<div class="hidden xl:flex md:mr-6 xl:mr-16">
						<a
							href="/"
							class="focus:text-indigo-700 border-b-2 border-transparent focus:border-indigo-700 flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
						>
							<span class="mr-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="icon icon-tabler icon-tabler-grid"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" />
									<rect x="4" y="4" width="6" height="6" rx="1" />
									<rect x="14" y="4" width="6" height="6" rx="1" />
									<rect x="4" y="14" width="6" height="6" rx="1" />
									<rect x="14" y="14" width="6" height="6" rx="1" />
								</svg>
							</span>
							Home
						</a>
						<a
							href="/movies"
							class="focus:text-indigo-700 border-b-2 border-transparent focus:border-indigo-700 flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
						>
							<span class="mr-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="icon icon-tabler icon-tabler-puzzle"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" />
									<path
										d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"
									/>
								</svg>
							</span>
							Movies
						</a>
						<a
							href="/pokedex"
							class="focus:text-indigo-700 border-b-2 border-transparent focus:border-indigo-700 flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
						>
							<span class="mr-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									class="bi bi-dribbble"
									viewBox="0 0 16 16"
								>
									<path
										fill-rule="evenodd"
										d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8zm5.284 3.688a6.802 6.802 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A6.95 6.95 0 0 1 8 1.18zm-2.907.642A43.123 43.123 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.865 6.865 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.817 6.817 0 0 1-1.752-4.564zM8 14.837a6.785 6.785 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.246 28.246 0 0 1 1.457 5.18A6.722 6.722 0 0 1 8 14.837zm3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.774 6.774 0 0 1-2.924 4.573z"
									/>
								</svg>
							</span>
							Pokedex
						</a>
						<a
							href="/file"
							class="focus:text-indigo-700 border-b-2 border-transparent focus:border-indigo-700 flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
						>
							<span class="mr-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#000000"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" /><path
										d="M14 3v5h5M16 13H8M16 17H8M10 9H8"
									/></svg
								>
							</span>
							File
						</a>
						<a
							href="/orders"
							class="focus:text-indigo-700 border-b-2 border-transparent focus:border-indigo-700 flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
						>
							<span class="mr-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#000000"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line
										x1="3"
										y1="18"
										x2="21"
										y2="18"
									/></svg
								>
							</span>
							Orders
						</a>
						<a
							href="/blog"
							class="focus:text-indigo-700 border-b-2 border-transparent focus:border-indigo-700 flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
						>
							<span class="mr-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="icon icon-tabler icon-tabler-compass"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" />
									<polyline points="8 16 10 10 16 8 14 14 8 16" />
									<circle cx="12" cy="12" r="9" />
								</svg>
							</span>
							Blog
						</a>
						<a
							href="javascript: void(0)"
							class="focus:text-indigo-700 border-b-2 border-transparent focus:border-indigo-700 flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
						>
							<span class="mr-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="icon icon-tabler icon-tabler-code"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" />
									<polyline points="7 8 3 12 7 16" />
									<polyline points="17 8 21 12 17 16" />
									<line x1="14" y1="4" x2="10" y2="20" />
								</svg>
							</span>
							Contacts
						</a>
					</div>
					<div class="hidden xl:flex items-center" />
				</div>
			</div>
		</div>
	</nav>
	<nav>
		<div
			class="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-white fixed top-0 z-40"
		>
			<div aria-label="logo" role="img" tabindex="0" class="focus:outline-none w-24">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="43"
					height="44"
					viewBox="0 0 43 44"
					fill="none"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M37.8735 0C36.1688 0 34.7818 1.37956 34.7818 3.0751C34.7818 4.77063 36.1688 6.15019 37.8735 6.15019C39.5782 6.15019 40.9653 4.77063 40.9653 3.0751C40.9653 1.37956 39.5782 0 37.8735 0ZM37.8735 4.61264C37.021 4.61264 36.3277 3.92305 36.3277 3.0751C36.3277 2.22714 37.021 1.53755 37.8735 1.53755C38.7261 1.53755 39.4194 2.22714 39.4194 3.0751C39.4194 3.92305 38.7261 4.61264 37.8735 4.61264ZM26.6663 1.0513C26.1828 1.0513 25.7909 1.44107 25.7909 1.92193C25.7909 2.4028 26.1828 2.79238 26.6663 2.79238C27.1497 2.79238 27.5416 2.40261 27.5416 1.92193C27.5416 1.44107 27.1497 1.0513 26.6663 1.0513ZM43 13.4535C43 13.9342 42.6081 14.324 42.1247 14.324C41.6412 14.324 41.2493 13.9342 41.2493 13.4535C41.2493 12.9727 41.6412 12.5829 42.1247 12.5829C42.6081 12.5829 43 12.9729 43 13.4535ZM18.1654 2.59019L35.1698 12.4044C35.4079 12.5418 35.5548 12.7951 35.5548 13.0692V33.0573C35.5548 33.3273 35.4123 33.5772 35.1803 33.7161L18.1758 43.8901C18.0533 43.9633 17.915 44 17.7774 44C17.6398 44 17.5016 43.9633 17.3789 43.8901L0.374484 33.7161C0.142219 33.5772 0 33.3271 0 33.0573V13.0692C0 12.7951 0.146857 12.5418 0.384919 12.4044L17.3894 2.59019C17.6296 2.45124 17.9254 2.45124 18.1654 2.59019ZM17.7774 4.14388L33.2524 13.0751L23.0207 19.0887L18.5503 16.4735V12.3004C18.5503 11.8758 18.2042 11.5316 17.7774 11.5316C17.3505 11.5316 17.0044 11.8758 17.0044 12.3004V16.4735L11.9752 19.4158C11.7389 19.554 11.5939 19.8057 11.5939 20.0783V25.8047L1.54586 31.7102V13.5118L17.7774 4.14388ZM2.28227 33.0632L17.7774 42.3341L34.0091 32.6225V14.4162L23.961 20.322V26.4081C23.961 26.6807 23.8161 26.9325 23.5798 27.0706L18.5505 30.0125V33.826C18.5505 34.2506 18.2044 34.5948 17.7776 34.5948C17.3507 34.5948 17.0046 34.2506 17.0046 33.826V30.0125L12.2274 27.2182L2.28227 33.0632Z"
						fill="#667EEA"
					/>
				</svg>
			</div>
			<button on:click={show}>
				<span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#000000"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line
							x1="3"
							y1="18"
							x2="21"
							y2="18"
						/></svg
					>
				</span>
			</button>
		</div>
	</nav>

	<!-- Code block ends -->
</div>
