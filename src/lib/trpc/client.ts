import { dev } from '$app/environment';
import { base } from '$app/paths';
import { createTRPCProxyClient, httpLink, loggerLink, TRPCClientError } from '@trpc/client';
import type { Router } from './server';

export const trpc = ({ fetch = globalThis.fetch } = {}) => {
	return createTRPCProxyClient<Router>({
		links: [
			loggerLink({ enabled: () => dev }),
			httpLink({
				url: `${base}/api/trpc`,
				fetch
			})
		]
	});
};

export function isTRPCClientError(cause: unknown): cause is TRPCClientError<Router> {
	return cause instanceof TRPCClientError;
}
