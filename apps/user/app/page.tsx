"use client";
import bank from "./Hdfc.png";
import {Mona_Sans} from "next/font/google";
import { animate, motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Logo from "@repo/ui/logo";
import side from "./side.png"

const monaSans = Mona_Sans({
  subsets: ["latin"], // Supports Latin characters
  weight: ["400", "700", "900"], // Choose font weights
  style: ["normal", "italic"], // Choose styles
  variable: "--font-poppins", // Optional: Use CSS variable
});

export default function Home() {
  const router = useRouter();
  return (
    
   <div className={`${monaSans.className}`}>
    <div className="mt-2 ml-2">
    <Logo/>
    </div>
    <div className="flex flex-col justify-center relative  items-center mx-20 mt-20 p-4 text-[5.4vw] font-semibold text-center">
      <div className="text-center w-[80vw]">

      Safeguard your <span className="relative w-[100%]">
      <div className="p-4 absolute  bg-blue-400 opacity-20 left-0 bottom-4 w-[96%] -z-10"></div>
      finances  </span>  with 
      </div>

      <div className="text-center w-[60%] -mt-5">
      with top security
      </div>

      
    <div className="absolute top-10 -left-5 -rotate-90 opacity-40  transition-all">
    <img width="40" height="40" src="https://img.icons8.com/office/40/sort-down.png" alt="sort-down"/>
    </div>
 
    <div className="absolute top-12 -right-1 -rotate-90 opacity-80  transition-all">
    <img width="40" height="40" src="https://img.icons8.com/color/48/10-percents.png" alt="10-percents"/>
    </div>
    <div className="absolute bottom-14  left-[40vh] -rotate-90 opacity-80  transition-all bg-yellow-400 p-1 rounded-full">
    </div>
    </div>


    <div className="z-190 text-center flex items-center justify-center w-[100%] -mt-3">
      <p className="w-[60%]">
      Paytm is a secure and reliable platform for transferring money between banks, ensuring every transaction is protected by advanced encryption.</p> </div>

    <div className="z-190 relative text-center flex items-center justify-center w-[100%] mt-8 gap-5">
 
 <div>
<button
onClick={()=>{
  signIn()
}}
className="rounded-xl bg-slate-950 py-2 px-8 border border-transparent text-center text-md text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-800 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none font-medium " type="button">
  
Get started
</button>

</div>

<div className="">
  <img className="h-10" src="./side.png" alt="" />
</div>
<div className="absolute opacity-50 right-[20%] -top-4">
  <img className="h-10" src="./side2.png" alt="" />
</div>
<div className="absolute opacity-40 left-[20%] top-3">
<img width="40" height="50" src="https://img.icons8.com/ios-filled/50/FA5252/play--v1.png" alt="play--v1"/>
</div>

    </div>


  <div className=" mt-10 flex justify-center w-[100%] items-center gap-12 px-[12%] pt-20">

    <div className="size-[90%]  p-2 bg-[#fff5e4]  rounded-md">

    <img src="./test.png" alt="" className="h-[50%]" />
    </div>
    <div className="size-[90%]  p-5 bg-gray-50  rounded-md">

    <img src="./second_side.png" alt="" className="h-[50%]" />
    </div>
   


  
  </div>
   </div> 


  );
}
