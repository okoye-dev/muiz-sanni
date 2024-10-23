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
        "flex w-fit items-center gap-2 rounded-full border border-white/30 px-[18px] py-3 duration-300 hover:bg-white/10",
        className,
      )}
    >
      Contact Me <Image src={arrow} alt="arrow" width={14} height={14} />
    </button>
  );
};

export default ContactMe;
