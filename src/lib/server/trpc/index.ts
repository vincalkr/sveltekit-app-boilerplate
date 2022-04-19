import trpcTransformer from '$lib/server/trpc/trcpTransformer';
import type { inferAsyncReturnType } from '@trpc/server';
import cookie_pkg from 'cookie';
import * as trpc from '@trpc/server';
import posts from './posts';
import jsonwebtoken from 'jsonwebtoken';
const cookie = cookie_pkg;

export const createContext = (request: Request) => {
	let isAuth = false;

	const { token } = cookie.parse(request.headers.get('cookie') || '');

	if (token) {
		jsonwebtoken.verify(token, process.env.VITE_JWT_SECRET, (err) => {
			if (err) {
				isAuth = false;
			}

			isAuth = true;
		});
	}

	return { isAuth };
};

export const router = trpc
	.router<inferAsyncReturnType<typeof createContext>>()
	.transformer(trpcTransformer)
	.merge('posts:', posts);

export type Router = typeof router;
