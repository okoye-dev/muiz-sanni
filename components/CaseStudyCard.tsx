"use client";
import arrow from "@/assets/svgs/arrow-tr.svg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import SuperscriptHeader from "./SuperscriptHeader";

interface IProps {
  id: number;
  img: StaticImageData;
  name: string;
  units: string[];
  link: string;
}

const CaseStudyCard: FC<IProps> = ({ id, img, name, units, link }) => {
  return (
    <div className="group flex justify-center">
      <div className="flex flex-col gap-5 overflow-y-clip rounded-3xl p-4 xs:w-[80vw] sm:max-w-[40rem] sm:p-6 md:rounded-[2rem] lg:min-w-[37vw] lg:max-w-[40rem] lg:gap-7 lg:rounded-[2.5rem] xl:min-w-[30rem] xl:max-w-[40rem]">
        <div>
          <Image
            placeholder="blur"
            src={img}
            alt={name}
            width={600}
            height={600}
            className="w-full overflow-hidden rounded-2xl sm:rounded-3xl"
          />
        </div>

        <section className="flex gap-3 px-3 md:gap-5">
          <div className="flex flex-col justify-between gap-3">
            <SuperscriptHeader
              className="text-3xl tracking-tighter sm:text-5xl md:text-6xl lg:text-[3.25vw]"
              text={name}
              superscript={id.toString()}
            />

            <div className="flex flex-wrap gap-2 md:gap-3">
              {units.map((unit, i) => (
                <div key={i} className="my-1">
                  <span className="rounded-full bg-white/10 px-3 py-2 text-xs font-extralight tracking-wide sm:text-sm md:text-base lg:px-4 lg:text-lg">
                    {unit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-fit">
            <Link
              href={link}
              className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 duration-300 group-hover:rotate-45"
            >
              <Image
                src={arrow}
                alt="go"
                width={20}
                height={20}
                className="sm:w-5"
              />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CaseStudyCard;