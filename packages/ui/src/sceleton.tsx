export default function DashboardSkeleton() {
  return (
    <div className="p-10 space-y-10 animate-pulse">
      {/* Top Summary Cards */}
      <div className="flex gap-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex-1 p-5 bg-white rounded-lg shadow-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded-xl" />
              <div className="h-4 w-24 bg-gray-200 rounded" />
            </div>
            <div className="mt-4 h-10 w-32 bg-gray-200 rounded" />
          </div>
        ))}
      </div>

      {/* Middle Charts */}
      <div className="grid grid-cols-[60%,40%] gap-5">
        <div className="h-[400px] bg-white rounded-2xl shadow-md p-4">
          <div className="h-4 w-1/3 bg-gray-200 mb-4 rounded" />
          <div className="h-full bg-gray-100 rounded" />
        </div>
        <div className="h-[400px] bg-white rounded-2xl shadow-md flex items-center justify-center">
          <div className="w-[200px] h-[200px] bg-gray-200 rounded-full" />
        </div>
      </div>

      {/* Timeline Graph */}
      <div className="bg-white p-6 rounded-lg shadow-md h-[300px]">
        <div className="h-full bg-gray-100 rounded" />
      </div>
    </div>
  );
}
