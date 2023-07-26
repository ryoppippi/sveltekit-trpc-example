/**
 * @description Verify the session user from locals
 */
export const verifySessionUser = async ({ locals }: { locals: App.Locals }) => {
	const { user } = locals;
	if (user == null) throw new Error('Unauthorized');
	return { user };
};
