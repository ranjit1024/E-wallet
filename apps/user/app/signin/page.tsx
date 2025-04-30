"use client";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import Error from "@repo/ui/toast"
import Loader from "@repo/ui/loader"



const poppins = Poppins({
  subsets: ["latin"], // Supports Latin characters
  weight: ["100", "400"], // Choose font weights
  style: ["normal", "italic"], // Choose styles
  variable: "--font-poppins", // Optional: Use CSS variable
});

export default function Home () {
  
  const router = useRouter();
  

  const [email,setEmail] = useState("fsd");
  const [password,setPassword] = useState("fsdf");

  const [credentialsError, setShowCredentailError] = useState(false);

  const [loading,setLoading] = useState(false);
  // const email = useState("");
  const res = async () => {
    const res = await signIn("credentials",{
      email,
      password,
      redirect:false
    })

    if(res?.error === "not match"){
      setShowCredentailError(true);
      return;
      
    }
  
    else if(res?.error == "password mismatch"){
      setShowCredentailError(true);
    
      return;
      
    }
    else if(res?.ok){
      router.push('/user/dashboard')
    }
  }
  

  return (
    <div className={ `grid grid-cols-[50%,50%] w-[100vw] h-[100vh] grid-rows-1 ${poppins.className}`}>
     
        <div className="bg-[url('/safe.jpg')] bg-blend-darken h-[100%] w-[100%] bg-gray-200/50  bg-cover bg-no-repeat bg bg-center"></div>
       
        {
          loading ? <Loader/>:null
        }
      
      {/* {error && <p className="text-red-500 mb-4">{getErrorMessage()}</p>} */}
   
      {
        credentialsError ? <Error data="Email or password is invalid"/>:null
      }
  

      <div className=" flex pl-20 text-gray-900  bg-gradient-l from-gray-50 to-white   flex-col p-10 ">
        <div className="text-[7vh] mb-5">
          <div className="text-center w-[50%] m-auto pt-5 pb-12">
            <div className={`flex items-center justify-center  w-[20vh] `}>
             
            <div className="flex gap-1 items-center">
        <Image width="45" height="40" src="https://img.icons8.com/pulsar-gradient/48/circled.png" alt="circled"/>
          
        <p className=" font-semibold  text-[2rem] bg-gradient-to-r from-gray-500  to-cyan-900 inline-block text-transparent bg-clip-text  ">PayTm</p>
      </div>
            </div>
          </div>
          <p className="text-[7vh] pb-2 text-slate-600 font-semibold">Welcome Back </p>
        </div>

        <div className="w-[90%] flex  flex-col space-y-6 ">
          
          <div className="w-full">
            <label className="block mb-2 text-sm text-slate-600">Email</label>
            <input
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-300 rounded-md px-3 py-2 transition duration-300  ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="example@gmail.com"
              onChange={(e)=>{
                setEmail(e.target.value);

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
              className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 text-white font-semibold py-2 rounded-lg w-full"
              
              onClick={async()=>{
                setLoading(true)
                await res()
                setLoading(false);

                setTimeout(()=>{
                  setShowCredentailError(false)
                },3000)
              
              }
              }
            >
              Sign in
            </button>
          </div>

          <div className="text-gray-600 -mt-3">
            <p>
              New to PayTm?{" "}
              <span
                onClick={() => {
                  router.push('/signup')
                  
                }}
                className="underline text-blue-900 hover:cursor-pointer"
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
