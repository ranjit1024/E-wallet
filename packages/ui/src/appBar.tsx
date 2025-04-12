import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});
export default function () {
  return (
    <div className={`${poppins.className}`}>
        <div className="p-2  flex justify-between">

        
      <div className="flex items-center w-[7vh]">
      <p className="text-[3vh] text-blue-700 font-semibold">Pay<span className="text-teal-600">Tm</span></p>
      </div>
      
     
      
     
      </div>
    </div>
  );
}
