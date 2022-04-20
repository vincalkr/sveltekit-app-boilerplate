import trpcTransformer from '$lib/server/trpc/trcpTransformer';
import type { AnyRouter, inferAsyncReturnType } from '@trpc/server';
import cookie_pkg from 'cookie';
import * as trpc from '@trpc/server';
import auth from './procedures/auth';
import posts from './procedures/posts';
import jsonwebtoken from 'jsonwebtoken';
import type { ResponseMetaFn } from 'trpc-sveltekit/dist/types';
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

export const responseMeta: ResponseMetaFn<AnyRouter> = ({ type, ctx, data, paths }) => {
	if(paths.includes('auth:login') && Object(data).token) {
		return {
			headers: {
				'Set-Cookie': cookie.serialize('token', Object(data).token, {
					httpOnly: true,
					maxAge: 60 * 60 * 24 * 7,
					path: '/',
					sameSite: 'strict',
					secure: process.env.NODE_ENV === 'production',
				}),
			},
		};
	} 

	return {};
}

export const router = trpc
	.router<inferAsyncReturnType<typeof createContext>, inferAsyncReturnType<typeof responseMeta>>()
	.transformer(trpcTransformer)
	.merge('auth:', auth)
	.merge('posts:', posts);

export type Router = typeof router;
