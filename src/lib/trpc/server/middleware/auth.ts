import { t } from '$lib/trpc/server';
import { TRPCError } from '@trpc/server';

export const auth = t.middleware(async ({ next, ctx }) => {
	/** get user from context (originally from locals) */
	const { user } = ctx;

	if (user == null) {
		throw new TRPCError({ code: 'UNAUTHORIZED' });
	}

	return next({
		ctx: { user }
	});
});
