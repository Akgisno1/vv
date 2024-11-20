"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SunflowersProps {
  number?: number; // Number of sunflowers
  imageUrl: string; // URL for sunflower image
}

export const Sunflowers = ({ number = 20, imageUrl }: SunflowersProps) => {
  const [sunflowerStyles, setSunflowerStyles] = useState<
    Array<React.CSSProperties>
  >([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: -100, // Start off-screen
      left: Math.floor(Math.random() * window.innerWidth) + "px", // Random horizontal position
      animationDelay: Math.random() * 10 + "s", // Random delay before the animation starts
      animationDuration: "10s", // Fixed duration for all sunflowers
      transform: `rotate(${Math.random() * 360}deg)`, // Random rotation
    }));
    setSunflowerStyles(styles);
  }, [number]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sunflowerStyles.map((style, idx) => (
        <div
          key={idx}
          className={cn(
            "absolute w-40 h-40 animate-sunflower pointer-events-none"
          )}
          style={{
            ...style, // Use the calculated style properties
          }}
        >
          <img
            src={imageUrl}
            alt="Sunflower"
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};
