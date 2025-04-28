"use client"
import { Mona_Sans } from "next/font/google";
import { PieChart } from "@mui/x-charts/PieChart";
import { LineChart, } from "@mui/x-charts/LineChart";
import getBalance from "../../../lib/actions/getBalance";
import { useEffect, useState } from "react";
import { getUserData, monthlyTransactionCount } from "../../../lib/actions/DashBorde";
import { setMaxIdleHTTPParsers } from "http";
import { string } from "zod";




// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const monaSans = Mona_Sans({
  subsets: ["latin"], // Supports Latin characters
  weight: ["400", "600", "700", "900"], // Choose font weights
  style: ["normal", "italic"], // Choose styles
  variable: "--font-poppins", // Optional: Use CSS variable
});





 

export default function() {
  const [Deposit, setDeposite] = useState<number>(0);
  const [Balance,setBalance] = useState<number>(0);
  const [Withdraw,setWithDraw] = useState<number>(0);
  const [Send,setSend] = useState<number>(0)
  const [Recieve,setReceive] = useState<number>(0);
  const [monthyTrancaction,setrMonthlyTanacaction] = useState<{
    month:string | null,
    total_counnt:number | null
  }>({month:null,total_counnt:null});
  const [months, setMonthes] = useState<string>("")
  const margin = { right: 24 };
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = [
    "Page A",
    "Page B",
    "Page C",
    "Page D",
    "Page E",
    "Page F",
    "Page G",
  ];
  const data = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 5000 },
    { name: "Apr", sales: 4000 },
    { name: "May", sales: 6000 },
    { name: "Jun", sales: 7000 },
  ];




  useEffect(()=>{
    getBalance().then(data=>{
      setBalance(data?.amount ? data.amount : 0)
    })
    // getUserData({type:"deposite"}).then(data => {
    //   setDeposite(data)
    // })
    // getUserData({type:"withdraw"}).then(data=>{
    //   setWithDraw(data)
    // })
    // getUserData({type:"receive"}).then(data=>{
    //   setReceive(data);
    // })
    // getUserData({type:"send"}).then(data=>{
    //   setSend(data);
    // })
    monthlyTransactionCount().then(data => {
      setrMonthlyTanacaction(data)
    });
  },[])

  useEffect(()=>{
    const monthStr = String(monthyTrancaction.month)
    const monthArray = monthStr?.split(" ")
    const monthString =  monthArray.slice(1,3).concat().toString().replace(",", " ");
    setMonthes(monthString)
  },[monthyTrancaction.month])
  

  
console.log(typeof monthyTrancaction.total_counnt)

  return (
    
    <div className={`${monaSans.className} p-10`}>
      <div className="flex w-[100%] gap-3 ">
        <div className="p-5 bg-white rounded-lg shadow-sm w-[100%] ">
          <div className="flex items-center gap-2">
            <div className="p-1 bg-yellow-300/50 rounded-xl">
              {/*  */}
              <img
                width="27"
                height="48"
                src="https://img.icons8.com/fluency-systems-filled/48/FAB005/safe-ok.png"
                alt="safe-ok"
              />
            </div>
            <p className="font-normal text-md ml-1 text-gray-400">Balance</p>
          </div>
          <p className="pt-2 text-[3vw] text-slate-800 font-semibold">
            ₹{" "}
            {
             `${Balance / 100}.${Balance % 100}`
            }
          </p>
        </div>

        <div className="p-5 bg-white rounded-lg shadow-sm w-[100%] ">
          <div className="flex items-center gap-2">
            <div className="p-1 bg-green-300/50 rounded-xl">
              <img
                width="27"
                height="48"
                src="https://img.icons8.com/pulsar-line/48/40C057/safe-in.png"
                alt="safe-in"
              />
            </div>
            <p className="font-normal text-md ml-1 text-gray-400">Deposits</p>
          </div>
          <p className=" font-semibold pt-2 text-[3vw] text-slate-800">₹ {`${Deposit /  100}.${Deposit % 100}`}</p>
        </div>

        <div className="p-5 bg-white rounded-lg shadow-sm w-[100%] ">
          <div className="flex items-center gap-2">
            <div className="p-1 bg-red-300/50 rounded-xl">
              <img
                width="27"
                height="48"
                src="https://img.icons8.com/pulsar-line/48/FA5252/safe-out.png"
                alt="safe-out"
              />
            </div>
            <p className="font-normal text-md ml-1 text-gray-400">withdraw</p>
          </div>
          <p className=" font-semibold pt-2 text-[3vw] text-slate-800">
            ₹ {`${Withdraw /  100}.${Withdraw % 100}`}
          </p>
        </div>
      </div>
   
      <div className="grid grid-cols-[60%,40%] mt-10 gap-5">
        <div className="w-[100%]  bg-white   rounded-2xl shadow-md">
          <p className="p-2 text-center text-md font-noraml text-gray-400 per montth">trancaction per month</p>
          {
            
          }
          <LineChart
            
            xAxis={[{ data: [String(months)], scaleType: 'point' }]}
            yAxis={[{
              
            }]}

            series={[
              {
                color: "blue",
                curve: "catmullRom",
                data: [Number(monthyTrancaction.total_counnt)],
              },
            ]}
            height={400}
            width={550}
            margin={{left:-18}}
            colors={['#1976d2', '#ff5722']}
            
            
          />


        </div>
        <div className="p-5 w-[100%] flex items-center rounded-md bg-white shadow-sm ">
          
          <PieChart
            colors={["#32CD32", "#FF0000	", "#FF4500", "#7B68EE"]}
            series={[
              {
                highlightScope: { fade: "global", highlight: "item" },
                faded: {
                  innerRadius: 30,
                  additionalRadius: -30,
                  color: "gray",
                },
                data: [
                  { id: 0, value: Deposit/100, label: "Deposit" },
                  { id: 1, value:Withdraw/ 100, label: "Withdraw" },
                  { id: 2, value: Send/100, label: "Send" },
                  { id: 3, value: Recieve / 100, label: "Recieve" },
                ],
              },
            ]}
            width={250}
            height={250}
          ></PieChart>
        </div>
      </div>

      <div className="p-5 bg-white relative rounded-lg mt-10 shadow-md">
        

          <div className="w-20% absolute top-1 right-2">
            
            <div className=" ">
              <select className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-4 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                <option value="month">Month</option>
                <option value="week">Week</option>
                <option value="day">Day</option>
              </select>
            </div>
          </div>

        <LineChart
          height={300}
          series={[
            { data: pData, label: "Deposit" },
            { data: uData, label: "Withdraw", color: "red" },
          ]}
          xAxis={[{ scaleType: "point", data: xLabels }]}
          yAxis={[{ width: 50 }]}
          margin={margin}
        
        />
      </div>
    </div>
  );
}
