import React from "react";
import clsx from "clsx";

export function Badge({ children, variant = "default", className }) {
  const baseStyles =
    "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors";

  const variants = {
    default: "bg-purple-600 text-white hover:bg-purple-700",
    outline: "border border-purple-500 text-purple-300 hover:bg-purple-500/10",
    success: "bg-green-600 text-white hover:bg-green-700",
    warning: "bg-yellow-500 text-black hover:bg-yellow-600",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <span className={clsx(baseStyles, variants[variant], className)}>
      {children}
    </span>
  );
}
