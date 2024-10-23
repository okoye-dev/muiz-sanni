"use client";
import React, { FC, useState } from "react";
import logo from "@/assets/svgs/logo.svg";
import menu from "@/assets/svgs/menu.svg";
import close from "@/assets/svgs/close.svg";
import Image from "next/image";
import ContactMe from "./ContactMe";
import Link from "next/link";
import { cn } from "@/utils";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="px-4">
      <div className="relative flex w-full items-center justify-between gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-3">
        <Link href={"/"} className="flex items-center gap-2 px-3">
          <Image src={logo} alt="logo" width={14} height={14} className="w-3" />
          Sanni Muiz
        </Link>

        <ul className="hidden items-center justify-center gap-6 sm:flex">
          {navLinks.map((link, i) => (
            <li
              key={i}
              className="cursor-pointer duration-300 hover:text-white/80"
            >
              {link.title}
            </li>
          ))}
        </ul>

        {/* Mobile Nav Trigger */}
        <div className="group relative rounded-full bg-black/10 p-1">
          <Image
            src={menu}
            alt="menu"
            width={14}
            height={14}
            className={cn(
              "w-[21px] cursor-pointer sm:hidden",
              isMobileMenuOpen && "hidden",
            )}
            onClick={toggleMobileMenu}
          />
          <Image
            src={close}
            alt="close"
            width={14}
            height={14}
            className={cn(
              "w-4 cursor-pointer sm:hidden",
              !isMobileMenuOpen && "hidden",
            )}
            onClick={toggleMobileMenu}
          />
        </div>

        {/* Mobile Menu */}
        <ul
          className={cn(
            "absolute flex flex-col items-center justify-center gap-6 overflow-hidden duration-300",
            isMobileMenuOpen ? "h-60" : "h-0",
          )}
        >
          {navLinks.map((link, i) => (
            <li
              key={i}
              className="cursor-pointer duration-300 hover:text-white/80"
            >
              {link.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
