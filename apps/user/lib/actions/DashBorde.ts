"use server"
import db from "@repo/prisma/clinet"
export async function getDeposite({id}:{
    id:number
}){
    const allDeposites = db.onRampTransaction.findMany({
        where:{
            userId:id
        }
    })

    console.log(allDeposites)
}