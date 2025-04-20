"use server"
import db from "@repo/prisma/clinet"
import { authOptions } from "../auth"
import { getServerSession } from "next-auth"
import zod from "zod"

const schma = zod.object({
    amount:zod.number().gt(0),

})
export default async  function({amount,id}:{
    amount:number,
    id:number,
  
}){
    const {success} = schma.safeParse({
        amount:amount
    })
    if(!success){
        return "not valid"
    }

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
    if(userId === id ){
        console.log("same user ")
        return "same user"
    }
    if(userBalce >= amount){
        console.log("valid")
    await db.$queryRaw `SELECT * FROM  "Balance" WHERE "userId" = ${Number(userId)} FOR UPDATE `;
       await db.$transaction(
        
           [
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
    else{
        console.log("insufficent banalce");
        return "insufficient balance"
    }
}