import { PrismaClient } from "@prisma/client";

export async function get() {
    const prisma = new PrismaClient();

    const posts = await prisma.post.findMany({ include: { author: true } });
   
    return {
      body: posts
    };
  }