"use client"
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react"
import { Mona_Sans, Poppins } from "next/font/google";
import { useRouter } from "next/navigation";
const monaSans = Mona_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
  variable: "--font-poppins",
});
export default function(){
  const router = useRouter()
  const session = useSession()
return <div className={`absolute top-12 right-1 p-4 bg-white rounded-lg  shadow-2xl z-10`}>
        <div className={`flex items-center justify-center gap-2 ${monaSans.className}`}>
         <img width="40" height="50" src="https://img.icons8.com/pulsar-gradient/96/nft-user.png" alt="nft-user"/>
        <p>{session.data?.user?.email}</p>
        </div>
        <hr className=" my-2" />
         
         

         <button className="w-[100%] rounded-md bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button"
         onClick={()=>{
           signOut()
           router.push("/");
         }}>
  Sign out
</button>
    </div>
}