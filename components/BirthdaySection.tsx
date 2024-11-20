"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import { ConfettiFireworks } from "@/components/fireworks";
import Particles from "./ui/particles";
import BoxReveal from "./ui/box-reveal";

const BirthdaySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const birthdayTextsRef = useRef<HTMLDivElement>(null); // Reference for birthday text container
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Clean up observer when component unmounts
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Trigger animation when section is in view
    if (isInView && birthdayTextsRef.current) {
      gsap.fromTo(
        birthdayTextsRef.current.children,
        {
          opacity: 0, // Start with transparent text
          y: 50, // Start position below
        },
        {
          opacity: 1, // Fade in
          y: 0, // Move to original position
          stagger: 1, // Stagger the animations for smooth sequencing
          duration: 1.5, // Duration of each animation (1 second)
          ease: "power3.out", // Smooth easing
        }
      );

      // Optionally, animate ConfettiFireworks or other elements
      gsap.fromTo(
        ".birthday-div",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1.5,
          delay: 6, // Delay the confetti for a moment
          ease: "power3.out",
        }
      );
    }
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="relative w-screen h-screen flex flex-col justify-around items-start bg-black text-white p-6 snap-start"
    >
      <Particles
        className="absolute inset-0"
        quantity={400}
        ease={100}
        color={"#ffffff"}
        refresh
      />
      <BoxReveal boxColor={"#ffffff"} duration={1}>
        <p
          className="text-8xl font-bold font-oxo text-white mb-4 birthday-text"
          style={{
            textShadow:
              "0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)",
          }}
        >
          Happy Birthday
        </p>
      </BoxReveal>

      <div ref={birthdayTextsRef} className="flex flex-col gap-2">
        {[
          "Sundari!!",
          "Maate!!",
          "Madam!!",
          "Selenophile!!",
          "Versha!! 🌧️",
          "Starfish!! 🤭",
        ].map((text, index) => (
          <p
            key={index}
            className="text-4xl font-rubik font-semibold opacity-0 text-white birthday-text"
            style={{
              textShadow:
                "0 0 10px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.2)",
            }}
          >
            {text}
          </p>
        ))}
      </div>

      <div
        className="mt-8 text-3xl font-tiny font-light birthday-div"
        style={{
          textShadow:
            "0 0 10px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.2)",
        }}
      >
        <ConfettiFireworks />
      </div>
    </section>
  );
};

export default BirthdaySection;
