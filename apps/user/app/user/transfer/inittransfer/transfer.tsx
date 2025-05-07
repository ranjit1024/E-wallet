"use client";
import { motion } from "framer-motion";
import findUser from "../../../../lib/actions/checkuser"
import transfer from  "../../../../lib/actions/initTransfer"
import {  useState } from "react";
import ErroCopm from "@repo/ui/Error"
import { useSession } from "next-auth/react";
import Loading from '@repo/ui/loader';
import { useRouter } from "next/navigation";

export default function Home() {
  const [userEmail, setUserEmail] = useState<string>("");
  const [verify, setVerify] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [userId, setUserid] = useState<number>(0);

  const [amount,setAmout] = useState<number>(0)
  const [error , setError] =  useState(false);
  const [insufficientBalance , setinsufficientBalace] =  useState(false);
  const [loading, setLoading] = useState(false)
  const session = useSession()
  const router = useRouter()
  return (
    <div className="h-[80vh] relative flex justify-center items-center">
      {
        error ? <ErroCopm des="Enter Valid email or amount"/> : null
      }
      {
        insufficientBalance ? <ErroCopm des="insufficient balance"/> : null
      }
      {
        loading ? <Loading/> : null
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
          <p className="mb-2">Enter Email</p>

          <div className="w-full ">
          <div className="w-full ">
  <div className="relative">
    <input
    id="email"
    onChange={(e)=>{
      setUserEmail(e.target.value);
    }}
    type="email" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-16 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Email Address" />

    {
      verify ? <button disabled type="button"   className="absolute right-1 top-1 rounded bg-green-800 py-1 px-2.5 border border-transparent text-centemailer text-sm text-white transition-all shadow-sm hover:shadow focus:bg-green-700 focus:shadow-none active:bg-gray-900 hover:bg-gray-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" >
      <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
      </svg>
      Loading...
      </button>: <button
      onClick={async()=>{
        setVerify(true);
        setClicked(true)
        const getUser = await findUser({email:userEmail});
        if(getUser){
          if(getUser != "not valid"){

            setVerify(false);
            setUserName(getUser.name);
            setUserid(getUser.id);
          }
        }
        else{
          setVerify(false)
        }

   
         
       
    
      
      }}
      className="absolute right-1 top-1 rounded bg-green-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-green-700 focus:shadow-none active:bg-green-900 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      
    
    >
     
      Verify
    </button>
    }
   
  </div>
    {
      
      clicked ?   
      userName? <p className="text-green-600 mt-1 mb-4 font-medium">Name: {userName} </p>
      
      : <p className="text-red-800 mt-1 mb-4 font-medium">Not Found</p> :null
      
    }
</div>
</div>

        <div className="w-full mt-2 ">
          <p className="mb-2">Enter Amount</p>

          <div className="w-full mb-3">
            <div className="relative">
              <input
                onChange={(e)=>{
                  setAmout(Number(e.target.value)*100);
                }}
                type="text"
                className="w-full pl-3 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Enter Amount"
                />
            </div>
          </div>
          </div>

         

          <button
            className="rounded-md mt-3 w-[100%] bg-blue-600 py-2 px-4 border border-transparent text-center text-md text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
            type="button"
            onClick={async ()=>{
              setLoading(true);

              const respons = await transfer({amount:amount, id:userId})
              const getUser = await findUser({email:userEmail});
              console.log(respons)
              console.log(session?.data?.user)
              if(respons === "not valid" || getUser === null){
                setLoading(false)
                setError(true);
                setTimeout(()=>{
                  setError(false)
                },3000);
                return
              }

              if(respons === "same user"){
                setLoading(false)
                setError(true);
                setTimeout(()=>{
                  setError(false)
                },3000);
                return
              }
              if(respons === "insufficient balance"){
                setLoading(false)
                setinsufficientBalace(true);
                setTimeout(()=>{
                  setError(false);
                  setinsufficientBalace(true);
                },3000);
                return
              }
           
              setLoading(false);
              localStorage.removeItem("data")
              router.push("/user/dashboard")


              console.log(userId)
              console.log(amount)
            }}
          >
            Initiate Transfer
          </button>
        </div>
      </motion.div>
    </div>
  );
}
