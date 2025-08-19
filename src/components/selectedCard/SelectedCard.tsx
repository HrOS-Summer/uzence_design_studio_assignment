import React from "react";
import type { MockData } from "../../types/types";

export const SelectedCard: React.FC<{ data: MockData }> = ({ data }) => (
  <div className="rounded-lg shadow bg-white dark:bg-gray-800 dark:border-gray-800 border border-gray-200 p-4 flex flex-col min-w-[220px] transition-colors">
    <div className="text-xl font-bold text-blue-700 dark:text-blue-300 truncate">{data.name}</div>
    <div className="text-sm text-gray-600 dark:text-gray-300">Sector: <span className="font-medium">{data.sector}</span></div>
    <div className="flex justify-between mt-2">
      <span className="text-sm text-gray-700 dark:text-gray-200 font-medium">Market Cap:</span>
      <span className="text-sm text-gray-900 dark:text-gray-100">{data.marketCap}</span>
    </div>
    <div className="flex justify-between mt-1">
      <span className="text-sm text-gray-700 dark:text-gray-200 font-medium">Employees:</span>
      <span className="text-sm text-gray-900 dark:text-gray-100">{data.employees}</span>
    </div>
  </div>
);
