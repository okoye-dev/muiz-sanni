import React, { FC } from "react";
import logo from "@/assets/svgs/logo.svg";
import Image from "next/image";

interface IProps {}

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
    title: <button type="button">Contact Me</button>,
    to: "resume",
  },
];

const Navbar: FC<IProps> = () => {
  return (
    <div className="w-full bg-black/10 items-center justify-between rounded-full p-4 sm:p-6 gap-3">
      <div className="flex items-center gap-2">
        <Image src={logo} alt="logo" width={14} height={14} /> Sanni Muiz
      </div>
      <ul className="flex gap-3 items-center justify-center">
        {navLinks.map((link, i) => (
          <li key={i}>{link.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
