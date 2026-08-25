import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { appRouter } from '@/server/appRouter';
//     👆 **type-only** imports are stripped at build time
 
// Pass AppRouter as a type parameter. 👇 This lets `trpc` know
// what procedures are available on the server and their input/output types.
export const trpc = createTRPCClient<appRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
    }),
  ],
});

