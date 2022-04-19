import { prisma } from '$lib/prismaClient';
import { falsyToNull, trim } from '$lib/server/trpc/zodTransformers';
import * as trpc from '@trpc/server';
import argon2 from 'argon2';
import jsonwebtoken from 'jsonwebtoken';
import { TRPCError } from '@trpc/server';
import Decimal from 'decimal.js';
import { z } from 'zod';
import type { createContext } from '.';

export default trpc
  .router<ReturnType<typeof createContext>>()
  .query('login', {
    input: z.object({
      email: z.string().email(),
      password: z.string(),
    }),
    resolve: async ({ input, ctx }) => {
      const user = await prisma.user.findUnique({
        where: {
          email: input.email,
        },
      });

      if (await argon2.verify(user.password, input.password)) {
        const token = jsonwebtoken.sign({
          id: user.id,
          email: user.email
        }, process.env.VITE_JWT_SECRET, {
          expiresIn: '7d'
        });

        return {
          token,
        };
      }
    },
  })