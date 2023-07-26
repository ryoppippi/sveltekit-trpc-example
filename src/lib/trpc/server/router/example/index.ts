import { authProcedure, t } from '../deps.js';

export const example = t.router({
	greeting: t.procedure.query(async () => {
		return {
			message: 'Hello World!'
		};
	}),
	authGreeting: authProcedure.query(async ({ ctx: { user } }) => {
		return {
			message: `Hello ${user.name}!`
		};
	})
});
