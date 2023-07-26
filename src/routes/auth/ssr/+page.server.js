import { trpcSSR } from '$lib/trpc/server';

export const load = async ({ locals }) => {
	const client = await trpcSSR({ locals });
	const { message } = await client.example.authGreeting();
	return { message: `${message} from SSR!` };
};
