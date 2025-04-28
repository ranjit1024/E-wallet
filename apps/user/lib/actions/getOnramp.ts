"use server"
import db from '@repo/prisma/clinet'
import { getServerSession } from 'next-auth';
import { stringify } from 'querystring';
import { authOptions } from '../auth';

export default async function(){
    const session = await getServerSession(authOptions);
    const id = Number(session?.user?.id)
    const data = await db.onRampTransaction.findFirst({
        where:{
            userId:id,
            
        },
        orderBy:{
            startTime:'desc'
        },
        take:1
    })
    
    return data;
}