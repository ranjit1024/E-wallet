"use server"
import db from '@repo/prisma/clinet'
import { getServerSession } from 'next-auth';
import { stringify } from 'querystring';
import { authOptions } from '../auth';




export default async function(page:number=1, pageSize:number=5){
    const session = await getServerSession(authOptions);
    const id = Number(session?.user?.id)
    const data = await db.onRampTransaction.findFirst({
        where:{
            userId:id,
            
        },
        orderBy:{
            startTime:'desc'
        },
  
    })
    return data;

}