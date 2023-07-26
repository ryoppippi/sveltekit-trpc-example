import { ZodError } from 'zod';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { createContext, router } from '$lib/trpc/server';

export const GET = async ({ request, locals }) => {
	return await fetchRequestHandler({
		endpoint: '/api/trpc',
		req: request,
		router: router,
		createContext: async () => await createContext({ locals }),
		onError({ type, path, error }) {
			console.error(`Encountered error while trying to process ${type} @ ${path}:`, error);
			if (error.cause instanceof ZodError) {
				error.message = error.cause?.issues?.at(0)?.message ?? '';
			}
		}
	});
};

export const POST = GET;
