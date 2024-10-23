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
    <div className="flex flex-col gap-4">
      <h2 className="text-sm font-light text-white/60">{timeFrame}</h2>

      <h1 className="inline gap-2 text-balance text-3xl font-light tracking-tighter sm:text-4xl">
        {title}, <span className="font-semibold"> {company}</span>
      </h1>

      <p className="-translate-y-1 font-light text-white/80">{description}</p>

      <Link
        href={link}
        className="group flex w-fit items-center gap-2 rounded-full border border-white/30 px-5 py-3 duration-300 hover:bg-white/10"
      >
        Visit{" "}
        <Image
          src={arrow}
          alt="arrow"
          width={14}
          height={14}
          className="duration-300 group-hover:rotate-45"
        />
      </Link>
    </div>
  );
};

export default ExperienceCard;
