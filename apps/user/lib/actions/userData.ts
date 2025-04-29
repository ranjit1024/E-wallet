"use server";
import db from "@repo/prisma/clinet";
import { getServerSession } from "next-auth";

import { authOptions } from "../auth";
import { string } from "zod";


export async function userTimeDepositeData() {
  const session = await getServerSession(authOptions);
  const id = Number(session?.user?.id);

  const depositeResponse : [] = await db.$queryRaw`
    SELECT 
    TO_CHAR(DATE_TRUNC('day', "startTime"), 'YYYY-MM-DD') AS day,
    SUM("amount") AS "totalamount"
  FROM "OnRampTransaction"
  WHERE "transfer" = 'deposite'
  AND "userId"=${id}
    AND "startTime" >= DATE_TRUNC('week', CURRENT_DATE)
  GROUP BY day
  ORDER BY day;
`;

  let amount:number [] = [];
  let Time:string [] = [];

  depositeResponse.forEach((item:any) => {
    amount.push(Number(item.totalamount)/100)
  })

  depositeResponse.forEach((item:any) => {
    
    Time.push(String(item.day));

  })
console.log(amount);
console.log(Time)
console.log("anikt", depositeResponse);
return {amount,Time};
}




export async function userTimeWithdrawData() {
  const session = await getServerSession(authOptions);
  const id = Number(session?.user?.id);

  const withdrawResponse : [] = await db.$queryRaw`
    SELECT 
    TO_CHAR(DATE_TRUNC('day', "startTime"), 'YYYY-MM-DD') AS day,
    SUM("amount") AS "totalamount"
  FROM "OnRampTransaction"
  WHERE "transfer" = 'withdraw'
  AND "userId"=${id}
    AND "startTime" >= DATE_TRUNC('week', CURRENT_DATE)
  GROUP BY day
  ORDER BY day;
`;

  let amount:number [] = [];
  let Time:string [] = [];

  withdrawResponse.forEach((item:any) => {
    amount.push(Number(item.totalamount)/100)
  })

  withdrawResponse.forEach((item:any) => {
    
    Time.push(String(item.day));

  })
console.log(amount);
console.log(Time)
console.log("anikt", withdrawResponse);
return {amount,Time};
}
