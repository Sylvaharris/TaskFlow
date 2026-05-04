"use client";

/**
 * DASHBOARD HOME PAGE
 * - Only renders content
 * - Layout already handles sidebar + topbar
 */
const DashboardPage = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
        Dashboard
      </h1>

      <p className="text-gray-600 text-sm sm:text-base">
        Welcome back 👋 Here is your productivity overview.
      </p>

      {/* SIMPLE GRID CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm">Tasks Completed</div>

        <div className="bg-white p-4 rounded-xl shadow-sm">AI Suggestions</div>

        <div className="bg-white p-4 rounded-xl shadow-sm">
          Productivity Score
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
