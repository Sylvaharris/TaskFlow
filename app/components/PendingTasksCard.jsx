"use client";

import React, { useEffect, useState } from "react";
import { FiClock } from "react-icons/fi";

const PendingTasksCard = () => {
  // =========================
  // STATE (TASKS FROM LOCAL STORAGE)
  // =========================
  const [taskList, setTaskList] = useState([]);

  // =========================
  // LOAD TASKS FROM LOCAL STORAGE
  // =========================
  useEffect(() => {
    const stored = localStorage.getItem("tasks");

    if (stored) {
      try {
        const parsed = JSON.parse(stored);

        // Ensure it's always an array
        if (Array.isArray(parsed)) {
          setTaskList(parsed);
        }
      } catch (error) {
        console.error("Error loading tasks:", error);
        setTaskList([]);
      }
    }
  }, []);

  // =========================
  // PENDING TASKS
  // (TASKS NOT COMPLETED)
  // =========================
  const pending = taskList.filter((task) => !task.completed).length;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition w-full">
      {/* ICON + TITLE */}
      <div className="flex items-center gap-2 mb-2">
        <FiClock className="text-orange-500" size={20} />
        <h2 className="text-sm sm:text-base font-semibold text-gray-800">
          Pending Tasks
        </h2>
      </div>

      {/* DESCRIPTION */}
      <p className="text-xs sm:text-sm text-gray-500">
        Tasks still in progress
      </p>

      {/* STATS */}
      <div className="mt-3 text-xl sm:text-2xl font-bold text-gray-900">
        {pending}
      </div>
    </div>
  );
};

export default PendingTasksCard;
