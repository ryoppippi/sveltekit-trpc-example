import type { inferAsyncReturnType } from '@trpc/server';
import { verifySessionUser } from '$lib/auth.server.js';

export async function createContext({ locals }: { locals: App.Locals }) {
	const { user } = await verifySessionUser({ locals });
	return { user };
}

export type Context = inferAsyncReturnType<typeof createContext>;
