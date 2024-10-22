import React, { FC } from "react";
import arrow from "@/assets/svgs/arrow-tr.svg";
import Image from "next/image";

const ContactMe: FC = () => {
  return (
    <button
      type="button"
      className="rounded-full flex items-center gap-2 hover:bg-white/10 duration-300 border-white/30 border px-4 py-3"
    >
      Contact Me <Image src={arrow} alt="arrow" width={14} height={14} />
    </button>
  );
};

export default ContactMe;
