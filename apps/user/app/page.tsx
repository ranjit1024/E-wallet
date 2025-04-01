import bank from "./Hdfc.png";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"], // Supports Latin characters
  weight: ["400", "100"], // Choose font weights
  style: ["normal", "italic"], // Choose styles
  variable: "--font-poppins", // Optional: Use CSS variable
});

export default function Home() {
  return (
    <div className={poppins.className}>
      <div className="flex bg-gradient-to-t  from-gray-100 to-blue-100 rounded-b-2xl flex-col">
        <div className=" flex  items-center flex-col mb-12 ">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-3 focus:bg-blue-700 font-semibold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#0578f9] dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-500 absolute top-4 right-3"
          >
            Signin
          </button>

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
        </div>
      </div>

      <div className="flex bg-gradient-to-t mt-14  from-gray-200 to-purple-200 rounded-2xl flex-col">
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
            <p>Unlock the power of seamless transactions with Paytm, your trusted digital wallet that effortlessly transfers your money with efficiency and security</p>
          </div>

          <div className="mt-10 flex gap-4">
            <div className="font-semibold text-sm text-[#2084ff] py-[2px] px-[5px] bg-gray-200 rounded-md">Trasnfer</div>

            <div className="font-semibold text-sm text-green-500 py-[2px] px-[5px] bg-gray-200 rounded-md">Store</div>
            
          </div>

        </div>
          <div className="mt-1 p-20 flex gap-5 ">
            <div className="bg-gray-50 p-6 rounded-2xl w-[50%] h-[50vh]">
              <div className="bg-gray-100 rounded-lg p-1 w-fit">
              <img src="./lock.png" alt="" width={25}/>
              </div>
              <div className="text--500 font-semibold text-green-500 mt-2">

              <p>Transfer across the local banks...</p>
              </div>
              <div className="w-[98%] text-[1rem] text-start font-medium mt-2 text-gray-700">
                <p>Easily transfer money between banks using just a phone number, eliminating the need to input and verify account numbers repeatedly. </p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl w-[50%] h-[50vh]">
              <div className="bg-gray-100 rounded-lg p-1 w-fit">
              <img src="./trust.png" alt="" width={25}/>
              </div>
              <div className="text--500 font-semibold text-blue-500 mt-2">

              <p>Pay money to a vendors with ease...</p>
              </div>
              <div className="w-[98%] text-[1rem] text-start font-medium mt-2 text-gray-700">
                <p>Effortlessly make payments to any vendor that accepts Paytm—simply enter their number or scan the QR code.</p>
              </div>
            </div>
          </div> 

      </div>
    </div>
  );
}
