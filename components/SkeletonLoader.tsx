import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="animate-pulse space-y-4 w-full">
      <div className="bg-gray-300 h-4 w-3/4 rounded"></div>
      <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
      <div className="flex space-x-4">
        <div className="bg-gray-300 h-10 w-10 rounded-full"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-gray-300 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-gray-300 rounded col-span-2"></div>
              <div className="h-2 bg-gray-300 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
