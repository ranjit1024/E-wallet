import React from 'react';

export default function TransactionSkeleton() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="h-5 w-40 bg-gray-200 animate-pulse rounded mb-2" />
          <div className="h-3 w-60 bg-gray-100 animate-pulse rounded" />
        </div>
        <div className="flex gap-4 items-center">
          <div className="h-10 w-64 bg-gray-100 rounded-lg animate-pulse" />
          <div className="h-10 w-28 bg-gray-300 rounded-lg animate-pulse" />
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Table Headers */}
        <div className="grid grid-cols-5 gap-4 p-4 bg-gray-100 font-semibold text-sm text-gray-600">
          <div>Transaction</div>
          <div>Amount</div>
          <div>Date</div>
          <div>Status</div>
          <div>Account</div>
        </div>

        {/* Skeleton Row */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="grid grid-cols-5 gap-4 p-4 border-t border-gray-100 animate-pulse"
          >
            <div className="h-4 w-24 bg-gray-200 rounded" />
            <div className="h-4 w-20 bg-gray-200 rounded" />
            <div className="h-4 w-28 bg-gray-200 rounded" />
            <div className="h-6 w-16 bg-yellow-200 rounded-full" />
            <div>
              <div className="h-4 w-20 bg-gray-200 rounded mb-1" />
              <div className="h-3 w-16 bg-gray-100 rounded" />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Skeleton */}
      <div className="flex justify-between mt-6">
        <div className="h-10 w-24 bg-gray-200 rounded-lg animate-pulse" />
        <div className="flex items-center gap-2">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="h-8 w-8 bg-gray-100 rounded-full animate-pulse"
            />
          ))}
          <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
        </div>
        <div className="h-10 w-24 bg-gray-200 rounded-lg animate-pulse" />
      </div>
    </div>
  );
}
