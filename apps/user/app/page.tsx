"use client";
import bank from "./Hdfc.png";
import { Poppins } from "next/font/google";
import { animate, motion } from "framer-motion";
import { PrismaClient } from "@repo/prisma/clinet";
import { useRouter } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"], // Supports Latin characters
  weight: ["400", "100"], // Choose font weights
  style: ["normal", "italic"], // Choose styles
  variable: "--font-poppins", // Optional: Use CSS variable
});

export default function Home() {
  const router = useRouter();
  return (
    <div className={poppins.className}>
      <div className="flex bg-gradient-to-t  from-gray-100 to-blue-100 rounded-b-2xl flex-col">
        <div className="p-3  flex justify-between items-center bg-gradient-to-tr from-blue-50 shadow-sm to-blue-100">
          <div>PayTm</div>
          <div></div>
          <div className="flex gap-4">
            <button
              className="rounded-md bg-blue-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
              type="button"
            >
              Sing In
            </button>

            <button
              className="rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-blue-600 hover:border-blue-800 focus:text-white focus:bg-blue-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Sign Up
            </button>
          </div>
        </div>
        <motion.div
          initial={{
            y: 20,
            filter: "blur(5px)",
          }}
          animate={{
            y: 0,
            filter: "blur(0px",
          }}
          transition={{
            duration: 0.9,
            ease: "linear",
          }}
          className=" flex  items-center flex-col mb-12 "
        >
          <div className="bg-gradient-to-tr from-blue-600 to-white  w-[3.5rem]  h-[4.5rem] border-[3px] border-blue-600 rounded-e-2xl rounded-t-full mt-24 "></div>
          <div
            className={`${poppins.className} mt-5 font-[600] text-[#0578f9]  text-[8vh] w-[90vw] text-center`}
          >
            <p>Experience a smooth and hassle-free</p>
          </div>
          <div
            className={`${poppins.className} -mt-1 font-[600] text-[#0578f9]  text-[8vh] w-[80vw] text-center`}
          >
            <p>way to complete your transactions</p>
          </div>

          <div className="mt-10 text-center w-[60%] font-medium text-wrap text-gray-500 ">
            <p>
              Experience the convenience of a digital wallet that seamlessly
              integrates accounts from multiple banks, ensuring that your
              transactions are not only safe but also secure
            </p>
          </div>

          <div className="pt-10">
            <button className="bg-[#deebfe]  delay-10 px-7 py-2 tracking-wide rounded-lg text-[#1985ff] font-[500] transition delay-150 duration-300 ease-in-out  hover:scale-110 hover:bg-blue-500 hover:text-white">
              Try PayTm
            </button>
          </div>

          <div className="mt-4 text-center  font-medium text-wrap  text-gray-500 text-[15px] ">
            <p>The transfer is free-no gas </p>
          </div>
        </motion.div>

        <div className="p-10">
          <div>
            <p className="text-gray-700">
              Why Us <span className="text-red-700">?</span>
            </p>
            <div className="flex gap-5 w-[100%]">
              <motion.div
                initial={{
                  filter: "",
                  opacity: 0,
                  scale: 0.5,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.6,
                  ease: "circOut",
                }}
                viewport={{
                  once: true,
                }}
                className="flex flex-col w-[25%] bg-gradient-to-tr from-green-100 to-green-50 mt-5  rounded-2xl"
              >
                <div className="p-10">
                  <img src="./first.png" alt="" />
                </div>
                <div className="p-5">
                  <h1 className="font-semibold text-green-600 mb-2">
                    Securuty..
                  </h1>
                  <p>
                    At PayTm, we prioritize the safety of your transactions. Our
                    robust security measures ensure your funds and personal
                    information remain protected at all times.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  filter: "",
                  opacity: 0,
                  scale: 0.5,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.7,
                  ease: "circOut",
                }}
                viewport={{
                  once: true,
                }}
                className="flex flex-col w-[25%]  bg-gradient-to-tr from-blue-100 to-blue-50 mt-5   shadow-sm rounded-2xl"
              >
                <div className="p-10">
                  <img src="./user.png" alt="" />
                </div>
                <div className="p-5">
                  <h1 className="font-semibold text-blue-600 mb-2">
                    Privecy..
                  </h1>
                  <p>
                    At PayTm, we are committed to protecting your personal and
                    financial information. Our strict privacy policies ensure
                    that your data remains secure and confidential at all times.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  filter: "",
                  opacity: 0,
                  scale: 0.5,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.8,
                  ease: "circOut",
                }}
                viewport={{
                  once: true,
                }}
                className="flex flex-col w-[25%]  bg-gradient-to-tr from-green-100 to-green-50 mt-5  rounded-lg shadow-sm"
              >
                <div className="p-10">
                  <img src="./relabily.png" alt="" />
                </div>
                <div className="p-5">
                  <h1 className="font-semibold text-green-600 mb-2">
                    Reliability..
                  </h1>
                  <p>
                    At PayTm, we ensure that your transactions are processed
                    quickly, securely, and without disruption. Our Wallet
                    infrastructure is designed to provide seamless and
                    dependable financial services at all times.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  filter: "",
                  opacity: 0,
                  scale: 0.5,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.9,
                  ease: "circOut",
                }}
                viewport={{
                  once: true,
                }}
                className="flex flex-col w-[25%] bg-gradient-to-tr from-blue-100 to-blue-50 mt-5   shadow-sm rounded-2xl"
              >
                <div className="p-10">
                  <img src="./transparency.png" alt="" />
                </div>
                <div className="p-5">
                  <h1 className="font-semibold text-blue-600 mb-2">
                    Transparency..
                  </h1>
                  <p>
                    At PayTm, we believe in complete transparency, ensuring our
                    customers have full visibility into their transactions,
                    fees, and policies. We are committed to providing clear,
                    honest, and accessible financial services.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{
          y: 100,
          filter: "blur(5px)",
        }}
        whileInView={{
          y: 0,
          filter: "blur(0)",
        }}
        viewport={{
          margin: "-500px",
          once: true,
        }}
        transition={{
          duration: 1,
        }}
        className="flex bg-gradient-to-t  mt-2  from-gray-200 to-purple-200 rounded-2xl flex-col"
      >
        <div className="flex items-center flex-col rounded-b-2xl">
          <div className="pt-20 text-[12px]  text-purple-500  font-semibold">
            <p>FEATURE</p>
          </div>

          <div className="mt-2">
            <div
              className={`${poppins.className} font-[600] text-purple-500  text-[8vh] w-[90vw] text-center`}
            >
              <p>Send it. Transfer It. Back it.</p>
            </div>
            <div
              className={`${poppins.className} font-[600] -mt-2 text-purple-500  text-[8vh] w-[90vw] text-center`}
            >
              <p>Store it. Save It. Secure it.</p>
            </div>
          </div>

          <div className="w-[50%] font-medium  mt-5 text-center text-gray-500">
            <p>
              Unlock the power of seamless transactions with Paytm, your trusted
              digital wallet that effortlessly transfers your money with
              efficiency and security
            </p>
          </div>

          <div className="mt-10 flex gap-4">
            <div className="font-semibold text-sm text-[#2084ff] py-[2px] px-[5px] bg-gray-200 rounded-md">
              Trasnfer
            </div>

            <div className="font-semibold text-sm text-green-500 py-[2px] px-[5px] bg-gray-200 rounded-md">
              Store
            </div>
          </div>
        </div>
        <div className="mt-1 p-20 flex gap-5 ">
          <motion.div
            initial={{
              opacity: 0,
              x: -200,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{
              margin: "-200px",
              once: true,
            }}
            className="bg-gray-50 p-6 rounded-2xl w-[50%] h-[50vh]"
          >
            <div className="bg-gray-100 rounded-lg p-1 w-fit">
              <img src="./lock.png" alt="" width={25} />
            </div>
            <div className="text--500 font-semibold text-green-500 mt-2">
              <p>Transfer across the local banks...</p>
            </div>
            <div className="w-[98%] text-[1rem] text-start font-medium mt-2 text-gray-700">
              <p>
                Easily transfer money between banks using just a phone number,
                eliminating the need to input and verify account numbers
                repeatedly.{" "}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 200,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{
              margin: "-200px",
              once: true,
            }}
            className="bg-gray-50 p-6 rounded-2xl w-[50%] h-[50vh]"
          >
            <div className="bg-gray-100 rounded-lg p-1 w-fit">
              <img src="./trust.png" alt="" width={25} />
            </div>
            <div className="text--500 font-semibold text-blue-500 mt-2">
              <p>Pay money to a vendors with ease...</p>
            </div>
            <div className="w-[98%] text-[1rem] text-start font-medium mt-2 text-gray-700">
              <p>
                Effortlessly make payments to any vendor that accepts
                Paytm—simply enter their number or scan the QR code.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
