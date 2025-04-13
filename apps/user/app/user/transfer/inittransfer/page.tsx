"use client"
import { animate, motion } from "framer-motion";

export default function(){
    
    return <div>
        


    <div className="flex items-center h-[80vh] justify-center flex-col">
      
      <motion.div className="p-7 bg-white  shadow-md rounded-2xl w-[70%]
       "  
       initial={{
         opacity:0,
         y:20
       }}
       animate={{
        opacity:1,
        y:0
       }}
       transition={{
         duration:0.6,
         ease:"linear"
       }}>
      <div className="w-full  ">
    <p  className="mb-2">Enter email</p>
  <div className="relative w-[100%]">
    <input type="email" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-16 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Email Address" />
    <button
      className="absolute right-1 top-1 rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      Verify
    </button>
  </div>
  <p className="text-green-500 mt-3">Ranjit das</p>
<button className="rounded-md mt-3 w-[100%] bg-blue-600 py-2 px-4 border border-transparent text-center text-md text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none " type="button">
Initiate Transfer
</button>
</div>




      </motion.div>
      </div>
    </div>
}