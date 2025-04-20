// "use server"
import db from "@repo/prisma/clinet"
import { getServerSession } from "next-auth"
import { authOptions } from "../../../lib/auth"
import { Ruthie } from "next/font/google";
import Record from "@repo/ui/record"
import dynamic from 'next/dynamic'
async function getData(){
  const session = await getServerSession(authOptions);
    const userid = session?.user?.id;
  const data = await db.onRampTransaction.findMany({
    where:{
      userId:userid,
    },
    orderBy:{
      startTime:"desc"
    }
  })
  return data
}

// 


export default async function transaction(){

  const data = await getData();
  console.log(data)

    return <div className="my-10 mx-5">
        <div className="relative p-1 flex flex-col  w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
  <div className="relative mx-4 mt-4 text-gray-700 bg-white rounded-none bg-clip-border">
    <div className="flex flex-col justify-between gap-8 mb-4 md:flex-row md:items-center">
      <div>
        <h5
          className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Recent Transactions
        </h5>
     
        <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
          These are details about the last transactions
        </p>
      </div>

     
      <div className="flex w-full gap-2 shrink-0 md:w-max">
        <div className="w-full md:w-72">
          <div className="relative h-10 w-full min-w-[200px]">
            <div
              className="absolute grid w-5 h-5 top-2/4 right-3 -translate-y-2/4 place-items-center text-blue-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                stroke="currentColor" aria-hidden="true" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
              </svg>
            </div>
            <input
              className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" " />
            <label
              className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Search
            </label>
          </div>
        </div>
        <button
          className="flex select-none items-center gap-3 rounded-lg bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
            aria-hidden="true" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3">
            </path>
          </svg>
          Download
        </button>
      </div>
    </div>
  </div>

  <div className="p-6 px-0 overflow-hidden">
    <table className="w-full text-left table-auto min-w-max">
      <thead>
        <tr>
          <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
              Transaction
            </p>
          </th>
          <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
              Amount
            </p>
          </th>
          <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
              Date
            </p>
          </th>
          <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
              Status
            </p>
          </th>
          <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
              Account
            </p>
          </th>
          
        </tr>
      </thead>
      <tbody>
        
        

        {
          data.map((item,index)=>{
            return <Record key={index} transaction={item.provider.toUpperCase()} amount={item.amount} date={item.startTime.toDateString()} time={item.startTime.toLocaleTimeString()} status={item.status} transfer={item.transfer}/>
            
          })
        }


       
       
      </tbody>
    </table>
  </div>
  <div className="flex items-center justify-between p-4 border-t border-blue-gray-50">
    <button
      className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button">
      Previous
    </button>
    <div className="flex items-center gap-2">
      <button
        className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg border border-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button">
        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          1
        </span>
      </button>
      <button
        className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button">
        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          2
        </span>
      </button>
      <button
        className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button">
        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          3
        </span>
      </button>
      <button
        className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button">
        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          ...
        </span>
      </button>
      <button
        className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button">
        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          8
        </span>
      </button>
      <button
        className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button">
        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          9
        </span>
      </button>
      <button
        className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button">
        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          10
        </span>
      </button>
    </div>
    <button
      className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button">
      Next
    </button>
  </div>
</div>
    </div>
}

