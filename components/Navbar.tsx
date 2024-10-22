import React, { FC } from "react";
import logo from "@/assets/svgs/logo.svg";
import Image from "next/image";
import ContactMe from "./ContactMe";
import Link from "next/link";

const navLinks = [
  {
    title: "Resume",
    to: "resume",
  },
  {
    title: "Work",
    to: "work",
  },
  {
    title: <ContactMe />,
    to: "resume",
  },
];

const Navbar: FC = () => {
  return (
    <div className="w-full bg-white/10 items-center flex justify-between rounded-full px-4 py-3  gap-3">
      <Link href={"/"} className="flex items-center gap-2 px-3">
        <Image src={logo} alt="logo" width={14} height={14} className="w-3" />{" "}
        Sanni Muiz
      </Link>
      <ul className="flex gap-6 items-center justify-center">
        {navLinks.map((link, i) => (
          <li
            key={i}
            className="cursor-pointer hover:text-white/80 duration-300"
          >
            {link.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
