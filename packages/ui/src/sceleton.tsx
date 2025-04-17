"use client"
import React from 'react'

const DashboardSkeleton = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-4 space-y-6">
        <div className="h-10 w-32 bg-gray-200 rounded-md mx-auto" />
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="h-8 bg-gray-200 rounded-md" />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <div className="h-4 w-40 bg-gray-200 rounded" />
            <div className="h-3 w-32 bg-gray-200 rounded" />
          </div>
          <div className="h-10 w-10 rounded-full bg-gray-200" />
        </div>

        {/* Balance Card */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="h-6 w-32 bg-gray-200 rounded mb-4" />
          <div className="h-8 w-40 bg-gray-200 rounded mb-6" />
          <div className="flex justify-between items-end h-40">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="w-6 bg-gradient-to-t from-blue-200 to-blue-100 rounded-md"
                style={{ height: `${90}%` }}
              />
            ))}
          </div>
        </div>

        {/* Spend Activity */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="h-6 w-40 bg-gray-200 rounded mb-4" />
          <div className="h-48 bg-gray-100 rounded-md" />
        </div>
      </div>
    </div>
  )
}

export default DashboardSkeleton
