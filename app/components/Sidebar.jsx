"use client";

import { usePathname, useRouter } from "next/navigation";
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
  FiLogOut,
} from "react-icons/fi";

/**
 * SIDEBAR COMPONENT (RAFC STYLE)
 * - Desktop: collapsible sidebar
 * - Mobile: drawer with overlay
 * - Active route highlighting
 * - Logout uses gradient border (not filled button)
 */
const Sidebar = ({ mobileOpen, setMobileOpen }) => {
  const pathname = usePathname();
  const router = useRouter();

  const [collapsed, setCollapsed] = useState(false);

  /**
   * NAVIGATION LINKS
   */
  const links = [
    { name: "Dashboard", path: "/dashboard", icon: <FiHome /> },
    { name: "Tasks", path: "/dashboard/task", icon: <FiCheckSquare /> },
    { name: "AI", path: "/dashboard/ai", icon: <FiCpu /> },
    { name: "Calendar", path: "/dashboard/calender", icon: <FiCalendar /> },
    { name: "Settings", path: "/dashboard/profile", icon: <FiSettings /> },
  ];

  /**
   * CLOSE MOBILE SIDEBAR ON ROUTE CHANGE
   */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  /**
   * LOGOUT HANDLER
   */
  const handleLogout = () => {
    router.push("/login-page");
  };

  return (
    <>
      {/* =========================
          MOBILE OVERLAY
      ========================= */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* =========================
          SIDEBAR WRAPPER
      ========================= */}
      <aside
        className={`
          fixed md:static z-50 h-full bg-white border-r flex flex-col
          transition-all duration-300

          w-72 md:w-auto
          ${collapsed ? "md:w-20" : "md:w-64"}

          ${mobileOpen ? "left-0" : "-left-full md:left-0"}
        `}
      >
        {/* =========================
            TOP SECTION
        ========================= */}
        <div className="flex items-center justify-between p-4 border-b">
          {!collapsed && (
            <div className="w-40">
              <Logo />
            </div>
          )}

          {/* MOBILE CLOSE */}
          <button
            onClick={() => setMobileOpen(false)}
            className="md:hidden text-xl"
          >
            <FiX />
          </button>

          {/* COLLAPSE */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden md:block text-gray-600"
          >
            {collapsed ? <FiChevronLeft /> : <FiChevronRight />}
          </button>
        </div>

        {/* =========================
            NAVIGATION LINKS
        ========================= */}
        <nav className="flex flex-col gap-2 p-3 flex-1">
          {links.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link key={link.path} href={link.path}>
                <div
                  className={
                    "flex items-center gap-3 p-3 rounded-lg transition " +
                    (isActive
                      ? "bg-gradient-to-r from-orange-400 via-pink-600 to-red-600 text-white"
                      : "text-gray-600 hover:bg-gray-100")
                  }
                >
                  <span className="text-lg">{link.icon}</span>

                  {!collapsed && (
                    <span className="text-sm font-medium">{link.name}</span>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>

        {/* =========================
    LOGOUT (GRADIENT BORDER + RED CONTENT)
========================= */}
        <div className="p-3 border-t">
          <button
            onClick={handleLogout}
            className="
      w-full p-[2px] rounded-lg
      bg-gradient-to-r from-orange-400 via-pink-600 to-red-600
    "
          >
            {/* INNER BUTTON */}
            <div
              className="
        flex items-center gap-3 p-3
        bg-white rounded-md
        text-red-600
        hover:bg-red-50
        transition
      "
            >
              {/* ICON */}
              <FiLogOut className="text-lg text-red-600" />

              {/* TEXT (hidden when collapsed) */}
              {!collapsed && (
                <span className="text-sm font-medium text-red-600">Logout</span>
              )}
            </div>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
