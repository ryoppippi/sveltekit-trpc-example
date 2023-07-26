export const handle = async ({ event, resolve }) => {
	/** add dummy user */
	event.locals.user = {
		id: 1,
		name: 'John Doe'
	};
	return await resolve(event);
};
