import { trpc } from '$lib/trpc/client';

export const load = async ({ fetch }) => {
	const greeting = await trpc({ fetch }).example.authGreeting.query();
	return {
		greeting
	};
};
