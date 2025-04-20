"use client"
import { signIn, signOut } from "next-auth/react";
import Logo from "@repo/ui/logo"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"], // Supports Latin characters
  weight: ["100", "400"], // Choose font weights
  style: ["normal", "italic"], // Choose styles
  variable: "--font-poppins", // Optional: Use CSS variable
});
export default  function Home() {
  const session = useSession();
  const router = useRouter();

  return (
    <div className=" flex justify-center items-center h-[100vh]">
          
      <div  className="absolute top-2 left-2" >
   
          
       
     
      <Logo ></Logo>

      </div>

      <div className="grid grid-cols-2 items-center m-10 bg-white shadow-sm p-2 rounded-2xl">

      
      <div
            className={`${poppins.className} mt-5 font-[600] text-[#0578f9]  text-[8vh]  text-center w[100%]`}
          >
            <p>PayTm For Merchents</p>
          </div>
      

   

        <div className="p-4 bg-white w-[100%]  flex items-center justify-center">


          <button onClick={async ()=>{
            console.log("id",process.env.Clinet_ID)
            const res = await signIn("google",{redirect:false,
              callbackUrl:"/vendor/dashboard"
            });
            if(res?.error){
              router.push("/")
            }
                     

          }}
            
            type="button"
            className="text-gray-900 bg-white hover:bg-gray-100  border-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 hover:cursor-pointer dark:hover:bg-gray-200 me-2 mb-2 shadow-lg w-[50%]"
            
          >
            
           <img width="35" className="mr-2" height="48" src="https://img.icons8.com/fluency/48/google-logo.png" alt="google-logo"/>
            Sign up with google
          </button>
        </div>
        </div>

        
      </div>
    
  );
}
