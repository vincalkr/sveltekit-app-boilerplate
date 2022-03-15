<script>
</script>

<div class="min-h-[50vh] my-52">
	<div
		class="flex max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl"
	>
		<div
			class="hidden bg-cover lg:block lg:w-1/2"
			style="background-image:url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')"
		/>

		<form method="post" action="login" class="w-full px-6 py-8 md:px-8 lg:w-1/2">
			<h2 class="text-2xl font-semibold text-center text-gray-700 dark:text-white">Brand</h2>

			<p class="text-xl text-center text-gray-600 dark:text-gray-200">Welcome back!</p>

			<div class="flex items-center justify-between mt-4">
				<span class="w-1/5 border-b dark:border-gray-600 lg:w-1/4" />

				<a
					href="#"
					class="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
					>login with email</a
				>

				<span class="w-1/5 border-b dark:border-gray-400 lg:w-1/4" />
			</div>

			<div class="mt-4">
				<label
					class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
					for="LoggingEmailAddress">Email Address</label
				>
				<input
					id="LoggingEmailAddress"
					class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
					type="email"
				/>
			</div>

			<div class="mt-4">
				<div class="flex justify-between">
					<label
						class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
						for="loggingPassword">Password</label
					>
					<a href="#" class="text-xs text-gray-500 dark:text-gray-300 hover:underline"
						>Forget Password?</a
					>
				</div>

				<input
					id="loggingPassword"
					class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
					type="password"
				/>
			</div>

			<div class="mt-8">
				<button
					class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
				>
					Login
				</button>
			</div>
		</form>
	</div>
</div>
