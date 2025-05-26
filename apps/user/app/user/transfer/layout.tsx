// pages/protected-page.js
"use client";
;
import {  useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import DashboardSkeleton from "@repo/ui/sceleton"
import { Mona_Sans  } from "next/font/google";
import { usePathname } from "next/navigation";

const poppins = Mona_Sans({
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

    const click = useRef<HTMLButtonElement>(null);
    const path = usePathname()
  // const itmes = ["DashBoard","Accounts","Trancaction", "Payee"];

  
  useEffect(() => {
    if (status === "loading") return; // Wait for session to load
    if (!session) {
      router.push("/signin"); // Redirect to login page
    }
 
   
  }, [session, status, router]);


  if (status === "loading") {
    return <div><DashboardSkeleton/></div>;
  }


  return (
    <div
      className={`h-[90vh]  bg-gradient-to-tr to-gray-50 from-gray-50 ${poppins.className}`}
    >
        
      
          

        
    <div className="w-[100%] max-md:w-[100vw] flex justify-center items-center">
      <div className="backdrop-blur-md mt-4 bg-gray-900/10 text-gray-600 transsi border border-white/20 shadow-md transform  w-[99%] rounded-xl px-2 py-1 flex justify-between items-center  ">
      
        <button ref={click} 
        onClick={()=>{
          router.push('/user/transfer/inittransfer')
        }}
        className={`px-2 py-2 ${path === "/user/transfer/inittransfer" ? "bg-gray-50 rounded-xl shadow-inner transition-all ease-in-out duration-100   ":null  } transition-all ease-in-out duration-100 w-[33%] focus:rounded-xl focus:shadow-inner text-gray-800 focus:text-black`}>Transfer</button>
        <button
        onClick={()=>{
          router.push("/user/transfer/withdraw")
        }}
         className={`px-2 py-2 ${path === "/user/transfer/withdraw" ? "bg-gray-50 rounded-xl shadow-inner transition-all ease-in-out duration-100" : null}  focus:bg-gray-50 w-[33%] focus:rounded-xl focus:shadow-inner text-gray-800 focus:text-black`}>Withdrawal</button>
        <button
        onClick={()=>{
          router.push("/user/transfer/deposit")
        }}
        className={`px-2 py-2 ${path === "/user/transfer/deposit" ? "bg-gray-50 rounded-xl shadow-inner transition-all ease-in-out duration-100" : null}  focus:bg-gray-50 focus:rounded-xl w-[33%] focus:shadow-inner text-gray-800 focus:text-black`}>Deposit</button>
        </div>
        
      </div>
      {children}

     
    
    </div>
  );
}
