export default function(){
    
    return <div>
        <div className="pt-1 ml-2  text-gray-950">
        <p>Hey,ranjit</p>
        <p className="text-gray-600 text-sm">Mondat, 29 march 2025</p>
      </div>

    <div className="w-[100%] flex justify-center items-center">
      <div className="backdrop-blur-md mt-4 bg-[rgba(0,0,0,0.0.05)] border border-white/20 shadow-md transform  w-[99%] rounded-xl px-2 py-1 flex justify-between items-center z-50">
      
        <button  className="px-2 py-2  focus:bg-gray-50 w-[33%] focus:rounded-xl focus:shadow-inner text-gray-500 focus:text-black">Transfer</button>
        <button className="px-2 py-2  focus:bg-gray-50 w-[33%] focus:rounded-xl focus:shadow-inner text-gray-500 focus:text-black">Withdrawl</button>
        <button className="px-2 py-2  focus:bg-gray-50 focus:rounded-xl w-[33%] focus:shadow-inner text-gray-500 focus:text-black">Deposite</button>
        </div>
        
      </div>

    <div className="flex items-center h-[80vh] justify-center">

    
      <div className="p-7 bg-white  shadow-md rounded-2xl w-[70%] ">

      <div className="w-full  ">
    <p  className="mb-2">Enter email</p>
  <div className="relative w-[100%]">
    <input type="email" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-16 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Email Address" />
    <button
      className="absolute right-1 top-1 rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      Verify
    </button>
  </div>
  <p className="text-green-500 mt-3">Ranjit das</p>
<button className="rounded-md mt-3 w-[100%] bg-blue-600 py-2 px-4 border border-transparent text-center text-md text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none " type="button">
  Intate Trasfer
</button>
</div>




      </div>
      </div>
    </div>
}