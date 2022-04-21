/// <reference types="@sveltejs/kit" />

import type { UserInfo } from "$lib/server/types";

// See https://kit.svelte.dev/docs/types#the-app-namespace
// for information about these interfaces
declare namespace App {
	interface Locals {
		user: UserInfo;
	}
	// interface Platform {}
	interface Session {
		user: UserInfo;
	}
	// interface Stuff {}
}

interface ImportMetaEnv {
	VITE_JWT_SECRET: string;
	VITE_COOKIE_EXPIRE: number;
}
