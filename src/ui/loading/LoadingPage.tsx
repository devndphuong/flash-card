"use client";

import React from "react";

const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-[90vh] flex flex-col sm:flex-row p-3 sm:p-6 gap-4 animate-pulse">
      
      {/* LEFT PANEL (giả lập sidebar) */}
      <div className="w-full sm:w-[30%] space-y-4">
        <div className="h-10 bg-gray-200 rounded-lg w-2/3 mx-auto sm:mx-0"></div>
        <div className="h-10 bg-gray-200 rounded-lg w-full"></div>
        <div className="h-24 bg-gray-200 rounded-xl"></div>
        <div className="h-10 bg-gray-200 rounded-lg w-1/2"></div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-full sm:w-[70%] flex flex-col items-center justify-center">
        
        {/* Title */}
        <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-8"></div>

        {/* Flashcard skeleton */}
        <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] bg-gray-200 rounded-xl flex items-center justify-center shadow-inner">
          
          {/* Spinner */}
          <div className="w-10 h-10 border-4 border-gray-300 border-t-gray-500 rounded-full animate-spin"></div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-8">
          <div className="h-10 w-20 bg-gray-200 rounded-md"></div>
          <div className="h-10 w-28 bg-gray-200 rounded-md"></div>
          <div className="h-10 w-24 bg-gray-200 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;