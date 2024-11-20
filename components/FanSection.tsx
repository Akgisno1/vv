"use client";

import React, { useRef, useEffect } from "react";
import MessageForm from "./MessageForm";

const FlowerSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const videoRef = useRef<HTMLVideoElement>(null); // Reference for the video

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          // Change to yellowish white

          // Play the video when section is in view
          if (videoRef.current) {
            videoRef.current.play();
          }
        } else {
          // Pause the video when section is out of view
          if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; // Reset the video to the start
          }
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
      className={`relative w-screen h-screen flex flex-col justify-start items-center transition-colors duration-500 bg-black text-yello-300 p-6`}
    >
      {/* Video element */}
      <video
        ref={videoRef}
        className="w-[100%]  inset-0 top-0 mt-12 "
        width="100%"
        height="auto"
        loop
        muted
        preload="auto"
      >
        <source src="/sun.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="z-10 text-4xl font-bold font-mont text-white">
        Ye Aapke liye
      </p>
      <p className="z-10 mt-10 text-2xl font-bold text-white text-justify font-mont">
        Why Sunflowers you ask? Pata Nai Bas Aisehi. Maybe I think you resemble
        one. 🌻🌻
      </p>
      <div className="z-10 absolute m-8 w-[90%] bottom-0  flex flex-col ">
        <MessageForm />
      </div>
    </section>
  );
};

export default FlowerSection;
