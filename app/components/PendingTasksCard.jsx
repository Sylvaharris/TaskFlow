"use client";

import React from "react";
import { FiClock } from "react-icons/fi";

const PendingTasksCard = ({ taskList = [] }) => {
  // =========================
  // PENDING TASKS
  // (NOT COMPLETED TASKS)
  // =========================
  const pending = taskList.filter((task) => !task.completed).length;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition w-full">
      <div className="flex items-center gap-2 mb-2">
        <FiClock className="text-orange-500" size={20} />
        <h2 className="text-sm sm:text-base font-semibold text-gray-800">
          Pending Tasks
        </h2>
      </div>

      <p className="text-xs sm:text-sm text-gray-500">
        Tasks still in progress
      </p>

      <div className="mt-3 text-xl sm:text-2xl font-bold text-gray-900">
        {pending}
      </div>
    </div>
  );
};

export default PendingTasksCard;
