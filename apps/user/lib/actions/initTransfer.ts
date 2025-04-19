"use server"
import db from "@repo/prisma/clinet"
import { authOptions } from "../auth"
import { getServerSession } from "next-auth"
export default async  function({amount,id}:{
    amount:number,
    id:number
}){
    const sendToken = String(Math.random())
    const reciveToken = String(Math.random())
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;
    const userName = session?.user?.name;
    const balceCheck = await db.balance.findFirst({
         where:{
            userId:userId
         }
    });
    console.log(balceCheck)
    const balnace = balceCheck?.amount ?? 0;
    const userBalce  = balnace ;
    console.log(userBalce)
    if(userBalce >= amount){
        console.log("valid")
       await db.$transaction([
        db.balance.update({
            where:{
                userId:userId
            },
            data:{
                amount:{
                    decrement:amount
                }
            }
        }),
         db.onRampTransaction.create({
            data:{
                status:'Success',
                token:sendToken,
                provider:userName,
                amount:amount,
                userId:userId,
                startTime: new Date(),
                transfer:"send"
            }
        }),

        db.balance.update({
           where:{
            userId:id
           },
           data:{
            amount:{
                increment:amount
            }
           }
        }),
        db.onRampTransaction.create({
            data:{
                status:'Success',
                token:reciveToken,
                provider:userName,
                amount:amount,
                userId:id,
                startTime: new Date(),
                transfer:'receive'
            }
        }),

       ])
       console.log("done")
    }
}