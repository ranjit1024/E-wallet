"use client"
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import lastRamp from "../../../lib/actions/getOnramp";
import axios from "axios";
import Loader from "@repo/ui/loader"
import Image from "next/image";
import { prod } from "../../../link";
const KotakLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
    const{data:session, status} = useSession();
    const [isloding,setIsloading] = useState(false)
    const router = useRouter();
    useEffect(()=>{
        if(status == "loading"){
            return;
        }
        if(!session){
            router.push('/signin')
        }
    },[session,status,router])
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white px-4 py-10">
      {isloding?<Loader/>:null}
      {/* Left Illustration */}
      <div className="flex-1 flex items-center justify-center mb-8 md:mb-0">
        <div className="text-center">
          <Image
            src="https://img.freepik.com/premium-vector/woman-saving-piggy-bank-trending-concept-flat-illustrator_720185-2072.jpg?w=826"
            alt="Illustration" 
            width={1000} height={1000}
            
            className="w-[60vh] mx-auto mb-4"
          />
          <p className="text-lg font-semibold text-blue-800">Transfer,Deposit,Withdrawal</p>
          <p className="text-sm text-gray-600">
            Make everyday effortless and uninterrupted
          </p>
        </div>
      </div>

      {/* Right Login Box */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-md p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-1">Welcome to PayTm</h2>
          <div className="flex space-x-6 border-b border-gray-200 pb-2">
            <span className="text-blue-600 border-b-2 border-blue-600 font-medium cursor-pointer">
              Login
            </span>
            <span className="text-gray-500 cursor-pointer">Get id and password</span>
          </div>
        </div>

        <div>
          <input
            defaultValue={"Paytm"}
            disabled
            type="text"
            placeholder="CRN, Username or Card Number"
            className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="relative mb-2">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              defaultValue={"123456789"}
              disabled
              className="w-full border border-gray-300 rounded px-4 py-2 pr-14 focus:outline-none focus:ring-2 focus:ring-blue-500 "
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-sm text-gray-500"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="flex items-center justify-between mb-4 text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Remember my CRN</span>
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              Use virtual keypad
            </a>
          </div>

          <div className="text-sm mb-4">
            <a href="#" className="text-blue-600 hover:underline">
              Forgot CRN, username or password?
            </a>
          </div>

          <p className="text-xs text-gray-500 mb-4">
            By clicking on ‘Deposite’, you accept that you have read our{" "}
            <a href="#" className="underline text-blue-600">Terms & conditions</a>,{" "}
            <a href="#" className="underline text-blue-600">Privacy Policy</a> and the{" "}
            <a href="#" className="underline text-blue-600">Tips for Safe Banking</a>
          </p>

          <button
            onClick={async()=>{
              setIsloading(true)
              const data = await lastRamp();
              if(data?.status === "Pending" && data?.transfer==="deposite"){
                await axios.post(`http://ewallet.10xdev.shop:3004/hdfcWebhook`, {
                  token:data?.token,
                  amount:data?.amount,
                  user_indentifier:data?.userId
                });
                setIsloading(false);
                localStorage.removeItem('data')
                router.push("/user/dashboard")
                return
              }
              localStorage.removeItem("data");
              router.push('/user/dashboard')
            }}
            className="w-full bg-green-300 text-white font-semibold py-2 rounded hover:bg-green-400 "

          >
            Deposit
          </button>
        </div>
      </div>

      {/* Footer */}
      <p className="absolute bottom-4 text-xs text-gray-600">
        🔒 Never share your password or Card details with anyone.{" "}
        <a href="#" className="underline">Tips for Safe Banking</a>
      </p>
    </div>
  );
};

export default KotakLogin;
