import { div } from "framer-motion/client";
import Image from "next/image";
import Logo from "@repo/ui/logo"
export default function Home() {
  return (
    <div className=" flex justify-center items-center h-[100vh]">
      <div  className="absolute top-2 left-2" >
      <Logo ></Logo>

      </div>
   

        <div className="p-4 bg-white">
        

          <button

            type="button"
            className="text-gray-900 bg-white hover:bg-gray-100  border-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 hover:cursor-pointer dark:hover:bg-gray-200 me-2 mb-2 shadow-lg w-full"
          >
           <img width="35" className="mr-2" height="48" src="https://img.icons8.com/fluency/48/google-logo.png" alt="google-logo"/>
            Sign up with google
          </button>
        </div>

        
      </div>
    
  );
}
