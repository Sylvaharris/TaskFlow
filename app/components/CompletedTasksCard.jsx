"use client";

import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const CompletedTasksCard = ({ taskList = [] }) => {
  // =========================
  // FILTER COMPLETED TASKS
  // =========================
  const completed = taskList.filter((task) => task.completed).length;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition w-full">
      <div className="flex items-center gap-2 mb-2">
        <FiCheckCircle className="text-green-500" size={20} />
        <h2 className="text-sm sm:text-base font-semibold text-gray-800">
          Completed Tasks
        </h2>
      </div>

      <p className="text-xs sm:text-sm text-gray-500">
        Tasks you have finished
      </p>

      <div className="mt-3 text-xl sm:text-2xl font-bold text-gray-900">
        {completed}
      </div>
    </div>
  );
};

export default CompletedTasksCard;
