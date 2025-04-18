// pages/protected-page.js
"use client"

import { useEffect, useState } from "react";

import getBalance from "../../../lib/actions/getBalance";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from "recharts";
import { Poppins } from "next/font/google";
import { div, p } from "framer-motion/client";
import Success from "@repo/ui/success";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function DashBoard() {

  const data = [
    { name: "JAN", value: 20000 },
    { name: "FEB", value: 40000 },
    { name: "MAR", value: 45000 },
    { name: "APR", value: 70000 },
    { name: "MAY", value: 30000 },
    { name: "JUN", value: 59453 },
    { name: "JUL", value: 60000 },
    { name: "AUG", value: 50000 },
    { name: "SEP", value: 43000 },
    { name: "OCT", value: 70000 },
  ];

  const data2 = [
    { date: "Sep 3", spend: 300, revenue: 250 },
    { date: "Sep 5", spend: 280, revenue: 220 },
    { date: "Sep 7", spend: 330, revenue: 270 },
    { date: "Sep 9", spend: 360, revenue: 310 },
    { date: "Sep 11", spend: 390, revenue: 370 },
    { date: "Sep 13", spend: 430, revenue: 390 },
    { date: "Sep 15", spend: 480, revenue: 420 },
    { date: "Sep 18", spend: 535, revenue: 340 },
    { date: "Sep 21", spend: 700, revenue: 600 },
    { date: "Sep 24", spend: 800, revenue: 710 },
    { date: "Sep 27", spend: 880, revenue: 850 },
    { date: "Oct 1", spend: 900, revenue: 870 },
    { date: "Oct 3", spend: 870, revenue: 880 },
  ];
  const [Amount,setAmout] = useState<number | undefined>(0)
  useEffect(()=>{
    getBalance().then(data=>setAmout(data?.amount))
  },[])


  return (
    <div
      className={`h-[100vh]  bg-gradient-to-tr to-gray-50 from-gray-50 ${poppins.className}`}
    >
      {/* <Success/> */}
      <div className="mt-4 p-4 bg-white shadow-md rounded-xl m-3">
        <div className="flex justify-center gap-4 flex-col">
          <p className="font-medium  text-gray-500">Balance</p>
          <div className=" font-medium text-gray-900/90 text-3xl pb-3 ">{
            
              Amount !== 0 ? `${Amount ? Amount / 100 : null} ` :<div className="bg-gray-200 p-3 w-20 rounded-lg"></div>
            }
           </div>
        </div>
        

        <div className="h-64 w-[100%] ">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              barCategoryGap="30%"
              barGap={0}
              margin={{ top: 10, right: 0, left: -20, bottom: 10 }}
            >
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => `${value / 1000}k`}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: 8,
                  background: "#111",
                  color: "#fff",
                }}
                labelStyle={{ color: "#fff" }}
                cursor={{ fill: "transparent" }}
              />
              <Bar
                dataKey="value"
                fill="url(#colorUv)"
                radius={[10, 10, 0, 0]}
                className="hover:fill-blue-500"
              />
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6495ED" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#87CEFA" stopOpacity={0.2} />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-4 p-4 bg-white text-gray-950 shadow-md rounded-xl m-3 ">
        <p className="font-medium text-md text-gray-500">Spend Activity</p>
        <div className="h-64  ">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data2}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#eee"
              />
              <XAxis
                dataKey="date"
                tickLine={false}
                minTickGap={100}
                padding={{ left: 10, right: 10 }}
                tickCount={12}
              />
              <YAxis
                tickFormatter={(value) => `${value / 1000}k`}
                tickLine={false}
                axisLine={false}
                tickMargin={3}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#111",
                  borderRadius: "8px",
                  color: "#fff",
                  border: "none",
                }}
                labelClassName="text-white"
                formatter={(value: number) => [`$${value}`, ""]}
              />
              <Legend
                verticalAlign="top"
                align="right"
                iconType="triangle"
                wrapperStyle={{ paddingBottom: "20px" }}
              />
              <Line
                type="monotone"
                dataKey="spend"
                stroke="red"
                strokeWidth={2}
                dot={{ r: 3 }}
                name="Withdraw"
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#10b981"
                strokeWidth={2}
                dot={{ r: 3 }}
                name="Desposits"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
