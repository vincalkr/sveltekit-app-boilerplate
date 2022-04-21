<script lang="ts">
	import type { User } from '@prisma/client';
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';
	import trpc from '$lib/trpcClient';
	import { goto } from '$app/navigation';

	const { form, errors, state, handleChange, handleSubmit } = createForm<Partial<User>>({
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema: yup.object().shape({
			email: yup
				.string()
				.email('Indirizzo email non valido ')
				.required('Indirizzo email obbligatorio'),
			password: yup
				.string()
				.min(8, 'La password deve contenere almeno 8 caratteri')
				.required('Password obbligatoria')
		}),
		onSubmit: async (values) => {
			delete values['undefined'];

			const { token, user } = await trpc().query('auth:login', { email: values.email!, password: values.password! });

			goto('/');
		}
	});

</script>

<div class="relative h-screen">
	<!-- <img src="/ukraine-flag.jpeg" class="absolute inset-0 object-cover w-full h-full" alt="" /> -->
	<div class="relative bg-opacity-50 bg-blue-700 h-screen ">
		<svg class="absolute inset-x-0 bottom-0 text-white" viewBox="0 0 1160 163">
			<path
				fill="#f3d43561"
				d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
			/>
		</svg>
		<div
			class="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
		>
			<div class="flex flex-col items-center justify-between xl:flex-row xl:mt-52">
				<div class="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
					<h2
						class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none"
					>
						Benvenuto <br class="hidden md:block" />
						questo è l'accesso all'area customer care
					</h2>
					<p class="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
						Le credenziali per effettuare l'accesso ti verranno consegnate via email.
					</p>
					<a
						href="/"
						aria-label=""
						class="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-white hover:text-teal-accent-700"
					>
						Ulteriori informazioni
						<svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
							<path
								d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
							/>
						</svg>
					</a>
				</div>
				<div class="w-full max-w-xl xl:px-8 xl:w-5/12">
					<div class="bg-white rounded shadow-2xl p-7 sm:p-10">
						<h3 class="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
							Area riservata
						</h3>
						<form on:submit|preventDefault={handleSubmit}>
							<div class="mb-1 sm:mb-2">
								<label for="email" class="inline-block mb-1 font-medium">E-mail</label>
								<input
									placeholder="john.doe@example.org"
									type="text"
									class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
									on:change={handleChange}
									on:blur={handleChange}
									bind:value={$form.email}
								/>
								{#if $errors.email}
									<small class="text-error">{$errors.email}</small>
								{/if}
							</div>
							<div class="mb-1 sm:mb-2">
								<label for="email" class="inline-block mb-1 font-medium">Password</label>
								<input
									placeholder="..."
									type="password"
									class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
									on:change={handleChange}
									on:blur={handleChange}
									bind:value={$form.password}
								/>
								{#if $errors.password}
									<small class="text-error">{$errors.password}</small>
								{/if}
							</div>
							<div class="mt-4 mb-2 sm:mb-4">
								<button type="submit" class="btn btn-primary"> Accedi </button>
							</div>
							<p class="text-xs text-gray-600 sm:text-sm">
								Dati personali non saranno condivisi con nessuno.
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
