import React from "react";

export function Progress({ value = 0, className = "" ,color}) {
  return (
    <div
      className={`w-full h-3 bg-gray-200 rounded-full overflow-hidden ${className}`}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
