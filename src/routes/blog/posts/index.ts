import { PrismaClient } from '@prisma/client';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
	const prisma = new PrismaClient();

	const posts = await prisma.post.findMany({
		include: {
			author: {
				select: {
					name: true
				}
			},
			_count: {
				select: {
					comment: true
				}
			}
		}
	});

	return {
		body: posts
	};
}
