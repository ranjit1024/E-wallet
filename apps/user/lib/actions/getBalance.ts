"use server"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth"
import db from "@repo/prisma/clinet"
export default async function  getBalance(){
    const session = await getServerSession(authOptions);
    const balanceData = await db.balance.findFirst({
        where:{
            userId:session.id
        }
    })
    return balanceData;
}