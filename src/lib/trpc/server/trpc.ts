import type { Context } from './context.js';
import { initTRPC } from '@trpc/server';

export const t = initTRPC.context<Context>().create();
