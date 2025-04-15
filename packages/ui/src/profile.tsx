import { signOut } from "next-auth/react"
export default function(){

return <div className="absolute top-12 right-1 p-4 bg-white rounded-lg  shadow-2xl z-10">
      
        <div className="flex items-center justify-center gap-2">
         <img width="40" height="50" src="https://img.icons8.com/pulsar-gradient/96/nft-user.png" alt="nft-user"/>
        <p>ranjitdas@gmail.com</p>
        </div>
        <hr className=" my-2" />
         
         

         <button className="w-[100%] rounded-md bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button"
         onClick={()=>{
            signOut()
         }}>
  Sign out
</button>
    </div>
}