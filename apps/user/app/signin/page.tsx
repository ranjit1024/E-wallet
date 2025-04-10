"use client";
import Logo from "@repo/ui/logo";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";
const poppins = Poppins({
  subsets: ["latin"], // Supports Latin characters
  weight: ["100", "400"], // Choose font weights
  style: ["normal", "italic"], // Choose styles
  variable: "--font-poppins", // Optional: Use CSS variable
});

export default function () {
  const router = useRouter();
  const [email,setEmail] = useState("fsd")
  const [password,setPassword] = useState("fsdf")
  // const email = useState("")
  const res = async () => {

    const res = await signIn("credentials",{
      email,
      password,
      redirect:true,
      callbackUrl:"/"
    })
  }
  console.log(res)

  return (
    <div className={`grid grid-cols-[50%,50%] h-[100vh] ${poppins.className}`}>
      <div className="bg-[url('/safe.jpg')] bg-cover bg-center"></div>

      <div className=" flex pl-20 text-gray-900 bg-gradient-to-b from-gray-100 to-blue-100  w-[100%]  flex-col ">
        <div className="text-[7vh] mb-5">
          <div className="text-center w-[50%] m-auto pt-5 pb-12">
            <div className={`flex items-center justify-center  w-[20vh] `}>
              <img src="/logo.png" height={"50vh"} width={"50vh"} alt="" />
              <p className="text-[60%] text-blue-600 font-black">PayTm</p>
            </div>
          </div>
          <p className="text-[7vh] pb-7 font-medium">Welcome Back </p>
        </div>

        <div className="w-[80%] flex  flex-col space-y-6 ">
          
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
              onClick={res}
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
