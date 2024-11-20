"use client";

import MoonSection from "@/components/MoonSection";
import BirthdaySection from "@/components/BirthdaySection";
import FlowerSection from "@/components/FlowerSection";
import FanSection from "@/components/FanSection";

export default function Home() {
  return (
    <main className="w-screen h-screen snap-y snap-mandatory overflow-x-hidden  overflow-y-scroll scroll-smooth">
      <div className="h-screen  w-screen snap-start">
        <MoonSection />
      </div>
      <div className="h-screen w-screen snap-start">
        <BirthdaySection />
      </div>
      <div className="h-screen w-screen snap-start">
        <FlowerSection />
      </div>
      <div className="h-screen w-screen snap-start">
        <FanSection />
      </div>
    </main>
  );
}
