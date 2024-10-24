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
        <h2 className="text-sm font-extralight text-white/60">{timeFrame}</h2>

        <h1 className="inline gap-2 text-balance text-3xl font-light tracking-tighter sm:text-4xl lg:text-5xl">
          {title}, <span className="font-semibold"> {company}</span>
        </h1>

        <p className="-translate-y-1 font-extralight text-white/70 md:text-sm lg:leading-6 xl:w-3/4">
          {description}
        </p>
      </div>

      {/* Visit Link */}
      <Link
        href={link}
        className="group flex w-fit items-center gap-2 rounded-full border border-white/30 px-5 py-3 duration-300 hover:bg-white/10 md:translate-y-10 lg:gap-3 lg:px-6 lg:py-4 lg:text-xl"
      >
        Visit
        <Image
          src={arrow}
          alt="arrow"
          width={14}
          height={14}
          className="group-hover:rotate-4 duration-300 lg:w-5"
        />
      </Link>
    </div>
  );
};

export default ExperienceCard;
