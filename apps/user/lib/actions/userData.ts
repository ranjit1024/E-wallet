"use server";
import db from "@repo/prisma/clinet";
import { getServerSession } from "next-auth";

import { authOptions } from "../auth";

interface responseType {
  day: string;
  totalamount: number;
}

export async function userTimeDepositeData() {
  const session = await getServerSession(authOptions);
  const id = Number(session?.user?.id);

  const depositeResponse: [] = await db.$queryRaw`
    SELECT 
    TO_CHAR(DATE_TRUNC('day', "startTime"), 'FMDD FMMonth YYYY') AS day,
        SUM("amount") AS "totalamount"
          FROM "OnRampTransaction"
            WHERE "status" = 'Success'
                AND "transfer" = 'deposite'
                    AND "userId" = ${id}
                        AND "startTime" >= DATE_TRUNC('week', CURRENT_DATE)
                          GROUP BY day
                            ORDER BY day;
`;

  const amount: number[] = [];
  const Time: string[] = [];

  depositeResponse.forEach((item: responseType) => {
    amount.push(Number(item.totalamount) / 100);
  });

  depositeResponse.forEach((item: responseType) => {
    Time.push(String(item.day));
  });

  console.log("anikt", depositeResponse);
  return { amount, Time };
}

export async function userTimeWithdrawData() {
  const session = await getServerSession(authOptions);
  const id = Number(session?.user?.id);

  const withdrawResponse: [] = await db.$queryRaw`
     SELECT 
    TO_CHAR(DATE_TRUNC('day', "startTime"), 'FMDD FMMonth YYYY') AS day,
        SUM("amount") AS "totalamount"
          FROM "OnRampTransaction"
            WHERE "status" = 'Success'
                AND "transfer" = 'withdraw'
                    AND "userId" = ${id}
                        AND "startTime" >= DATE_TRUNC('week', CURRENT_DATE)
                          GROUP BY day
                            ORDER BY day;
`;

  const amount: number[] = [];
  const Time: string[] = [];

  withdrawResponse.forEach((item: responseType) => {
    amount.push(Number(item.totalamount) / 100);
  });

  withdrawResponse.forEach((item: responseType) => {
    Time.push(String(item.day));
  });

  console.log("anikt", withdrawResponse);
  return { amount, Time };
}
