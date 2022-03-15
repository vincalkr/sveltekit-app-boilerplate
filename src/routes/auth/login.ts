import { PrismaClient } from '@prisma/client';
import type { RequestHandler } from '@sveltejs/kit';

export const post: RequestHandler = async ({ params, request }) => {
    const fd = await request.formData();

    console.log({ fd: Object.entries(fd) })

	return {
        status: 200
    }
};
