"use client";
import React, { FC, useState, useEffect, useRef } from "react";
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
];

const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLUListElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={navRef} className="absolute w-full px-4">
      {/* Navbar */}
      <div
        className={cn(
          "items-between relative flex w-full flex-col justify-center gap-3 overflow-hidden border border-white/10 bg-white/10 transition-all duration-300 sm:flex-row sm:justify-between sm:rounded-full sm:px-4 sm:py-3",
          isMobileMenuOpen ? "rounded-[28px]" : "rounded-[50px]",
        )}
        style={{
          transition: "border-radius 0.6s ease",
        }}
      >
        <Link
          href={"/"}
          className="flex w-fit translate-y-[6px] items-center gap-2 px-7 py-3 text-lg tracking-tighter sm:translate-y-0"
        >
          <Image src={logo} alt="logo" width={10} height={10} className="w-2" />
          Sanni Muiz
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center justify-center gap-6 sm:flex">
          {navLinks.map((link, i) => (
            <li
              key={i}
              className="cursor-pointer duration-300 hover:text-white/80"
            >
              {link.title}
            </li>
          ))}
          <ContactMe />
        </ul>

        {/* Mobile Menu Trigger */}
        <div
          className={cn(
            "group absolute right-5 top-[18px] flex w-full justify-end rounded-full p-1 duration-300 sm:hidden",
          )}
        >
          <Image
            src={menu}
            alt="menu"
            width={14}
            height={14}
            className={cn("w-5 cursor-pointer", isMobileMenuOpen && "hidden")}
            onClick={toggleMobileMenu}
          />
          <Image
            src={close}
            alt="close"
            width={12}
            height={12}
            className={cn("w-4 cursor-pointer", !isMobileMenuOpen && "hidden")}
            onClick={toggleMobileMenu}
          />
        </div>

        {/* Mobile Menu */}
        <ul
          ref={mobileMenuRef}
          className={cn(
            "relative flex flex-col items-center justify-center gap-8 overflow-hidden text-2xl font-light backdrop-blur-[30px] transition-all duration-300 sm:hidden",
            isMobileMenuOpen ? "h-[17rem] opacity-100" : "h-0 opacity-0",
          )}
        >
          <span className="absolute top-0 h-[2px] w-[90%] bg-white/10" />

          {navLinks.map((link, i) => (
            <li
              key={i}
              className="cursor-pointer duration-300 hover:text-white/80"
            >
              {link.title}
            </li>
          ))}

          <ContactMe colored />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
