import { browser } from '$app/env';
import type { router, Router } from '$lib/server/trpc';
import trpcTransformer from '$lib/server/trpc/trcpTransformer';
import * as trpc from '@trpc/client';
import type { inferProcedureInput, inferProcedureOutput } from '@trpc/server';
import type { TRPCClientErrorLike } from "@trpc/client";
import { TRPCClientError } from "@trpc/client";

export function isTRPCClientError(exception: any): exception is TRPCClientErrorLike<typeof router> {
  return exception instanceof TRPCClientError;
}

const url = browser ? '/trpc' : 'http://localhost:3000/trpc';
export default (loadFetch?: typeof fetch) =>
  trpc.createTRPCClient<Router>({
    url: loadFetch ? '/trpc' : url,
    transformer: trpcTransformer,
    ...(loadFetch && { fetch: loadFetch })
  });

type Query = keyof Router['_def']['queries'];
type Mutation = keyof Router['_def']['mutations'];

export type InferQueryOutput<RouteKey extends Query> = inferProcedureOutput<
  Router['_def']['queries'][RouteKey]
>;
export type InferQueryInput<RouteKey extends Query> = inferProcedureInput<
  Router['_def']['queries'][RouteKey]
>;
export type InferMutationOutput<RouteKey extends Mutation> = inferProcedureOutput<
  Router['_def']['mutations'][RouteKey]
>;
export type InferMutationInput<RouteKey extends Mutation> = inferProcedureInput<
  Router['_def']['mutations'][RouteKey]
>;