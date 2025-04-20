"use server"
import db from "@repo/prisma/clinet"
import zod from "zod";
const emailSchema = zod.string().email();
export default async function ({email}:{
    email:string
}){
    const {success} = emailSchema.safeParse(email);

    const findUser = await db.user.findFirst({
        where:{
            email:email
        }
    })
    console.log(findUser)
    return findUser;
}