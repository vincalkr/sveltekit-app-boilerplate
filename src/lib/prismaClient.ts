import prisma_pkg from '@prisma/client';
const { PrismaClient } = prisma_pkg;

export { prisma_pkg };
export const prisma = new PrismaClient();