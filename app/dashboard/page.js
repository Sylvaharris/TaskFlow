"use client";

import DateTracker from "../components/DateTracker";
import { FiPlus } from "react-icons/fi";
import { useRouter } from "next/navigation";
import TotalTasksCard from "../components/TotalTasksCard";
import CompletedTasksCard from "../components/CompletedTasksCard";
import HighPriorityCard from "../components/HighPriorityCard";
import PendingTasksCard from "../components/PendingTasksCard";
import PendingTasksWithAIInsight from "../components/PendingTasksWithAIInsight";

/**
 * DASHBOARD HOME PAGE
 * -------------------
 * - Displays user productivity overview
 * - Includes summary cards + AI insights
 * - Responsive layout (mobile → desktop)
 */
const DashboardPage = () => {
  const router = useRouter();

  /**
   * NAVIGATION HANDLER
   * - Routes user to task creation page
   */
  const handleClick = () => {
    router.push("/dashboard/task");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-orange-50 px-4 py-6 sm:px-6 md:px-10 lg:px-16">
      <div className="space-y-6">
        {/* =========================
            HEADER SECTION
        ========================= */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* PAGE TITLE + DESCRIPTION */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              Your <span className="text-pink-600">Dashboard</span>
            </h1>
            <p className="text-gray-500 text-sm sm:text-base mt-1">
              Welcome back, here is your productivity overview.
            </p>
          </div>

          {/* ADD TASK BUTTON (FULLY RESPONSIVE) */}
          <button
            onClick={handleClick}
            className="
              flex items-center justify-center gap-2
              w-full sm:w-auto
              bg-gradient-to-r from-orange-400 via-pink-600 to-red-600
              text-white font-semibold
              py-3 px-4 sm:px-6
              rounded-xl
              shadow-md
              hover:shadow-lg
              active:scale-[0.97]
              transition-all duration-200
            "
          >
            {/* ICON */}
            <FiPlus className="text-lg" />

            {/* LABEL */}
            <span className="text-sm sm:text-base">Add Task</span>
          </button>
        </div>

        {/* =========================
            SUMMARY CARDS GRID
        ========================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <TotalTasksCard />
          <CompletedTasksCard />
          <HighPriorityCard />
          <PendingTasksCard />
        </div>

        {/* =========================
            AI INSIGHT SECTION
        ========================= */}
        <div>
          <PendingTasksWithAIInsight />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
