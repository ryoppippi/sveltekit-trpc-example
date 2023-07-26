import { t } from '$lib/trpc/server';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { createContext } from '$lib/trpc/server/context.js';

import { example } from './example';

/** define router */
export const router = t.router({
	example
});

export type Router = typeof router;
export type RouterInputs = inferRouterInputs<Router>;
export type RouterOutputs = inferRouterOutputs<Router>;

export async function trpcSSR({ locals }: { locals: App.Locals }) {
	const context = await createContext({ locals });
	return router.createCaller(context);
}
