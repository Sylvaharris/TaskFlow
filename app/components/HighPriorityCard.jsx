"use client";

import React, { useEffect, useState } from "react";
import { FiAlertTriangle } from "react-icons/fi";

const HighPriorityCard = () => {
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
  // HIGH PRIORITY TASKS
  // =========================
  const highPriority = taskList.filter(
    (task) => task.priority === "High",
  ).length;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition w-full">
      {/* ICON + TITLE */}
      <div className="flex items-center gap-2 mb-2">
        <FiAlertTriangle className="text-red-500" size={20} />
        <h2 className="text-sm sm:text-base font-semibold text-gray-800">
          High Priority
        </h2>
      </div>

      {/* DESCRIPTION */}
      <p className="text-xs sm:text-sm text-gray-500">
        Tasks that need urgent attention
      </p>

      {/* STATS */}
      <div className="mt-3 text-xl sm:text-2xl font-bold text-gray-900">
        {highPriority}
      </div>
    </div>
  );
};

export default HighPriorityCard;
