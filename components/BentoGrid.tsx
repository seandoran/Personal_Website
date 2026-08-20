// components/BentoGrid.tsx
import Link from 'next/link';
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
  href
}: {
  className?: string;
  children: React.ReactNode;
  href?: string; 
}) => {
    const hoverClass = ` 
                        rounded-3xl 
                        p-6 
                        flex 
                        flex-col 
                        justify-between 
                        overflow-hidden 
                        shadow-sm  
                        hover:-translate-y-1 
                        transition-all 
                        duration-300 
                        hover:shadow-md ${className}`;
    const CardClass = `
                        rounded-3xl 
                        p-6 
                        flex 
                        flex-col 
                        justify-between 
                        overflow-hidden 
                        shadow-sm   
                        transition-all 
                        duration-300 
                        hover:shadow-md ${className}`;
    const cardStyle = { 
        backgroundColor: "#9EBB97", 
        color: "#306238" 
    };

    if (href) {
        return (
            <Link 
                href={href}  
                style={cardStyle}  
                className={hoverClass}
            >
                {children}
            </Link>
        );
    } return (
        <div
            style={cardStyle}  
            className={CardClass}
        >
            {children}
        </div>
    );
};
