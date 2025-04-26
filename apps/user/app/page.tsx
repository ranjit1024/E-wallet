"use client";
import bank from "./Hdfc.png";
import { Mona_Sans } from "next/font/google";
import { animate, motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Logo from "@repo/ui/logo";
import side from "./side.png";
import { div } from "framer-motion/client";

const monaSans = Mona_Sans({
  subsets: ["latin"], // Supports Latin characters
  weight: ["400", "600", "700", "900"], // Choose font weights
  style: ["normal", "italic"], // Choose styles
  variable: "--font-poppins", // Optional: Use CSS variable
});

export default function Home() {
  const router = useRouter();
  return (
    <div className={`${monaSans.className}`}>
      <div className="mt-2 ml-2">
        <Logo />
      </div>
      <motion.div 
      initial={{
        y:10,
        opacity:0
      }}
      animate={{
        y:0,
        opacity:1
      }}
      transition={{
        duration:0.5,
        ease:"easeIn"
      }}
      className="flex flex-col justify-center relative  items-center mx-20 mt-20 p-4 text-[5.4vw] font-semibold text-center">
        <div className="text-center w-[80vw]">
          Safeguard your{" "}
          <span className="relative w-[100%]">
            <div className="p-4 absolute  bg-blue-400 opacity-20 left-0 bottom-4 w-[96%] -z-10"></div>
            finances{" "}
          </span>{" "}
          with
        </div>

        <div className="text-center w-[60%] -mt-5">with top security</div>

        <div className="absolute top-10 -left-5 -rotate-90 opacity-40  transition-all">
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/office/40/sort-down.png"
            alt="sort-down"
          />
        </div>

        <div className="absolute top-12 -right-1 -rotate-90 opacity-80  transition-all">
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/color/48/10-percents.png"
            alt="10-percents"
          />
        </div>
        <div className="absolute bottom-14  left-[40vh] -rotate-90 opacity-80  transition-all bg-yellow-400 p-1 rounded-full"></div>
      </motion.div>

      <motion.div 
      initial={{
        y:20,
        opacity:0,
      }}
      animate={{
        y:0,
        opacity:1
      }}
      transition={{
        duration:0.5,
        delay:0.2

      }}
      className="z-190 text-center flex items-center justify-center w-[100%] -mt-">
        <p className="w-[75%] text-lg text-gray-700">
          Paytm is a secure and reliable platform for transferring money between
          banks, ensuring every transaction is protected by advanced encryption.
        </p>{" "}
      </motion.div>

      <motion.div
      initial={{
        scale:0.6,
        opacity:0
      }} 
      animate={{
        scale:1,
        opacity:1
      }}
      transition={{
        duration:0.7,
        ease:"easeOut",
        delay:0.4
      }}
      className="z-190 relative text-center flex items-center justify-center w-[100%] mt-10 gap-5">
        <div>
          <motion.button

whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
            onClick={() => {
              signIn();
            }}
            className="rounded-xl bg-slate-950 py-2 px-8 border border-transparent text-center text-md text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-800 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none font-medium "
            type="button"
          >
            Get started
          </motion.button>
        </div>

        <div className="">
          <img className="h-10" src="./side.png" alt="" />
        </div>
        <div className="absolute opacity-50 right-[20%] -top-4">
          <img className="h-10" src="./side2.png" alt="" />
        </div>
        <div className="absolute opacity-40 left-[20%] top-3">
          <img
            width="40"
            height="50"
            src="https://img.icons8.com/ios-filled/50/FA5252/play--v1.png"
            alt="play--v1"
          />
        </div>
      </motion.div>

      <motion.div 
       initial={{ y: -10, opacity: 0 }}
       animate={{ y: 0, opacity: 1 }}
       transition={{ duration: 1, delay: 1 }}
      className=" mt-10 flex justify-center w-[100%] items-center gap-12 px-[12%] pt-20">
        <div className="size-[90%]  px-2 bg-[#fff5e4]  rounded-xl">
          <img src="./test.png" alt="" className="h-[50%]" />
        </div>
        <div className="size-[90%]  p-5 bg-gray-50  rounded-xl">
          <img src="./second_side.png" alt="" className="h-[50%]" />
        </div>
      </motion.div>


      <motion.div 
      initial={{
        opacity:0,
        y:10
      }}
      
      whileInView={{
        opacity:1,
        y:0
      }}
      transition={{
        duration:0.7
      }}
      viewport={{ once: true,amount:0.5}}
      
      className="mt-[10%] relative flex items-center justify-center flex-col">
        <p className="text-[7vh] w-[70%] text-center font-semibold leading-tight">
          Meet our most popular feature to eastablist smooth transaction
        </p>

        <div className="absolute left-[15%] opacity-50 rotate-45 top-[65%]">
          <img
            width="48"
            height="80"
            src="https://img.icons8.com/officel/80/kite-shape.png"
            alt="kite-shape"
          />
        </div>
        <div className="absolute right-[15%] opacity-50 rotate-90 -top-[8%]">
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/emoji/48/eight-spoked-asterisk-emoji.png"
            alt="eight-spoked-asterisk-emoji"
          />
        </div>
      </motion.div>
      <div>
        <p className="mt-4 text-center text-gray-700 text-lg">
          Paytm is a secure and trusted platform to save money{" "}
        </p>
      </div>

      <div className="all cards grid grid-cols-3 px-40 mt-12 gap-10 ">
        <motion.div 
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Professional bounce-out curve (easeOutExpo)
      }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.3 },
        boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
      }}
      
  
     
      
        className=" border-2 border-gray-200 p-5 rounded-xl  hover:cursor-pointer ">
          <div className="p-5 flex flex-col">
            <div className="bg-[#ffe9ca] p-2 rounded-2xl w-[20%]">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/fluency-systems-regular/48/FAB005/privacy--v1.png"
                alt="privacy--v1"
              />
            </div>

            <div className="mt-5 font-semibold text-[1.2rem] ">
              Safe Account
            </div>
            <div className="mt-5 font-normal text-[1rem] text-gray-800 w-[90%] ">
              Paytm is a reliable and secure platform for managing your deposits
              and withdrawals, ensuring peace of mind for your financial
              transactions.
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1], // Professional bounce-out curve (easeOutExpo)
            delay:0.1
          }}
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.3 },
            boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
          }}
        className=" border-2 border-gray-200 p-5 rounded-xl  hover:cursor-pointer ">
          <div className="p-5 flex flex-col">
            <div className="bg-blue-500/50 p-2 rounded-2xl w-[20%]">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/carbon-copy/100/228BE6/data-in-both-directions--v1.png"
                alt="data-in-both-directions--v1"
              />
            </div>

            <div className="mt-5 font-semibold text-[1.2rem] ">
              Easy Transaction
            </div>
            <div className="mt-5 font-normal text-[1rem] text-gray-800 w-[90%] ">
              Paytm is one of the easy and hassle-free ways to transfer money
              across the banks or send it to other users
            </div>
          </div>
        </motion.div>

        <motion.div
         initial={{ opacity: 0, y: 50, scale: 0.95 }}
         whileInView={{ opacity: 1, y: 0, scale: 1 }}
         viewport={{ once: true, amount: 0.5 }}
         transition={{
           duration: 0.8,
           ease: [0.22, 1, 0.36, 1],
           delay:0.2 // Professional bounce-out curve (easeOutExpo)
         }}
         whileHover={{
           scale: 1.03,
           transition: { duration: 0.3 },
           boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
         }}
        className=" border-2 border-gray-200 p-5 rounded-xl  hover:cursor-pointer">
          <div className="p-5 flex flex-col">
            <div className="bg-purple-500/50 p-2 rounded-2xl w-[20%]">
              <img
                width="58"
                height="58"
                src="https://img.icons8.com/carbon-copy/100/7950F2/payment-history.png"
                alt="payment-history"
              />
            </div>

            <div className="mt-5 font-semibold text-[1.2rem] ">
              Smooth Payment
            </div>
            <div className="mt-5 font-normal text-[1rem] text-gray-800 w-[90%] ">
              With Paytm, you can rest assured that your funds will be credited
              to your account within just 48 hours of your withdrawal reques
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-[10%]">
        <div className="px-[11%] flex gap-10">
          <motion.div 
           initial={{ opacity: 0, x:-20, }}
           whileInView={{ opacity: 1, x:0,  }}
           transition={{ duration: 0.6, ease:"easeInOut",}}
           viewport={{once:true, amount:.2}} className="w-[50%] p-1 bg-[#fce8cc] rounded-lg"
        
           >
          
            <img src="./thirdSection.png" alt="" />
          </motion.div>

          <motion.div
      
          initial={{ opacity: 0, x:20, }}
          whileInView={{ opacity: 1, x:0,  }}
          transition={{ duration: 0.6, ease:"easeInOut"}}
          viewport={{once:true, amount:.2}} 
        
          className="w-[50%] flex flex-col items-center gap-5 relative">
            <div className="text-[2.3rem] font-semibold w-[100%] ">
              Track your deposits and withdrawals for better money management
            </div>
            <p className="mt-4 text-[1.2rem] font-medium text-gray-800">
              Paytm comes with full transaction history for better understanding
              of your spending.
            </p>
            <div className="absolute bottom-0 left-0 flex gap-10 items-center justify-center">
              <div className="bg-blue-500/50 p-5 shadow-md shadow-gray-300 rounded-xl ">
                <p className="font-semibold text-xl text-center">3+</p>
                <p className="text-lg">Experience</p>
              </div>
              <div className="bg-green-500/50 p-5 shadow-md shadow-gray-300 rounded-xl px-10 ">
                <p className="font-semibold text-xl text-center">7+</p>
                <p className="text-lg">Awards</p>
              </div>
              <div className="bg-indigo-500/50 p-5 px-10 shadow-md shadow-gray-300 rounded-xl  ">
                <p className="font-semibold text-xl text-center">30k+</p>
                <p className="text-lg">Clients</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="mt-[10%] mx-[11%] flex gap-10">
        <motion.div
        initial={{ opacity: 0, x:-20, }}
        whileInView={{ opacity: 1, x:0,  }}
        transition={{ duration: 1, ease:"easeInOut"}}
        viewport={{once:true, amount:.2}}
        className="w-[50%] relative">
          <motion.div
            
            className="opacity-50 absolute -left-12 -top-6 rotate-45">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/color/50/best_of_both_words.png"
              alt="best_of_both_words"
            />
          </motion.div>

          <div className="text-[2.3rem] font-semibold w-[100%] mt-2 ">
            Deposit from several banks and withdraw or transfer funds as needed.
          </div>
          <p className="mt-14 text-[1.2rem] font-medium text-gray-800">
            Paytm is a secure way to deposit money from various banks and manage
            your spending, transfers, and withdrawals..
          </p>

          <button
            type="button"
            className="  focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold text-gray-800 rounded-lg text-lg mt-14 text-center inline-flex  items-center justify-items-center  dark:hover:text-blue-700 "
            onClick={()=>{
              signIn()
            }}
          >
            Explorer PayTm
            <svg
              className="rtl:rotate-180 w-5 h-3.5 ms-2 mt-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
          
        </motion.div>


        <motion.div
        initial={{ opacity: 0, x:20, }}
        whileInView={{ opacity: 1, x:0,  }}
        transition={{ duration: 1, ease:"easeInOut"}}
        viewport={{once:true, amount:.2}}
        className="w-[50%] p-1 bg-gray-100 rounded-lg">
          <img src="./fourth.png" alt="" />
        </motion.div>
      </div>

      <div className="footer mt-[13%] mx-2">
      <footer className="flex flex-row flex-wrap items-center justify-center w-full py-6 text-center border-t gap-y-6 gap-x-12 border-slate-200 md:justify-between">
  <div className="block text-slate-800 font-semibold text-sm px-10">
      <Logo/>
  </div>
  <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
    <li>
      <a href="#" className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm">
        About Us
      </a>
    </li>
    <li>
      <a href="#" className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm">
        License
      </a>
    </li>
    <li>
      <a href="#" className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm">
        Contribute
      </a>
    </li>
    <li>
      <a href="#" className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm">
        Contact Us
      </a>
    </li>
  </ul>
</footer> 
      </div>
    </div>
  );
}
