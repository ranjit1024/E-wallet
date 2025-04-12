// pages/protected-page.js
"use client";
import AppBar from "@repo/ui/appBar";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function ProtectedPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isActive, setIsActive] = useState<number | null>(null);
  // const itmes = ["DashBoard","Accounts","Trancaction", "Payee"];

  const images = [
    <li
      id="dashboard"
      className={`flex items-center gap-2 p-[0.4rem] mb-2 hover:cursor-pointer transition-all duration-100  rounded-lg m-2 `}
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
    <li id="acc" className="flex items-center gap-2 p-[0.4rem] mb-1 hover:cursor-pointer  transition-all duration-100  rounded-lg m-2  ">
      <img
        className="size-5"
        width="48"
        height="48"
        src="https://img.icons8.com/pulsar-line/48/commercial-development-management.png"
        alt="commercial-development-management"
      />
      <p>Accounts</p>
    </li>,

    <li className="flex items-center gap-2 p-[0.4rem] mb-2 hover:cursor-pointer transition-all duration-100  rounded-lg m-2  ">
      <img
        className="size-5"
        width="48"
        height="48"
        src="https://img.icons8.com/pulsar-line/48/exchange.png"
        alt="exchange"
      />
      <p>Transaction</p>
    </li>,
    <li className="flex items-center gap-2 p-[0.4rem] mb-2 hover:cursor-pointer transition-all duration-100  rounded-lg m-2 ">
      <img
        width="48"
        height="48"
        className="size-5 "
        src="https://img.icons8.com/pulsar-line/48/card-in-use.png"
        alt="card-in-use"
      />
      <p>Payee</p>
    </li>,
  ];
  useEffect(() => {
    if (status === "loading") return; // Wait for session to load
    if (!session) {
      router.push("/signin"); // Redirect to login page
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={`h-[100vh]  bg-gradient-to-tr to-gray-50 from-gray-50 ${poppins.className}`}
    >
      <div className="grid grid-cols-[20%,80%]   ">
        <div className=" dashbord h-[100vh]">
          <AppBar />

          <div className="mt-10 p-2  text-gray-600 ">
            <ul>
              {/* <li onClick={()=>{
              const dash = document.getElementById('dashboard');
              

            }} id="dashboard" className={`flex items-center gap-2 p-2 mb-2 hover:cursor-pointer hover:scale-[102%] transition-all duration-100  rounded-lg m-2 `}>
                <img width="48" className="size-5" height="48" src="https://img.icons8.com/pulsar-line/48/home.png" alt="home"/>
                <p>DashBoard</p>
              </li>

            
              
              */}

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
        <div>dsf</div>
      </div>
    </div>
  );
}
