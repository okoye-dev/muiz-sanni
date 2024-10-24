import React, { FC } from "react";
import ContactMe from "./ContactMe";

const Hero: FC = () => {
  return (
    <div className="flex flex-col gap-6 px-6 pb-10 pt-24 tracking-tighter sm:pt-32 md:px-14 lg:gap-10 lg:px-20 lg:pt-48">
      <h2 className="text-xl lg:text-2xl">Hi, I&apos;m Muiz</h2>

      <span className="text-4xl tracking-[-0.075em] md:text-5xl lg:pr-[12vw] lg:text-6xl xl:text-7xl">
        I&apos;m a product designer with 4 years of{" "}
        <span className="inline text-gray-white/60">experience</span> in
        crafting engaging{" "}
        <span className="inline text-gray-white/60">user experiences</span>{" "}
        across web and mobile platforms, alongside graphic and{" "}
        <span className="inline text-gray-white/60">brand</span> identity
        design.
      </span>

      <ContactMe className="text-xl tracking-normal" />

      <div className="flex w-full px-2">
        <span className="mt-10 h-[2px] w-full bg-white/10 px-6 lg:mt-20" />
      </div>
    </div>
  );
};

export default Hero;
