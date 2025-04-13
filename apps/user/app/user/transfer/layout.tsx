// pages/protected-page.js
"use client";
import AppBar from "@repo/ui/appBar";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {Skeleton} from "@repo/ui/sceleton"
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)  {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isActive, setIsActive] = useState<number | null>();
    const click = useRef<HTMLButtonElement>(null)
  // const itmes = ["DashBoard","Accounts","Trancaction", "Payee"];

  
  useEffect(() => {
    if (status === "loading") return; // Wait for session to load
    if (!session) {
      router.push("/signin"); // Redirect to login page
    }
    else{

      click.current?.focus();
    }
   
  }, [session, status, router]);


  if (status === "loading") {
    return <div><Skeleton/></div>;
  }


  return (
    <div
      className={`h-[90vh]  bg-gradient-to-tr to-gray-50 from-gray-50 ${poppins.className}`}
    >
        
      
          

        
    <div className="w-[100%] flex justify-center items-center">
      <div className="backdrop-blur-md mt-4 bg-[rgba(0,0,0,0.0.02)] border border-white/20 shadow-md transform  w-[99%] rounded-xl px-2 py-1 flex justify-between items-center z-50">
      
        <button ref={click} 
        onClick={()=>{
          router.push('/user/transfer/inittransfer')
        }}
        className="px-2 py-2  focus:bg-gray-50 w-[33%] focus:rounded-xl focus:shadow-inner text-gray-500 focus:text-black">Transfer</button>
        <button
        onClick={()=>{
          router.push("/user/transfer/withdraw")
        }}
         className="px-2 py-2  focus:bg-gray-50 w-[33%] focus:rounded-xl focus:shadow-inner text-gray-500 focus:text-black">Withdrawal</button>
        <button
        onClick={()=>{
          router.push("/user/transfer/deposit")
        }}
        className="px-2 py-2  focus:bg-gray-50 focus:rounded-xl w-[33%] focus:shadow-inner text-gray-500 focus:text-black">Deposit</button>
        </div>
        
      </div>
      {children}

     
    
    </div>
  );
}
