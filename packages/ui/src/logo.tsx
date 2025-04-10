export default function({size}:{
    size:string
}){
    
    return  <div className={`flex items-center w-[${size}vh]`}>
    <img src="/logo.png" alt="" />
    <p className="text-2xl text-slate-700 font-semibold">PayTm</p>
    </div>
}