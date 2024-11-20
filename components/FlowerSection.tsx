"use client";

import React, { useRef, useEffect, useState } from "react";
import { Sunflowers } from "./fallingSunflower";

const FlowerSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pTextRef = useRef<HTMLParagraphElement>(null); // Reference for the <p> tag
  const [bgColor, setBgColor] = useState("bg-black");

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          setBgColor("bg-yellow-200"); // Change to yellowish white

          // Trigger the typing animation when section is in view
          if (pTextRef.current) {
            const text =
              "Have a wonderful day and a Great Year Ahead! Jaldi se Party do! And of course keep smiling as always !  💐💐💐💐💐💐💐";

            // Clear the content initially
            pTextRef.current.innerHTML = "";

            let currentIndex = 0;

            // Typing animation function
            const typeText = () => {
              if (currentIndex < text.length) {
                pTextRef.current!.innerHTML += text.charAt(currentIndex);
                currentIndex++;
                setTimeout(typeText, 100); // Adjust speed here
              }
            };

            // Start typing once the section is in view
            typeText();
          }
        } else {
          setBgColor("bg-black");
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative w-screen h-screen flex flex-col justify-start items-center transition-colors duration-500 ${bgColor}`}
    >
      <Sunflowers number={15} imageUrl="/flower.png" />
      <img
        src="/vv.jpeg"
        alt="scene image"
        className="absolute rounded-full p-12 z-10 w-[80%] top-12 object-contain"
      />
      <img
        src="/frame.png"
        alt="scene image"
        className="absolute z-20 w-[80%] top-10 object-contain"
      />
      <p
        ref={pTextRef}
        className="text-3xl font-rubik font-black text-justify text-amber-700 mx-4 mt-[50vh] dark:text-white"
      >
        {/* Text will be typed dynamically */}
      </p>
      <img
        src="/scene.png"
        alt="scene image"
        className="absolute z-20 w-full bottom-0 object-contain"
      />
    </section>
  );
};

export default FlowerSection;
