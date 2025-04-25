"use client";
import bank from "./Hdfc.png";
import {Mona_Sans} from "next/font/google";
import { animate, motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Logo from "@repo/ui/logo";


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


    <div className="z-190">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, consequatur asperiores? Quod eveniet ullam ipsa atque, quos inventore veniam exercitationem laboriosam architecto corrupti animi, quasi nesciunt tempora dolor unde. Dolor debitis, quis voluptatem perferendis aliquam dicta voluptates tempore dolores libero expedita atque officiis dolore doloribus aliquid at omnis deleniti adipisci.</div>

   </div> 
  );
}
