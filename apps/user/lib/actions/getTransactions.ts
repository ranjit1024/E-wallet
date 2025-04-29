"use server"
import db from "@repo/prisma/clinet"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { skip } from "node:test";


export async function getData(page:number=1,pageSize:number=5){
    const session = await getServerSession(authOptions);
    const skip = (page - 1 )* pageSize;
    
    const userid = session?.user?.id;
      const data = await db.onRampTransaction.findMany({
      skip:skip,
      take:pageSize,
      where:{
        userId:userid,
      },
      orderBy:{
        startTime:"desc"
      }

    })
    
    const total =  await db.onRampTransaction.count();

    return {
      data,
      page,
      totalPage:Math.ceil(total/pageSize)
    }
    
    
  
   
  }
  