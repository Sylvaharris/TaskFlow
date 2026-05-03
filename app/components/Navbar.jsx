"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import { BiArrowToRight } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["Features", "How it works", "Pricing", "About"];

  const handleClick = () => {
    router.push("/signup-page");
    setMenuOpen(false);
  };

  return (
    <div className="w-full px-3 sm:px-4">
      {/* NAVBAR */}
      <div className="relative flex items-center justify-between bg-white/70 backdrop-blur-md border border-white/40 rounded-[12px] mx-auto max-w-6xl py-3 sm:py-4 px-4 sm:px-6 shadow-sm">
        {/* LOGO */}
        <div className="scale-90 sm:scale-100 origin-left">
          <Logo />
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <span
              key={link}
              className="cursor-pointer text-[16px] text-gray-600 hover:text-[#FF0095] transition font-medium"
            >
              {link}
            </span>
          ))}
        </div>

        {/* DESKTOP BUTTON */}
        <button
          onClick={handleClick}
          className="hidden md:flex items-center gap-2 bg-gradient-to-r from-orange-400 via-pink-600 to-red-600 text-white font-semibold py-3 px-6 rounded-[10px] shadow-md hover:shadow-xl hover:scale-[1.05] transition-all duration-300"
        >
          Signup Now
          <BiArrowToRight />
        </button>

        {/* HAMBURGER MENU */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-gray-800"
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>

        {/* MOBILE MENU */}
        <div
          className={
            menuOpen
              ? "absolute top-full left-0 w-full bg-white flex flex-col items-center gap-5 py-5 shadow-xl border-t border-gray-200 transition-all duration-300 ease-in-out opacity-100 translate-y-0 visible md:hidden"
              : "absolute top-full left-0 w-full bg-white flex flex-col items-center gap-5 py-5 shadow-xl border-t border-gray-200 transition-all duration-300 ease-in-out opacity-0 -translate-y-5 invisible md:hidden"
          }
        >
          {/* LINKS */}
          {links.map((link) => (
            <span
              key={link}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 text-base hover:text-[#FF0095] cursor-pointer"
            >
              {link}
            </span>
          ))}

          {/* BUTTON */}
          <button
            onClick={handleClick}
            className="flex items-center gap-2 bg-gradient-to-r from-orange-400 via-pink-600 to-red-600 text-white font-semibold py-3 px-6 rounded-[10px] shadow-md"
          >
            Signup Now
            <BiArrowToRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
