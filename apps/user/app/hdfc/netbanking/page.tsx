"use client"
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const LoginPage = () => {
    const router = useRouter();
    const {data:session, status} = useSession()

    useEffect(()=>{
        if(status == "loading"){
            return;
        }
        if(!session){
            router.push('/signin')
        }
    },[session,status,router])
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="text-center py-6">
        <h1 className="text-2xl font-semibold">Welcome to HDFC Bank NetBanking</h1>
        <p className="text-sm text-gray-600 mt-1">MADE DIGITAL BY <span className="font-bold text-blue-700" >HDFC BANK</span></p>
        <p className="text-red-500 mt-1 font-semibold">This is Fake HDFC bank netbanking page <span className="text-blue-500 font-normal underline hover:cursor-pointer hover:text-blue-700"
        onClick={()=>{
           
        }}>Click here to get Customer ID and password</span> </p>
      </header>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row bg-white shadow p-6 rounded-md">
        {/* Left Section */}
        <div className="flex-1 px-4">
          <h2 className="text-xl font-semibold mb-4">Login to NetBanking</h2>
          <label className="block mb-2">Customer ID/ User ID</label>
          <input
        
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-blue-500 mb-1"
          />
          <p className="text-sm text-blue-600 cursor-pointer mb-4">Forgot Customer ID</p>

          <label className="block mb-2">Enter password</label>
          <input
            
            
            type="password"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-blue-500 mb-6"
          />

          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            CONTINUE
          </button>

          <div className="bg-blue-100 text-sm p-4 mt-6 rounded">
            <p className="font-semibold">Dear Customer,</p>
            <p>
              Welcome to the new login page of HDFC Bank NetBanking.
              Its lighter look and feel is designed to give you the best possible user experience.
              Please continue to login using your customer ID and password.
            </p>
          </div>

          <div className="mt-6 text-sm">
            <p className="font-semibold mb-2">Don't have a HDFC Bank Savings Account?</p>
            <div className="text-blue-600 space-y-1">
              <p>Credit Card only? <span className="underline cursor-pointer">Login here</span></p>
              <p>Prepaid Card only ? <span className="underline cursor-pointer">Login here</span></p>
              <p>Retail Loan only? <span className="underline cursor-pointer">Login here</span></p>
              <p>HDFC Ltd. Home Loans? <span className="underline cursor-pointer">Login here</span></p>
              <p>HDFC Ltd. Deposits? <span className="underline cursor-pointer">Login here</span></p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 px-4 mt-8 md:mt-0 border-l border-gray-200">
          <div className="flex items-center mb-4">
          <img width="50" height="100" src="https://img.icons8.com/color/144/symantec.png" alt="symantec"/>
          </div>

          <p className="text-sm text-gray-700 mb-2">Your security is of utmost importance. <span className="text-blue-600 cursor-pointer">Know More…</span></p>

          <div className="mt-6">
            <h3 className="font-semibold mb-1">First Time User?</h3>
            <p className="text-blue-600 cursor-pointer mb-4">Register Now</p>

            <h3 className="font-semibold mb-1">We have added a host of new features!</h3>
            <ul className="text-sm list-disc ml-5 text-gray-700 space-y-1">
              <li>Anywhere access through Desktop or mobile</li>
              <li>Enhanced security measures</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
