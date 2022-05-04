<script lang="ts">
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';

	const { form, errors, state, handleChange, handleSubmit } = createForm({
		initialValues: {
			email: '',
			password: '',
			passwordConfirmation: ''
		},
		validationSchema: yup.object().shape({
			email: yup.string().required('Email obbligatoria').email('Formato email non valido'),
			password: yup
				.string()
				.required('Password obbligatoria')
				.min(8, 'Deve contenere almeno 8 caratteri')
		}),
		onSubmit: (values) => {
			// $registration.mutate({
			// 	email: values.email,
			// 	password: values.password,
			// 	passwordConfirmation: values.passwordConfirmation,
			// 	details: {
			// 		email: values.detailsEmail,
			// 		firstName: values.detailsFirstName,
			// 		lastName: values.detailsLastName
			// 	}
			// });
		}
	});

	// inserire modale
	// $: if ($registration.isSuccess) {
	// 	goto('/auth/login');
	// }
</script>

<section class="bg-white rounded shadow-2xl p-7 sm:p-10">
	<form on:submit|preventDefault={handleSubmit} class="container flex flex-col mx-auto space-y-12">
		<fieldset class="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
			<div class="space-y-2 col-span-full lg:col-span-1">
				<p class="font-medium">Account</p>
				<p class="text-xs">Informazioni necessarie alla creazione dell'account</p>
			</div>
			<div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div class="col-span-full sm:col-span-3">
					<label class="text-sm">Email</label>
					<input
						type="text"
						placeholder="Email"
						on:change={handleChange}
						on:blur={handleChange}
						bind:value={$form.email}
					/>
					{#if $errors.email}
						<small class="text-error">{$errors.email}</small>
					{/if}
				</div>
				<div class="col-span-full sm:col-span-3">
					<label class="text-sm">Password</label>
					<input
						type="password"
						placeholder="password"
						on:change={handleChange}
						on:blur={handleChange}
						bind:value={$form.password}
					/>
					{#if $errors.password}
						<small class="text-error">{$errors.password}</small>
					{/if}
				</div>
				<div class="col-span-full">
					<div class="flex items-center space-x-2 justify-end">
						<button type="submit" class="btn btn-primary w-1/3">Invia</button>
					</div>
				</div>
			</div>
		</fieldset>
	</form>
</section>
