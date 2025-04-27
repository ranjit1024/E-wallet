
import { Mona_Sans } from "next/font/google";
import { PieChart } from "@mui/x-charts/PieChart"
import { LineChart } from "@mui/x-charts/LineChart"


// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';



const monaSans = Mona_Sans({
  subsets: ["latin"], // Supports Latin characters
  weight: ["400", "600", "700", "900"], // Choose font weights
  style: ["normal", "italic"], // Choose styles
  variable: "--font-poppins", // Optional: Use CSS variable
});

export default function(){


const margin = { right: 24 };
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];
const data = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 4000 },
  { name: "May", sales: 6000 },
  { name: "Jun", sales: 7000 },
];

  return <div className={`${monaSans.className} p-10`}>
    <div className="flex w-[100%] gap-3 ">
      <div className="p-5 bg-white rounded-lg shadow-sm w-[100%] ">
        <div className="flex items-center gap-2">
          <div className="p-1 bg-yellow-300/50 rounded-xl">
        {/*  */}
        <img width="27" height="48" src="https://img.icons8.com/fluency-systems-filled/48/FAB005/safe-ok.png" alt="safe-ok"/>
          </div>
          <p className="font-normal text-md ml-1 text-gray-400" >Balance</p>



        </div>
        <p className="pt-2 text-[3vw] text-slate-800 font-semibold">₹ 3000.00</p>
      </div>

      <div className="p-5 bg-white rounded-lg shadow-sm w-[100%] ">
        <div className="flex items-center gap-2">
          <div className="p-1 bg-green-300/50 rounded-xl">
          <img width="27" height="48" src="https://img.icons8.com/pulsar-line/48/40C057/safe-in.png" alt="safe-in"/>
          </div>
          <p className="font-normal text-md ml-1 text-gray-400" >Deposits</p>

        </div>
        <p className=" font-semibold pt-2 text-[3vw] text-slate-800">₹ 3000.00</p>
      </div>

      <div className="p-5 bg-white rounded-lg shadow-sm w-[100%] ">
        <div className="flex items-center gap-2">
          <div className="p-1 bg-red-300/50 rounded-xl">
          <img width="27" height="48" src="https://img.icons8.com/pulsar-line/48/FA5252/safe-out.png" alt="safe-out"/>
          </div>
          <p className="font-normal text-md ml-1 text-gray-400" >withdraw</p>

        </div>
        <p className=" font-semibold pt-2 text-[3vw] text-slate-800">₹ 3000.00</p>
      </div>
     
    </div>


    <div className="grid grid-cols-[60%,40%] mt-10 gap-5">
    <div className="w-full h-80  bg-white  flex items-center justify-end rounded-2xl shadow-md">
    <LineChart
      className="w-[100%]"
      xAxis={[ {  data: [1, 2, 3, 5, 8, 10] }]}

      series={[
        
        {
          color:"blue",
          curve: "linear",
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      height={300}
      width={600}
      margin={10}
      
    />
    </div>
      <div className="p-5 rounded-md bg-white shadow-sm ">
        <p className="text-center"></p>
      <PieChart
       colors={['#32CD32', '#FF0000	', '#FF4500','#7B68EE		']}
       series={[
        {
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          data: [
            { id: 0, value: 10, label: 'Deposit' },
            { id: 1, value: 15, label: 'Withdraw' },
            { id: 2, value: 20, label: 'Send' },
            { id: 3, value: 20, label: 'Recieve' },
          ],
        },
      ]}
      width={300}
      height={250}
      ></PieChart>
      </div>





    </div>

    <div className="p-5 bg-white rounded-lg mt-10 shadow-md">
      <button>
        week
      </button>
    <LineChart
      
      height={300}
      series={[
        { data: pData, label: 'Deposit', },
        { data: uData, label: 'Withdraw', color:'red' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      yAxis={[{ width: 50 }]}
      margin={margin}
    />
    </div>
  </div>
}