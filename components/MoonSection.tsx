import Meteors from "@/components/ui/meteors";
import Particles from "@/components/ui/particles";

const MoonSection = () => {
  return (
    <section className=" relative w-screen h-screen flex flex-col justify-center items-center bg-black">
      <Meteors number={5} />
      <Particles
        className="absolute inset-0"
        quantity={400}
        ease={100}
        color={"#ffffff"}
        refresh
      />
      <div className="z-10 w-screen h-screen flex flex-col gap-2 justify-center items-center">
        <p className="text-gray-700 font-tiny font-bold">
          Moon on 21 November 2000
        </p>
        <img
          src="/moon.png"
          alt="Moon image"
          className="h-[50%] max-sm:w-[80vw] object-contain"
        />
      </div>
    </section>
  );
};

export default MoonSection;
