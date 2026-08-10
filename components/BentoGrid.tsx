// components/BentoGrid.tsx
import React from "react";

export const BentoGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="
    grid grid-cols-1 
    md:grid-cols-3 
    lg:grid-cols-3 
    auto-rows-[220px] 
    gap-4 
    max-w-7xl 
    mx-auto 
    p-4">
      {children}
    </div>
  );
};

export const BentoCard = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`bg-neutral-900 border border-neutral-800 rounded-3xl p-6 flex flex-col justify-between overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md ${className}`}
    >
      {children}
    </div>
  );
};
