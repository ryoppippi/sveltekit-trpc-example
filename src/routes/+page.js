import { trpc } from '$lib/trpc/client';

export const load = async ({ fetch }) => {
	const greeting = trpc({ fetch }).example.greeting.query();
	return {
		greeting
	};
};
