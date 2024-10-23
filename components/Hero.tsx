import React, { FC } from "react";
import ContactMe from "./ContactMe";

const Hero: FC = () => {
  return (
    <div className="flex flex-col gap-6 px-6 pb-10 pt-24 tracking-tighter">
      <h2 className="text-xl">Hi, I&apos;m Muiz</h2>

      <span className="text-4xl tracking-[-0.075em]">
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
        <span className="mt-10 h-[2px] w-full bg-white/10 px-6" />
      </div>
    </div>
  );
};

export default Hero;
