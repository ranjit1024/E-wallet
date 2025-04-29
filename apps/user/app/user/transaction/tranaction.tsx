"use client"

import Record from "@repo/ui/record"

import {getData} from "../../../lib/actions/getTransactions"
import { useEffect, useState } from "react";
// 

type Transaction = {
  id: number;
  status: "Success" |"Pending"|"failed";
  token: string;
  provider: string;
  amount: number;
  startTime: Date;
  userId: number;
  transfer: "send"|
  "receive"|
  "deposite"|
  "withdraw";
}

export default function tranaction (){

  const [page, setPage] = useState(1)
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [totalPages, setTotalPages] = useState(1)

  // const[data,setData] = useState()
  useEffect(()=>{
    getData(page).then((res)=>{
      setTransactions(res.data);
      setTotalPages(res.totalPage)
    })
  
  },[page])


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
          
        </div>
        
      </div>
    </div>
  </div>

  <div className="p-6 px-0 overflow-hidden">

    
    <table className="w-full text-left table-auto min-w-max ">
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
              Transaction Type
            </p>
          </th>
          
        </tr>
      </thead>
      <tbody>
        
        

        {
          
          transactions.map((item:any,index:any)=>{
            return <Record key={index} transaction={item.provider.toUpperCase()} amount={item.amount} date={item.startTime.toDateString()} time={item.startTime.toLocaleTimeString()} status={item.status} transfer={item.transfer}/>
            
          })
        }


       
       
      </tbody>
    </table>

  </div>
  <div className="flex items-center justify-between p-4 border-t border-blue-gray-50">
    <button
      className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      disabled={page === 1}
      onClick={()=>{
        setPage((p) => p - 1)
      }}
      >
      Previous
    </button>
    
    <button
      className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      disabled={page === totalPages}
      onClick={()=>{
        setPage((p) => p + 1)
      }}
      >
      Next
    </button>
  </div>
</div>
    </div>
}

