export default function({size}:{
    size:string
}){
    
    return  <div className={`flex items-center gap-1 w-[${size}] `}>
    <img src="/logo.png" height={"40vh"} width={"40vh"} alt="" />
    <p className="text-2xl text-slate-700 font-semibold">PayTm</p>
    </div>
}