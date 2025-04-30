"use server"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth"
import db from "@repo/prisma/clinet"
export default async function({
  
    senderAmout,
}:{
    senderAmout:number
}){
    const session = await getServerSession(authOptions)
    const id = Number(session?.user?.id);

 
    const userAmount = await db.balance.findFirst({
        where:{
            userId: id
        }
    })
    console.log(userAmount?.amount)
    if(userAmount){
        if((senderAmout * 100)  >= userAmount?.amount){
            return "insufficent balance"
        }
    }
    else
    {
        return "go ahead"
    }
}