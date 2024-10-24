import React, { FC } from "react";
import Image from "next/image";
import quotes from "@/assets/svgs/quotes.svg";
import { CONFIG } from "@/config";
import ImageAutoCarousel from "./ImageAutoCarousel";

// interface IProps {}

const ScopeOfWork: FC = () => {
  const data = CONFIG.scopeOfWork.pills;

  return (
    <div className="flex flex-col gap-6 tracking-tighter md:py-5 lg:py-16">
      <div className="flex items-center gap-3 px-6 font-light tracking-widest text-white/50 md:px-14 lg:px-20">
        <Image src={quotes} alt="quotes" width={18} height={18} />
        <h2 className="text-sm md:text-base lg:text-xl">SCOPE OF WORK</h2>
      </div>

      <span className="px-6 text-4xl font-medium tracking-[-0.075em] md:px-14 md:text-5xl lg:px-20 lg:pr-[10vw] lg:text-6xl xl:text-7xl">
        Over the years, I&apos;ve{" "}
        <span className="inline text-gray-white/60">navigated through</span>{" "}
        various tech industries, broadening my{" "}
        <span className="inline text-gray-white/60">expertise.</span>
      </span>

      <div className="flex flex-col gap-4 lg:py-4">
        <ImageAutoCarousel text={data} />
        <ImageAutoCarousel text={data} reverse />
      </div>

      <div className="flex w-full px-8 md:px-14 lg:px-20">
        <span className="mt-10 h-[2px] w-full bg-white/10 px-6 lg:mt-16" />
      </div>
    </div>
  );
};

export default ScopeOfWork;
