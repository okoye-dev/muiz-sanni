import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import arrow from "@/assets/svgs/arrow-tr.svg";
import { CONFIG } from "@/config";
import blur from "@/assets/svgs/blur.svg";

// interface IProps {}

const Footer: FC = () => {
  const links = CONFIG.footerLinks;

  return (
    <div className="relative flex w-fit flex-col gap-10 px-6 pb-4 pt-20 md:px-20 md:pt-32 lg:px-32 lg:pb-10">
      {/* Blur Bg */}
      <span className="absolute left-0 top-[5vw] flex w-full justify-center overflow-hidden duration-300 md:top-0 lg:top-[3vw]">
        <Image
          src={blur}
          alt=""
          height={800}
          width={800}
          className="max-w-[40rem] animate-spin-slow duration-1000"
        />
      </span>

      <div className="z-10 flex w-fit flex-col justify-center gap-10 md:flex-row md:items-center md:gap-0">
        <h1 className="w-fit text-[15vw] font-medium leading-[15vw] tracking-tight md:text-[9vw] md:leading-[9vw]">
          Let&apos;s Collaborate
        </h1>

        <Link
          href="/"
          className="group relative z-10 flex h-40 w-40 items-center justify-center rounded-full border-2 border-white/30 duration-500 hover:border-transparent hover:bg-white/5 md:mr-[5vw] md:h-48 md:min-w-48 lg:h-60 lg:min-w-60 xl:h-72 xl:min-w-72"
        >
          {/* Background Gradient Div */}
          <div className="absolute inset-0 -z-10 h-full w-full rounded-full bg-gradient-to-r from-[#FFA620] to-[#EF39FF] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
          {/* Blurred Aura Div */}
          <div className="absolute inset-0 -z-20 h-full w-full rounded-full bg-gradient-to-r from-[#FFA620] to-[#EF39FF] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-80"></div>

          <Image
            src={arrow}
            alt="go"
            width={50}
            height={50}
            className="duration-500 group-hover:rotate-45 sm:w-14 lg:w-16"
          />
        </Link>
      </div>

      <div className="z-10 flex justify-between gap-3 sm:justify-normal sm:gap-5">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.link}
            className="flex w-fit items-center justify-center gap-2 rounded-full bg-white/5 p-4 duration-300 hover:bg-white/10 lg:p-6"
          >
            <Image
              src={link.img}
              alt={link.name}
              width={25}
              height={25}
              className="lg:w-10"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
