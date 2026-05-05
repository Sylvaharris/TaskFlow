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
 * - Only renders content
 * - Layout already handles sidebar + topbar
 */
const DashboardPage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard/task");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-orange-50 px-4 py-6 sm:px-6 md:px-10 lg:px-16">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              Your <span className="text-pink-600">Dashboard</span>
            </h1>
            <p className="text-gray-500 text-sm sm:text-base mt-1">
              Welcome back, here is your productivity overview.
            </p>
          </div>

          <button
            onClick={handleClick}
            className="flex items-center gap-2 bg-gradient-to-r from-orange-400 via-pink-600 to-red-600 text-white font-semibold py-3 px-6 rounded-[10px] shadow-md"
          >
            <FiPlus size={18} />
            Add Task
          </button>
        </div>

        {/* SIMPLE GRID CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <TotalTasksCard />

          <CompletedTasksCard />

          <HighPriorityCard />

          <PendingTasksCard />
        </div>
        <div>
          <PendingTasksWithAIInsight />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
