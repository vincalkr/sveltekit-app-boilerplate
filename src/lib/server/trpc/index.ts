import trpcTransformer from '$lib/server/trpc/trcpTransformer';
import type { AnyRouter, inferAsyncReturnType } from '@trpc/server';
import cookie_pkg from 'cookie';
import * as trpc from '@trpc/server';
import auth from './procedures/auth';
import posts from './procedures/posts';
import jsonwebtoken from 'jsonwebtoken';
import type { ResponseMetaFn } from 'trpc-sveltekit/dist/types';
import type { CreateContextOutput, UserInfo } from '../types';
const cookie = cookie_pkg;

export const createContext = (request: Request): CreateContextOutput => {
	const { token } = cookie.parse(request.headers.get('cookie') || '');
	let user: UserInfo | null = null;

	if (token) {
		jsonwebtoken.verify(token, process.env.VITE_JWT_SECRET!, (err, payload: UserInfo) => {
			if (!err) {
				user = payload;
			}
		});
	}

	return {
		user
	};
};

export const responseMeta: ResponseMetaFn<AnyRouter> = ({ type, ctx, data, paths }) => {
	switch (true) {
		case paths?.includes('auth:login'): {
			if (Object(data[0]).result?.data?.token) {
				return {
					headers: {
						'Set-Cookie': cookie.serialize('token', Object(data[0]).result.data.token, {
							httpOnly: true,
							maxAge: Number(process.env.VITE_COOKIE_EXPIRE),
							path: '/',
							sameSite: 'strict',
							secure: process.env.NODE_ENV === 'production',
						}),
					},
				};
			}
		}
		case paths?.includes('auth:logout'): {
			return {
				headers: {
					'Set-Cookie': cookie.serialize('token', '', {
						path: '/',
						maxAge: 0,
						httpOnly: true
					})
				}
			}
		}
	}

	return {};
}

export const router = trpc
	.router<inferAsyncReturnType<typeof createContext>, inferAsyncReturnType<typeof responseMeta>>()
	.transformer(trpcTransformer)
	.merge('auth:', auth)
	.merge('posts:', posts);

export type Router = typeof router;
