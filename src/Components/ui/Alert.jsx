import React from "react";

export function Alert({ variant = "default", className = "", children }) {
  let baseStyles =
    "relative w-full rounded-lg border p-4 flex items-start gap-3";
  let variantStyles = "";

  switch (variant) {
    case "success":
      variantStyles = "bg-green-50 border-green-200 text-green-800";
      break;
    case "error":
      variantStyles = "bg-red-50 border-red-200 text-red-800";
      break;
    case "warning":
      variantStyles = "bg-yellow-50 border-yellow-200 text-yellow-800";
      break;
    default:
      variantStyles = "bg-gray-50 border-gray-200 text-gray-800";
  }

  return (
    <div className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </div>
  );
}

export function AlertDescription({ className = "", children }) {
  return (
    <div className={`text-sm leading-relaxed ${className}`}>{children}</div>
  );
}
