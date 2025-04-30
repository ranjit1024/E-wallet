import {  Poppins } from "next/font/google"; 
const monaSans = Poppins({
  subsets: ["latin"], // Supports Latin characters
  weight: ["400", "600", "700",  "900"], // Choose font weights
  style: ["normal", "italic"], // Choose styles
  variable: "--font-poppins", // Optional: Use CSS variable
});
export default function(){
    return <div className={`flex gap-1 items-center ${monaSans.className} `}>
    <img width="30" height="40" src="https://img.icons8.com/pulsar-gradient/48/circled.png" alt="circled"/>
      
    <p className="font-[600]  text-[1.5rem] bg-gradient-to-r from-gray-500  to-gray-900 inline-block text-transparent bg-clip-text  ">PayTm</p>
  </div> 
}