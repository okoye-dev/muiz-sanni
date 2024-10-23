import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import arrow from "@/assets/svgs/arrow-tr.svg";
import { CONFIG } from "@/config";

// interface IProps {}

const Footer: FC = () => {
  const links = CONFIG.footerLinks;

  return (
    <div className="flex w-fit flex-col gap-10 px-6 pb-4 pt-20">
      <h1 className="text-[15vw] font-medium leading-[15vw] tracking-tight">
        Let&apos;s Collaborate
      </h1>

      <div className="flex w-fit items-center justify-center">
        <Link
          href={"/"}
          className="flex h-40 w-40 items-center justify-center rounded-full border-2 border-white/30 duration-300 hover:rotate-45 hover:bg-white/5"
        >
          <Image
            src={arrow}
            alt="go"
            width={50}
            height={50}
            className="sm:w-14"
          />
        </Link>
      </div>

      <div className="flex justify-between gap-3">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.link}
            className="flex w-fit items-center justify-center gap-2 rounded-full bg-white/5 p-4 duration-300 hover:bg-white/10"
          >
            <Image src={link.img} alt={link.name} width={25} height={25} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
