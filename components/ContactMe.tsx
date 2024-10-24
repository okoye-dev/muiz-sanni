import React, { FC } from "react";
import arrow from "@/assets/svgs/arrow-tr.svg";
import Image from "next/image";
import { cn } from "@/utils";

interface IProps {
  className?: string;
}

const ContactMe: FC<IProps> = ({ className }) => {
  return (
    <button
      type="button"
      className={cn(
        "group relative z-10 flex w-fit items-center gap-2 rounded-full border border-white/30 px-[18px] py-3 duration-500 hover:border-transparent hover:text-white lg:px-5 xl:px-6",
        className,
      )}
    >
      {/* Background Gradient Div */}
      <div className="absolute inset-0 -z-10 h-full w-full rounded-full bg-gradient-to-r from-[#FFA620] to-[#EF39FF] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
      {/* Blurred Aura Div */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-gradient-to-r from-[#FFA620] to-[#EF39FF] opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-80"></div>
      Contact Me
      <Image
        src={arrow}
        alt="arrow"
        width={14}
        height={14}
        className="duration-500 group-hover:rotate-45 xl:w-[18px]"
      />
    </button>
  );
};

export default ContactMe;
