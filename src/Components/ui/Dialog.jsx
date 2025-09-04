import React, {  createContext, useContext } from "react";

const DialogContext = createContext();

export function Dialog({ children, open, onOpenChange }) {
  return (
    <DialogContext.Provider value={{ open, onOpenChange }}>
      {children}
    </DialogContext.Provider>
  );
}

export function DialogContent({ children, className = "" }) {
  const { open, onOpenChange } = useContext(DialogContext);
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />

      {/* Content */}
      <div
        className={`relative z-50 w-full max-w-lg bg-white rounded-xl shadow-lg p-6  ${className}`}
      >
        {children}
      </div>
    </div>
  );
}

export function DialogHeader({ children, className = "" }) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function DialogTitle({ children, className = "" }) {
  return (
    <h2 className={`text-xl font-semibold text-gray-800 ${className}`}>
      {children}
    </h2>
  );
}
