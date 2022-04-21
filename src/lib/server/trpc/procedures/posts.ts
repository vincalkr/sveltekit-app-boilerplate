import { prisma } from '$lib/prismaClient';
import { falsyToNull, trim } from '$lib/server/trpc/zodTransformers';
import * as trpc from '@trpc/server';
import { TRPCError } from '@trpc/server';
import Decimal from 'decimal.js';
import { z } from 'zod';
import type { createContext } from '..';

export default trpc
  .router<ReturnType<typeof createContext>>()
  .middleware(async ({ ctx, next }) => {
    if (!ctx.user) {
      throw new TRPCError({ code: 'UNAUTHORIZED' });
    }
    return next();
  })
  .query('list', {
    input: z.object({
      title: z.string(),
    }).optional(),
    resolve: ({ input, ctx }) => {
      return prisma.post.findMany({
        where: input?.title && {
          title: {
            startsWith: input.title,
          }
        } || undefined,
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
      })
    }
  })
  .query('getById', {
    input: z.string(),
    resolve: ({ input: id }) =>
      prisma.post.findUnique({
        where: { id },
        include: {
          author: true,
          comment: {
            include: {
              author: {
                select: {
                  name: true
                }
              }
            }
          }
        }
      })
  })
//   .mutation('save', {
//     input: z.object({
//       id: z.string().nullable(),
//       title: z.string().min(3).max(50).transform(trim),
//       authorId: z.string().min(1, 'Should be selected'),
//       price: z.string().refine(
//         (val) => {
//           try {
//             new Decimal(val);
//             return true;
//           } catch {
//             return false;
//           }
//         },
//         { message: 'Valid number required' }
//       ),
//       excerpt: z.string().max(1000).transform(trim).transform(falsyToNull)
//     }),
//     resolve: ({ input: { id, ...data } }) =>
//       id
//         ? prismaClient.book.update({ data, where: { id }, select: { id: true } })
//         : prismaClient.book.create({ data, select: { id: true } })
//   })
//   .mutation('delete', {
//     input: z.string(),
//     resolve: ({ input: id }) => prismaClient.book.delete({ where: { id } }).then(() => undefined)
//   });