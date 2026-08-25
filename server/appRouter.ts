import { publicProcedure, router } from "./trpc";
import { z } from "zod/mini";
type User = {
    id:string;
    name:string
}

export const appRouter = router({
    userList: publicProcedure
        .query(async()=>{
            const user : User[] = [{id:'1',name:"narun"}]
            return user
        }),
    userById: publicProcedure
        .input(z.string())
    .query(async (opts)=>{
        const { input } = opts;
        const user: User = { id: input , name:"test"};
        return user;
    }),
    userCreate:publicProcedure
        .input(z.object({
            name:z.string()
        }))
        .mutation(async (opts)=>{
            const { input } = opts;
             const user:User = { id: '1',...input};
             return user;
        })
})


export type appRouter = typeof appRouter;