import React, { FC } from "react";
import arrow from "@/assets/svgs/arrow-tr.svg";
import Image from "next/image";
import { cn } from "@/utils";

interface IProps {
  className?: string;
  colored?: boolean; // Add the boolean prop 'colored'
}

const ContactMe: FC<IProps> = ({ className, colored = false }) => {
  return (
    <button
      type="button"
      className={cn(
        "group flex w-fit items-center gap-2 rounded-full border-white/30 px-[18px] py-3 duration-300 hover:bg-white/10",
        className,
        colored
          ? "gap-3 bg-gradient-to-r from-[#FFA620] to-[#EF39FF] px-8 py-5 text-white shadow-[0_0_15px_3px_rgba(255,166,32,0.5),0_0_30px_20px_rgba(239,57,255,0.2)]"
          : "border hover:bg-white/10",
      )}
    >
      Contact Me{" "}
      <Image
        src={arrow}
        alt="arrow"
        width={14}
        height={14}
        className={cn("duration-300 group-hover:rotate-45", colored && "w-5")}
      />
    </button>
  );
};

export default ContactMe;
