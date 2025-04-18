import dynamic from "next/dynamic";

const Dynamictransfer = dynamic(()=> import('./transfer'), {
    loading : () => <div>
          <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-6 animate-pulse">
      <div className="space-y-2">
        <div className="h-4 w-32 bg-gray-300 rounded" /> {/* Label placeholder */}
        <div className="h-10 bg-gray-200 rounded" />     {/* Input placeholder */}
      </div>
      <div className="space-y-2">
        <div className="h-4 w-32 bg-gray-300 rounded" /> {/* Label placeholder */}
        <div className="h-10 bg-gray-200 rounded" />     {/* Input placeholder */}
      </div>
      <div className="h-10 bg-blue-300 rounded" />        {/* Button placeholder */}
    </div>
    </div>,
    
})

export default function Home(){
    return <Dynamictransfer></Dynamictransfer>
}