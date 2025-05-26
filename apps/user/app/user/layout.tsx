// pages/protected-page.js
"use client";
import AppBar from "@repo/ui/appBar";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DashboardSkeleton from "@repo/ui/sceleton"
import { Mona_Sans } from "next/font/google";
import { usePathname } from "next/navigation";
import Image from "next/image";
const monaSans = Mona_Sans({
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
  const [hide, setHide] = useState(false);
  const date = new Date()
  const pathname = usePathname()

  // const itmes = ["DashBoard","Accounts","Trancaction", "Payee"];
    console.log(pathname)
  const images = [
    
    <li  
      key={1}
      id="dashboard"
      onClick={()=>{
        router.push('/user/dashboard')
      }}
      className={`flex hover:cursor-pointer  items-center gap-3 p-[0.4rem] mb-2  rounded-lg m-2 ${pathname == "/user/dashboard" ? "bg-white opacity-100 shadow-sm rounded-lg":null}`}
    >
      <Image
        width="48"
        className="size-5"
        height="48"
        src="https://img.icons8.com/pulsar-line/48/home.png"
        alt="home"
      />
      <p>DashBoard</p>
    </li>,
    <li
    key={2}
      onClick={()=>{
        router.push('/user/transfer/inittransfer')
      }}
      id="transfer"
      className={`flex items-center gap-3 p-[0.4rem] mb-2 hover:cursor-pointer transition-all duration-100  rounded-lg m-2 ${pathname == "/user/transfer/inittransfer" ? "bg-white opacity-100 shadow-sm rounded-lg":null} `}
    >
     <Image className="size-[1.3rem]" width="48" height="48" src="https://img.icons8.com/pulsar-line/48/online-money-transfer.png" alt="online-money-transfer"/>
      <p>Transfer</p>
    </li>,
    

    <li
    key={3}
     onClick={()=>{
      router.push("/user/transaction")
    }} className={`flex items-center gap-3 p-[0.4rem] mb-2 hover:cursor-pointer transition-all duration-100  rounded-lg m-2  ${pathname === '/user/transaction' ? "bg-white opacity-100 shadow-sm rounded-lg":null } `}>
      <Image
        className="size-5"
        width="48"
        height="48"
        src="https://img.icons8.com/pulsar-line/48/exchange.png"
        alt="exchange"
      />
      <p>Transaction</p>
    </li>,
   
  ];
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
      className={`h-[100%]  bg-gradient-to-tr to-gray-50 from-gray-50 ${monaSans.className}`}
    >
      <div className="grid grid-cols-[20%,80%]   ">
        <div className="relative mr-1 max-md:hidden">
          <AppBar />
          {/* <Profile/> */}

          
        

          <div className="mt-8 p-2 h-[80vh]  text-gray-600 ">
            <ul>
             

              {images.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setIsActive(index);
                    }}
                    
                    className={`${isActive === index ? "bg-white opacity-100 shadow-sm rounded-lg" : 'opacity-90'}`}
                  >
                    {item}
                  </div>
                );
              })}
            </ul>
          </div>

          
        </div>

      <div>
      <div className="pt-2   text-gray-950 max-md:w-[100vw] flex justify-between item-ce">
        <div className="max-md:px-2">

        <p className="flex items-center mb-1 gap-2  text-lg">Hey, {session?.user?.name} 
        
        </p>
        <p className="text-gray-600 text-sm">{
          date.toDateString()
          }</p>
        </div>
         <div className="mr-1 md:hidden relative flex flex-col  items-end  ">
          <svg onClick={()=>{
            setHide(!hide)
          }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 relative">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
{ hide ? 
          <div  className="absolute z-10  flex flex-col top-5 rounded-lg  bg-white shadow-md border border-slate-200">
  <nav className="flex min-w-[240px] flex-col gap-1 p-1.5">
    <div
      role="button"
      onClick={()=>{
        router.push('/user/dashboard');
        setHide(!hide)
      }}
      className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
    >
      Dashboard
    </div>
      <div
      role="button"
        className="text-slate-800  flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
        onClick={()=>{
          router.push('/user/transfer/inittransfer');
          setHide(!hide)
        }}
      >
        Transfer
      </div>
      <div
        role="button"
        className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
        onClick={()=>{
            router.push("/user/transaction");
            setHide(!hide)
        }}
      >
        Transcaction
      </div>
      <div
        role="button"
        className=" flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 text-red-500 active:bg-red-400"
        onClick={()=>{
            // router.push("/user/transaction");
            localStorage.removeItem('data');
            signOut(
              {callbackUrl:"/"}
            )
            setHide(!hide)
        }}
      >
        Sign out
      </div>
  </nav>
</div>:null}
          
        </div> 
      </div>
      {children}

      </div>
      </div>
    </div>
  );
}
