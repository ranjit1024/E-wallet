"use server"
import { authOptions } from "../auth"
import  { getServerSession } from "next-auth"
import db from "@repo/prisma/clinet"
import zod, { string, ZodNaN } from "zod"
const schema = zod.number().gt(0);
export default async function({provider,amount}:{
    provider:string,
    amount:number
}){
    const token = String(Math.random());
    const session = await getServerSession(authOptions)
    const id = session.user.id;
    const {success} = schema.safeParse(amount);
    if(success){

        const addOnRampCreate = await db.onRampTransaction.create({
            data:{
                status:"Pending",
                token:token,
                provider:provider, 
                amount:amount * 100,
                startTime:new Date(),
                transfer:"withdraw" as const,
                userId:id
            }
        })
        console.log(addOnRampCreate);
    }
    else{
        return "not valid"
    }

}
