import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Profile from "@repo/ui/profile";
import { useEffect, useState } from "react";

declare module "next-auth" {
  interface Session {
    user: {
      /** Your database’s user ID */
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});
export default function () {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isProfile, setIsProfile] = useState(false);

  useEffect(() => {
    function hide() {
      console.log("data");
      setIsProfile(false);
    }
    document.addEventListener("click", hide);

    return () => {
      document.removeEventListener("click", hide);
    };
  });

  return (
    <div className={`${poppins.className} `}>
      {isProfile ? <Profile /> : null}
    
      <div className="px-5 pt-3 flex items-center justify-between">
        <div className="flex gap-1 items-center">
          <img
            width="30"
            height="40"
            src="https://img.icons8.com/pulsar-gradient/48/circled.png"
            alt="circled"
            />

          <p className="font-normal  text-[1.2rem] bg-gradient-to-r from-blue-500  to-cyan-900 inline-block text-transparent bg-clip-text  ">
            PayTm
          </p>
        </div>
        <div
          className="size-8 hover:scale-105 hover:cursor-pointer "
          onClick={() => {
            setIsProfile(!isProfile);
          }}
          >
            
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/pulsar-gradient/48/nft-user.png"
            alt="nft-user"
            />
        </div>
      </div>
    </div>
  );
}
