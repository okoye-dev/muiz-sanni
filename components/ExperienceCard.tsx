import Image from "next/image";
import arrow from "@/assets/svgs/arrow-tr.svg";
import React, { FC } from "react";
import Link from "next/link";

interface IProps {
  timeFrame: string;
  title: string;
  company: string;
  description: string;
  link: string;
}

const ExperienceCard: FC<IProps> = ({
  timeFrame,
  title,
  company,
  description,
  link,
}) => {
  return (
    <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between">
      <div className="flex flex-col gap-4 md:w-3/4">
        <h2 className="text-xs font-extralight text-white/60 sm:text-sm">
          {timeFrame}
        </h2>

        <h1 className="lg:text-5xlm inline gap-2 text-balance text-3xl font-light tracking-tighter sm:text-4xl xl:text-6xl">
          {title}, <span className="font-semibold"> {company}</span>
        </h1>

        <p className="-translate-y-1 font-extralight text-white/70 md:text-sm lg:leading-6 xl:w-3/4 xl:text-base">
          {description}
        </p>
      </div>

      {/* Visit Link */}
      <Link
        href={link}
        className="group relative flex w-fit items-center gap-2 rounded-full border border-white/30 px-5 py-3 duration-500 hover:bg-white/10 md:translate-y-10 lg:gap-3 lg:px-6 lg:py-4 lg:text-xl"
      >
        {/* Background Gradient Div */}
        <div className="absolute inset-0 -z-10 h-full w-full rounded-full bg-gradient-to-r from-[#FFA620] to-[#EF39FF] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
        {/* Blurred Aura Div */}
        <div className="absolute inset-0 -z-20 h-full w-full bg-gradient-to-r from-[#FFA620] to-[#EF39FF] opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-80"></div>
        Visit
        <Image
          src={arrow}
          alt="arrow"
          width={14}
          height={14}
          className="duration-500 group-hover:rotate-45 lg:w-5"
        />
      </Link>
    </div>
  );
};

export default ExperienceCard;
