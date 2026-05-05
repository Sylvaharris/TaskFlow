"use client";

import React, { useEffect, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

const CompletedTasksCard = () => {
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

        // Ensure data is valid array
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
  // FILTER COMPLETED TASKS
  // =========================
  const completed = taskList.filter((task) => task.completed).length;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition w-full">
      {/* ICON + TITLE */}
      <div className="flex items-center gap-2 mb-2">
        <FiCheckCircle className="text-green-500" size={20} />
        <h2 className="text-sm sm:text-base font-semibold text-gray-800">
          Completed Tasks
        </h2>
      </div>

      {/* DESCRIPTION */}
      <p className="text-xs sm:text-sm text-gray-500">
        Tasks you have finished
      </p>

      {/* STATS */}
      <div className="mt-3 text-xl sm:text-2xl font-bold text-gray-900">
        {completed}
      </div>
    </div>
  );
};

export default CompletedTasksCard;
