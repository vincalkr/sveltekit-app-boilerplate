import { createContext, router } from '$lib/server/trpc';
import type { GetSession, Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { createTRPCHandle } from 'trpc-sveltekit';

const skHandle: Handle = async ({ event, resolve }) => {

	const response = await resolve(event);
	return response;
};

const trpcHandle = createTRPCHandle({ url: '/trpc', router, createContext });

export const handle = sequence(skHandle, trpcHandle);

export const getSession: GetSession = async ({ locals }) => {
	return locals;
};
