// src/components/ui/button.jsx
import React from "react";
import clsx from "clsx";

export function Button({
  children,
  variant = "default",
  size = "md",
  className,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    default:
      "bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500",
    ghost:
      "bg-transparent text-white hover:bg-white/10 focus:ring-white/30",
  };

  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    icon: "p-2",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
