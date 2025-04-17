"use client";
import { motion } from "framer-motion";
export default function () {
  return (
    <div className="h-[80vh] relative flex justify-center items-center">
      
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
  <div className="relative">
    <input type="email" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-16 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Email Address" />
    <button
      className="absolute right-1 top-1 rounded bg-green-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      Verify
    </button>
  <p className="mb-2  text-sm ml-1 text-green-700">rahul das </p>
  </div>
</div>

        <div className="w-full  ">
          <p className="mb-2">Enter Amount</p>

          <div className="w-full mb-3">
            <div className="relative">
              <input
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
          >
            Initiate Transfer
          </button>
        </div>
      </motion.div>
    </div>
  );
}
