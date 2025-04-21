"use client";
import { isMotionComponent, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { createOnRampTransaction } from "../../../../lib/actions/createOnRamp";
import WithdrawMoney from "../../../../lib/actions/withdraw"
import { useSession } from "next-auth/react";
import Loading from "@repo/ui/loader"
import Error from "@repo/ui/Error"

import depositeValidation from "../../../../lib/actions/depositeValidation";

export default function () {
  const selectRef = useRef<HTMLSelectElement>(null);
  const router = useRouter();
  const session = useSession();
  const id = session.data?.user.id
  const [amount,setAmount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [insuffeicentBalace, setInsuffectbalacne] = useState(false);

  return (
    <div className="h-[80vh] flex justify-center items-center">
      {
        isLoading ? <Loading/>:null
      }
      {
        isError ? <Error des="Enter Correct Input"/> : null
      }
      {
        insuffeicentBalace ? <Error des="insufficient balance"/> : null
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
        className="flex items-center justify-center p-7 w-[70%] rounded-lg  bg-white shadow-md"
      >
        <div className="w-full  ">
          <p className="mb-2">Enter Amount</p>

          <div className="w-full mb-3">
            <div className="relative">
              <input
                onChange={(e)=>{
                  setAmount(Number(e.target.value))
                }}
                type="text"
                className="w-full pl-3 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Enter Amount"
              />
            </div>
          </div>

          <div className="w-full">
            <p>Select Bank</p>
            <div className="relative ">
              <select ref={selectRef} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                <option value="hdfc">Hdfc Bank</option>
                <option value="kotak">kotak bank</option>
              </select>
            </div>
          </div>

          <button
            onClick={async ()=>{
              const id = Number(session.data?.user.id);
              console.log(selectRef.current?.value);
              setIsLoading(true);
              const provider = selectRef.current?.value;
              const validation = await depositeValidation({
                 
                  senderAmout:amount
              })
              if(validation === "insufficent balance"){
                setInsuffectbalacne(true);
                setIsLoading(false);
                setTimeout(() => {
                      setInsuffectbalacne(false)
                    }, 3000);
                return
              }
              console.log(validation)
              const response = await WithdrawMoney({
                provider:String(provider),
                amount:amount
              })
              if(response === "not valid"){
                setIsLoading(true);
                setIsError(true);
                setIsLoading(false);
                setTimeout(() => {
                  setIsError(false)
                }, 3000);
                return;
              }
              router.push("/withdraw/netbanking");
             
              setIsLoading(false)
            }
          }
            className="rounded-md mt-3 w-[100%] bg-blue-600 py-2 px-4 border border-transparent text-center text-md text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
            type="button"
          >
            Initiate Withdrawl
          </button>
        </div>
      </motion.div>
    </div>
  );
}
