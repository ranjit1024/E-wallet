"use client"

import Record from "@repo/ui/record"

import {getData} from "../../../lib/actions/getTransactions"
import {  useEffect, useState } from "react";
import TransactionSkeleton from "@repo/ui/tranactionScaletor";
import { poppins } from "../../signup/page";

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
interface TransactionResponse {
  data: Transaction[];
  totalPage: number;
}
export default function Tranaction (){
  const[loading,setLoading] = useState(true)
  const [page, setPage] = useState<number>(1)
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [totalPages, setTotalPages] = useState(1);
  const isExpense =  "expense";

 
  // const[data,setData] = useState()
  useEffect(()=>{

    async function fetchData() {
      setLoading(true)
      const response : TransactionResponse  = await getData(page);
      setTransactions(response.data);
      setTotalPages(response.totalPage)
      setLoading(false)
    }
      fetchData()
   
  },[page])

  if(loading){
    return <TransactionSkeleton/>
  }
    return <div className="my-10 mx-5 max-md:w-[100vw] max-md:mx-0  ">
        <div className="relative p-1 flex flex-col   w-full h-full  text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
  <div className="relative mx-4 mt-4 text-gray-700 bg-white  rounded-none bg-clip-border">
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

     
     
    </div>
  </div>

  
    
    
    <div className="p-6 px-0 ">

    
    <table className="w-[100%] hidden   text-left table-auto min-w-max ">
     
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
        
          transactions.map((item:Transaction,index:number)=>{
            return <Record key={index} transaction={item.provider.toUpperCase()} amount={item.amount} date={item.startTime.toDateString()} time={item.startTime.toLocaleTimeString()} status={item.status} transfer={item.transfer}/>
            
          })
        }


       
       
      </tbody>
    </table>
    <div className={poppins.className}>
      {
        transactions.map((transactions:Transaction, item:number)=>{
          return <div key={item} className="p-3 bg-white shadow-sm mb-1 m-2 rounded-md">
            <div className="flex justify-between">
            <p className="text-gray-700 font-medium">{transactions.provider}</p>
            <p>{`${transactions.amount / 100}.${transactions.amount % 100}`}</p>
            </div>
            <div className="flex justify-between">

            <p className="text-sm pt-1 text-neutral-800">{transactions.startTime.toLocaleDateString()}</p>
            <p className={`text-sm pt-1 ${transactions.status === "Success" ? 'text-green-500':'text-yellow-600'}`}>{transactions.status}</p>
            </div>
            <p className={`text-sm pt-1 text-end
            ${transactions.transfer === 'send' ? 'text-red-700':'text-gray-900'} 
            ${transactions.transfer === 'withdraw' ? 'text-red-700':'text-gray-900'} 
            ${transactions.transfer === 'receive' ? 'text-green-700':'text-gray-900'} 
            ${transactions.transfer === 'deposite' ? 'text-green-700':'text-gray-900'} 
             `
          
          }>{transactions.transfer}</p>

            
          </div>
        })
      }
    </div>

      
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

