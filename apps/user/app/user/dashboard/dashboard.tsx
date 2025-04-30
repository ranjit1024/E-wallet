"use client"
import { Mona_Sans } from "next/font/google";
import { PieChart } from "@mui/x-charts/PieChart";
import { LineChart, } from "@mui/x-charts/LineChart";
import getBalance from "../../../lib/actions/getBalance";
import { useEffect, useState } from "react";
import { monthlyTransactionCount } from "../../../lib/actions/DashBorde";
import { getUserData } from "../../../lib/actions/DashBorde";
import { userTimeDepositeData, userTimeWithdrawData } from "../../../lib/actions/userData";
import Image from "next/image";
import DashboardSkeleton from '@repo/ui/sceleton'


// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const monaSans = Mona_Sans({
  subsets: ["latin"], // Supports Latin characters
  weight: ["400", "600", "700", "900"], // Choose font weights
  style: ["normal", "italic"], // Choose styles
  variable: "--font-poppins", // Optional: Use CSS variable
});





 

export default function Home() {
  const [Deposit, setDeposite] = useState<number>(0);
  const [Balance,setBalance] = useState<number>(0);
  const [Withdraw,setWithDraw] = useState<number>(0);
  const [Send,setSend] = useState<number>(0)
  const [Recieve,setReceive] = useState<number>(0);

  const [userDeposite, setUserDeposite] = useState<number[]>([])
  const [userWithdraw, setUserWithdraw] = useState<number[]>([]);

  const [userDepositeTimeLine, setUserDepositeTimeLine] = useState<string[]>([]);
  const [userWithdrawTimeLine, setUserWithdrawTimeLine] = useState<string[]>([]);

  const [loading, setLoading] = useState(true)



  const [monthyTrancaction,setrMonthlyTanacaction] = useState<{
    month:string | null,
    total_counnt:number | null
  }>({month:null,total_counnt:null});

  const [months, setMonthes] = useState<string>("");

  const margin = { right: 24 };






  useEffect(()=>{
    async function fetchData() {
      try{
        setLoading(true)
        const [
          balanceData,
          depositData,
          withdrawData,
          receiveData,
          sendData,
          monthlyTxnData,
          withdrawTimelineData,
          depositTimelineData
        ] =  await Promise.all([
          getBalance(),
          getUserData({ type: "deposite" }),
          getUserData({ type: "withdraw" }),
          getUserData({ type: "receive" }),
          getUserData({ type: "send" }),
          monthlyTransactionCount(),
          userTimeWithdrawData(),
          userTimeDepositeData(),
        ])

        setBalance(balanceData?.amount || 0);
      setDeposite(depositData);
      setWithDraw(withdrawData);
      setReceive(receiveData);
      setSend(sendData);
      setrMonthlyTanacaction(monthlyTxnData);
      setUserWithdraw(withdrawTimelineData.amount);
      setUserWithdrawTimeLine(withdrawTimelineData.Time);
      setUserDeposite(depositTimelineData.amount);
      setUserDepositeTimeLine(depositTimelineData.Time);
      setLoading(false)
      }
      catch (error) {
        console.error("Error fetching dashboard data:", error);
        // Optionally set error states here
      }

    }
   
   
    fetchData();
    
  },[])
  
 



  useEffect(()=>{
    const monthStr = String(monthyTrancaction.month)
    const monthArray = monthStr?.split(" ")
    const monthString =  monthArray.slice(1,3).concat().toString().replace(",", " ");
    setMonthes(monthString)
  },[monthyTrancaction.month])
  

  if(loading){
    return <DashboardSkeleton/>
  }
 return (
    <div className={`${monaSans.className} p-10`}>
      {
        loading?<DashboardSkeleton/>:null
      }
      <div className="flex w-[100%] gap-3 ">
        <div className="p-5 bg-white rounded-lg shadow-sm w-[100%] ">
          <div className="flex items-center gap-2">
            <div className="p-1 bg-yellow-300/50 rounded-xl">
              {/*  */}
              <Image
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
              <Image
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
              <Image
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
        


        <LineChart
          height={300}
          series={[
            { data: userDeposite, label: "Deposit",curve:"monotoneX" },
            { data: userWithdraw, label: "Withdraw", color: "red", curve:"monotoneX" },
            
          ]}
          xAxis={[{ scaleType: "point", data: userDepositeTimeLine.length > userWithdrawTimeLine.length ? userDepositeTimeLine : userWithdrawTimeLine}]}
          yAxis={[{ width: 50 }]}
          margin={margin}
        
        />
      </div>
    </div>
  );
}
