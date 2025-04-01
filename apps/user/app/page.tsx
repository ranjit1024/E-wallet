import bank from "./Hdfc.png"
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'], // Supports Latin characters
  weight: ['400', '100'], // Choose font weights
  style: ['normal', 'italic'], // Choose styles
  variable: '--font-poppins' // Optional: Use CSS variable
});

export default function Home() {
  return (
    <div className={poppins.className}>

      <div className="flex bg-gradient-to-t  from-gray-100 to-blue-50 rounded-b-2xl flex-col">

      <div className=" flex  items-center flex-col mb-12 ">
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-3 focus:bg-blue-700 font-semibold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#0578f9] dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-500 absolute top-4 right-3">Signin</button>

        <div className="bg-gradient-to-tr from-blue-600 to-white  w-[3.5rem]  h-[4.5rem] border-[3px] border-blue-600 rounded-e-2xl rounded-t-full mt-24 "></div>
        <div className={`${poppins.className} mt-5 font-[600] text-[#0578f9]  text-[8vh] w-[90vw] text-center`}>
          <p>Experience a smooth and hassle-free</p>
        </div>
        <div className={`${poppins.className} -mt-1 font-[600] text-[#0578f9]  text-[8vh] w-[80vw] text-center`}>
          <p>way to complete your transactions</p>
        </div>

        <div className="mt-10 text-center w-[60%] font-medium text-wrap text-gray-500 ">
          <p>Experience the convenience of a digital wallet that seamlessly integrates accounts from multiple banks, ensuring that your transactions are not only safe but also secure
          </p>
        </div>

        <div className="pt-10">
          <button className="bg-[#deebfe]  delay-10 px-7 py-2 tracking-wide rounded-lg text-[#1985ff] font-[500] transition delay-150 duration-300 ease-in-out  hover:scale-110 hover:bg-blue-500 hover:text-white">Try PayTm</button>
        </div>

        <div className="mt-2 text-center  font-medium text-wrap  text-gray-500 text-[15px] ">
          <p>
          The transfer is free-no gas </p>
        </div>
      </div>

      </div>

      <div>
        fsdf
      </div>

     
    </div>
  );
}
