import React from "react";

export function Tabs({ value, onValueChange, children }) {
  return (
    <div className="tabs w-[65%]">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { activeTab: value, setActiveTab: onValueChange })
      )}
    </div>
  );
}

export function TabsList({ children }) {
  return <div className="flex flex-col items-center justify-around md:flex-row gap-4 md:w-[100%] ">{children}</div>;
}

export function TabsTrigger({ value, activeTab, setActiveTab, children }) {
  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`px-4 py-2 rounded-lg md:w-[20%] w-full ${
        activeTab === value ? "bg-purple-500 text-white" : "bg-gray-200 text-black"
      }`}
    >
      {children}
    </button>
  );
}
