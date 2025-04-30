"use client";

import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";
import Error from "@repo/ui/toast"
import Loader from "@repo/ui/loader";
import Image from "next/image";


const poppins = Poppins({
  subsets: ["latin"], // Supports Latin characters
  weight: ["100", "400"], // Choose font weights
  style: ["normal", "italic"], // Choose styles
  variable: "--font-poppins", // Optional: Use CSS variable
});

export default function Home () {
  const router = useRouter();
  const [email,setEmail] = useState("")
  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const [error, setError] = useState(false);
  const [credentialsBlank, setCredentailBlank] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  // const email = useState("")
  const res = async () => {

    const res = await signIn("credentials",{
      email,
      name,
      password,
      redirect:false,
    })

    if (res?.error == "email") {
      setError(true);
      return;
    } 
    else if(res?.error == "blank"){
      setCredentailBlank(true);
      return;
    }
    else if(res?.ok ){
      router.push('/user/dashboard')
    }

  }

  return (
    <div className={`grid grid-cols-[50%,50%] h-[100vh] ${poppins.className}`}>
     
    {
      error?<Error data="Email is already taken"/>:null
    }
    {
      credentialsBlank ? <Error data="Enter details"/>:null
    }
    {
      isLoading?<Loader/>:null
    }
      <div className="bg-[url('/safe.jpg')] h-[100%] w-[100%]  bg-blend-darken  bg-gray-200/50  bg-cover "></div>

      
      <div className=" flex pl-20 text-gray-900 bg-gradient-to-b from-gray-50 to-white  w-[100%]   flex-col ">
      
      <div className={`flex items-center justify-center  w-[80%] mt-10 `}>
             
             <div className="flex gap-1 items-center">
         <Image width="45" height="40" src="https://img.icons8.com/pulsar-gradient/48/circled.png" alt="circled"/>
           
         <p className=" font-semibold  text-[2rem] bg-gradient-to-r from-gray-500  to-cyan-900 inline-block text-transparent bg-clip-text  ">PayTm</p>
       </div>
             </div>

        <div className="text-[1vh] mb-5">
          <div className="text-center w-[50%] m-auto pt-5 mb-4">
            <div className={`flex items-center  w-[20vh] `}>
              
           
            </div>
          </div>
          <p className="text-[7vh] pb-2 text-slate-600 font-semibold">Create an Account </p>
        </div>
        

        <div className="w-[90%] flex  flex-col space-y-6 ">
          <div className="w-full ">
            <label className="block mb-2 text-sm text-slate-600">Name</label>
            <input
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-300 rounded-md px-3 py-2 transition duration-300  ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Elon Musk"
              onChange={(e)=>{
                setName(e.target.value)
              }}
            />
          </div>
          <div className="w-full ">
            <label className="block mb-2 text-sm text-slate-600">Email</label>
            <input
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-300 rounded-md px-3 py-2 transition duration-300  ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="example@gmail.com"
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
            />
          </div>

          

          <div className="w-full ">
            <label className="block mb-2 text-sm text-slate-600">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full pl-3 pr-3 py-2 bg-transparent shadow-sm placeholder:text-slate-400 text-slate-600 text-sm border border-slate-300 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300  focus:shadow"
                placeholder="Your password"
                onChange={(e)=>[
                  setPassword(e.target.value)
                ]}
              />
              <p className="flex items-start mt-2 text-xs text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-1.5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                Use at least 8 characters, one uppercase, one lowercase and one
                number.
              </p>
            </div>
          </div>

          <div className="w-full">
            <button
              type="button"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={ async()=>{
                setIsloading(true)
                 await res();
                setIsloading(false);
                setTimeout(()=>{
                  setCredentailBlank(false);
                  setError(false)
                },3000)
              }
              }
            >
              Sign up
            </button>
          </div>

          <div className="text-gray-600 -mt-3">
            <p>
              Already have an account?{" "}
              <span
                onClick={() => {
                  signIn();
                }}
                className="underline text-blue-900 hover:cursor-pointer"
              >
                Log in
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
