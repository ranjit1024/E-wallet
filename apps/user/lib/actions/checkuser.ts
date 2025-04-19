"use server"
import db from "@repo/prisma/clinet"
export default async function ({email}:{
    email:string
}){
    const findUser = await db.user.findFirst({
        where:{
            email:email
        }
    })
    console.log(findUser)
    return findUser;
}