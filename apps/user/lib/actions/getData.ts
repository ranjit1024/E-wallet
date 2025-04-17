"use server"

import db from "@repo/prisma/clinet"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth";
async function getData(){
  const session = await getServerSession(authOptions);
    const userid = session?.user?.id;
  const data = await db.onRampTransaction.findMany({
    where:{
      userId:userid
    }
  })
  return data
}