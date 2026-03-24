import React from "react";

interface GradientCircleProps {
    innerColor?: string;
    borderRadius?: number;
}

export const GradientCircle = ({ 
    innerColor = "#62536B", 
    borderRadius = 1814 
}: GradientCircleProps) => {
  return (
    <div 
      className="rounded-full w-screen aspect-square"
      style={{
        borderRadius: borderRadius,
        background: `radial-gradient(50% 50% at 50% 50%, ${innerColor} 0%, transparent 100%)`
      }}
    ></div>
  );
};