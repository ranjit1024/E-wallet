// pages/protected-page.js
"use client";
import AppBar from "@repo/ui/appBar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DashboardSkeleton from "@repo/ui/sceleton"
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
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
  const date = new Date()
  const pathname = usePathname()

  // const itmes = ["DashBoard","Accounts","Trancaction", "Payee"];
    console.log(pathname)
  const images = [
    
    <li 
      
      id="dashboard"
      onClick={()=>{
        router.push('/user/dashboard')
      }}
      className={`flex  items-center gap-3 p-[0.4rem] mb-2 hover:cursor-pointer transition-all duration-100  rounded-lg m-2 ${pathname == "/user/dashboard" ? "bg-white opacity-100 shadow-sm rounded-lg":null}`}
    >
      <img
        width="48"
        className="size-5"
        height="48"
        src="https://img.icons8.com/pulsar-line/48/home.png"
        alt="home"
      />
      <p>DashBoard</p>
    </li>,
    <li
      onClick={()=>{
        router.push('/user/transfer/inittransfer')
      }}
      id="transfer"
      className={`flex items-center gap-3 p-[0.4rem] mb-2 hover:cursor-pointer transition-all duration-100  rounded-lg m-2 ${pathname == "/user/transfer/inittransfer" ? "bg-white opacity-100 shadow-sm rounded-lg":null} `}
    >
     <img className="size-[1.3rem]" width="48" height="48" src="https://img.icons8.com/pulsar-line/48/online-money-transfer.png" alt="online-money-transfer"/>
      <p>Transfer</p>
    </li>,
    

    <li onClick={()=>{
      router.push("/user/transaction")
    }} className={`flex items-center gap-3 p-[0.4rem] mb-2 hover:cursor-pointer transition-all duration-100  rounded-lg m-2  ${pathname === '/user/transaction' ? "bg-white opacity-100 shadow-sm rounded-lg":null } `}>
      <img
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
      className={`h-[100vh]  bg-gradient-to-tr to-gray-50 from-gray-50 ${poppins.className}`}
    >
      <div className="grid grid-cols-[20%,80%]   ">
        <div className="relative mr-1">
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
      <div className="pt-2 ml-2  text-gray-950">
        <p>Hey, {session?.user?.name}</p>
        <p className="text-gray-600 text-sm">{
          date.toDateString()
          }</p>
      </div>
      {children}

      </div>
      </div>
    </div>
  );
}
