/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#the-app-namespace
// for information about these interfaces
declare namespace App {
	interface Locals {
		isAuth: boolean;
	}
	// interface Platform {}
	interface Session {
		isAuth: boolean;
	}
	// interface Stuff {}
}

interface ImportMetaEnv {
	VITE_JWT_SECRET: string;
}
