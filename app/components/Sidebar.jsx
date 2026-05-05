"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "./Logo";

import {
  FiHome,
  FiCheckSquare,
  FiCpu,
  FiCalendar,
  FiSettings,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

/**
 * SIDEBAR COMPONENT (RAFC STYLE)
 * - Desktop: collapsible
 * - Mobile: drawer
 * - Active route highlighting
 */
const Sidebar = ({ mobileOpen, setMobileOpen }) => {
  const pathname = usePathname();

  const [collapsed, setCollapsed] = useState(false);

  const links = [
    { name: "Dashboard", path: "/dashboard", icon: <FiHome /> },
    { name: "Tasks", path: "/dashboard/task", icon: <FiCheckSquare /> },
    { name: "AI", path: "/dashboard/ai", icon: <FiCpu /> },
    { name: "Calendar", path: "/dashboard/calendar", icon: <FiCalendar /> },
    { name: "Settings", path: "/dashboard/settings", icon: <FiSettings /> },
  ];

  // close mobile sidebar on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* OVERLAY (MOBILE ONLY) */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed md:static z-50 h-full bg-white border-r flex flex-col
          transition-all duration-300

          w-72 md:w-auto
          ${collapsed ? "md:w-20" : "md:w-64"}

          ${mobileOpen ? "left-0" : "-left-full md:left-0"}
        `}
      >
        {/* TOP */}
        <div className="flex gap-6 items-center justify-between p-4 border-b">
          {/* LOGO AREA */}
          {!collapsed && (
            <div className="w-40">
              {" "}
              {/* control width */}
              <Logo />
            </div>
          )}

          {/* CLOSE BUTTON (mobile only) */}
          <button
            onClick={() => setMobileOpen(false)}
            className="md:hidden text-xl"
          >
            <FiX />
          </button>

          {/* COLLAPSE BUTTON (desktop only) */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden md:block text-sm text-gray-600"
          >
            {collapsed ? <FiChevronLeft /> : <FiChevronRight />}
          </button>
        </div>

        {/* LINKS */}
        <nav className="flex flex-col gap-2 p-3">
          {links.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link key={link.path} href={link.path}>
                <div
                  className={`
                    flex items-center gap-3 p-3 rounded-lg transition

                    ${
                      isActive
                        ? "bg-gradient-to-r from-orange-400 via-pink-600 to-red-600 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }
                  `}
                >
                  <span className="text-lg">{link.icon}</span>

                  {/* hide text when collapsed */}
                  {!collapsed && (
                    <span className="text-sm font-medium">{link.name}</span>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
