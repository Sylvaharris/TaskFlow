"use client";

import { FaBars } from "react-icons/fa";
import DateTracker from "./DateTracker";

/**
 * TOPBAR (RAFC STYLE)
 * - Controls mobile sidebar toggle
 */
const Topbar = ({ setMobileOpen }) => {
  return (
    <div className="w-full h-14 sm:h-16 bg-white border-b flex items-center justify-between px-4">
      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden text-xl text-gray-700"
      >
        <FaBars />
      </button>

      {/* TITLE */}

      <DateTracker />

      {/* RIGHT SIDE PLACEHOLDER */}
      <div className="w-6" />
    </div>
  );
};

export default Topbar;
