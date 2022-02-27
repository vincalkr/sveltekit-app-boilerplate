import { PrismaClient } from '@prisma/client';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
	const prisma = new PrismaClient();

	const post = await prisma.post.findUnique({
        where: {
            id: params.id
        },
		include: {
			author: true
		}
    });

	return {
		body: { post }
	};
}
