import React from "react";

export const Loader: React.FC = () => (
  <div className="flex flex-col items-center justify-center w-full py-8" role="status">
    <svg
      className="animate-spin h-10 w-10 text-blue-600 dark:text-blue-400 mb-3"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12" cy="12" r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
    <span className="text-gray-600 dark:text-gray-300 text-base font-medium">Loading table...</span>
  </div>
);
