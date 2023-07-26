export { z } from 'zod';
export { TRPCError } from '@trpc/server';

import { auth, t } from '$lib/trpc/server';
const authProcedure = t.procedure.use(auth);
export { auth, t, authProcedure };
