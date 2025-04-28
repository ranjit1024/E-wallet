"use server"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth"
import db from "@repo/prisma/clinet"

export default async function  getBalance(){
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;

    if(!userId){
        console.error("No user Id");
        throw new Error("Unauthrozxe");
    }

    const balanceData = await db.balance.findFirst({
        where:{
            userId:userId,
        },
    });

    console.log(userId)
    console.log(balanceData)
    return balanceData;
}