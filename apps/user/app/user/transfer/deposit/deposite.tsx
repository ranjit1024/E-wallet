"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { createOnRampTransaction } from "../../../../lib/actions/createOnRamp";

import ErrorCopmpo from "@repo/ui/Error"
import InsideLoader from "@repo/ui/loader";

export default function Home () {
  const selectRef = useRef<HTMLSelectElement>(null);
  const router = useRouter();
  const [amount,setAmount] = useState<number>(0);

  const [loading,setLoading]= useState(false)
  const [isValid,setIsValid]= useState(false)
  return (
    <div className="h-[80vh] max-md:w-[100vw] flex justify-center items-center ">
      {
        loading ? <InsideLoader/>:null
      }
      {
        isValid ? <ErrorCopmpo des="Kindy enter Valid Amount"/> : null
      }
     
      <motion.div
        initial={{
          y: 20,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          ease: "linear",
        }}
        className="flex items-center justify-center p-7 w-[70%] max-md:w-[98%]  rounded-lg  bg-white shadow-md"
      >
        <div className="w-full  ">
          <p className="mb-2">Enter Amount</p>

          <div className="w-full mb-3">
            <div className="relative">
              <input
                type="text"
                className="w-full pl-3 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Enter Amount"
                onChange={(e)=>{
                  setAmount(Number(e.target.value))
                }}
              />
            </div>
          </div>

          <div className="w-full">
            <p>Select Bank</p>
            <div className="relative ">
              <select ref={selectRef} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                <option value="HDFc">Hdfc Bank</option>
                <option value="KOTAK">kotak bank</option>
              </select>
            </div>
          </div>

          <button
            className="rounded-md mt-3 w-[100%] bg-blue-600 py-2 px-4 border border-transparent text-center text-md text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:border-blue-800 "
            type="button"
            onClick={ async()=>{

              if(selectRef.current?.options?.selectedIndex === 0){
                console.log("data2")
            
                setLoading(true)
                const response = await createOnRampTransaction(amount,"kotak");
                console.log("response",response)
                setLoading(false);
                if(response === "not valid"){
                  setIsValid(true);
                  setTimeout(() => {
                    setIsValid(false)
                  }, 3000);
                  return
                }

                router.push('/hdfc/netbanking')
                
                
              }
              else{
                console.log("data2")
                
                setLoading(true)
                const response = await createOnRampTransaction(amount,"hdfc");
                console.log("response",response)
                setLoading(false);
                if(response === "not valid"){
                  setIsValid(true)
                  return
                }
                router.push('/kotak/netbanking')
                
              }

             
                
              

            }}
          >
             Initiate Deposite
          </button>
        </div>
      </motion.div>
    </div>
  );
}
 