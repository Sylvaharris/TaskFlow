"use client";

import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

const CalendarView = () => {
  // =========================
  // STATE MANAGEMENT
  // =========================
  const [currentDate, setCurrentDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);

  // Modal state
  const [selectedDayTasks, setSelectedDayTasks] = useState([]);
  const [selectedDateLabel, setSelectedDateLabel] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // =========================
  // DATE CALCULATIONS
  // =========================
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // First day index (0 = Sunday)
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  // Total days in current month
  const totalDays = new Date(year, month + 1, 0).getDate();

  // =========================
  // LOAD TASKS FROM LOCAL STORAGE
  // =========================
  useEffect(() => {
    const stored = localStorage.getItem("tasks");

    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) setTasks(parsed);
      } catch (err) {
        console.error("Failed to parse tasks:", err);
      }
    }
  }, []);

  // =========================
  // MONTH NAVIGATION
  // =========================
  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // =========================
  // FORMAT CURRENT MONTH
  // =========================
  const monthName = currentDate.toLocaleString("default", {
    month: "long",
  });

  // =========================
  // GENERATE CALENDAR GRID
  // =========================
  const days = [];

  // Empty slots before first day
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }

  // Actual days
  for (let d = 1; d <= totalDays; d++) {
    days.push(d);
  }

  // =========================
  // FILTER TASKS PER DAY
  // =========================
  const getTasksForDay = (day) => {
    if (!day) return [];

    const formattedDate = `${year}-${String(month + 1).padStart(
      2,
      "0",
    )}-${String(day).padStart(2, "0")}`;

    return tasks.filter((task) => task.deadline === formattedDate);
  };

  // =========================
  // OPEN MODAL (DAY DETAILS)
  // =========================
  const openModal = (day, dayTasks) => {
    const date = new Date(year, month, day);

    setSelectedDayTasks(dayTasks);
    setSelectedDateLabel(
      date.toLocaleDateString("default", {
        weekday: "long",
        month: "long",
        day: "numeric",
      }),
    );
    setIsModalOpen(true);
  };

  // =========================
  // PRIORITY STYLING
  // =========================
  const getPriorityStyle = (priority) => {
    switch (priority?.toLowerCase()) {
      case "high":
        return "bg-red-100 text-red-600";
      case "medium":
        return "bg-orange-100 text-orange-600";
      case "low":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-500";
    }
  };

  return (
    <>
      {/* =========================
          MAIN CALENDAR CONTAINER
      ========================= */}
      <div className="w-full bg-gradient-to-br from-white via-pink-50 to-orange-50 p-3 sm:p-6 rounded-2xl border border-pink-200">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Calendar
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Plan your weeks with smart scheduling.
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="flex items-center justify-between sm:justify-center gap-3 bg-white border rounded-xl px-3 py-2 shadow-sm">
            <button
              onClick={handlePrevMonth}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <FiChevronLeft />
            </button>

            <span className="text-xs sm:text-sm font-medium text-gray-800">
              {monthName} {year}
            </span>

            <button
              onClick={handleNextMonth}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>

        {/* WEEK DAYS */}
        <div className="grid grid-cols-7 text-[10px] sm:text-sm font-medium text-gray-500 mb-2 sm:mb-3">
          {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
            <div key={day} className="text-center">
              {day}
            </div>
          ))}
        </div>

        {/* CALENDAR GRID */}
        <div className="grid grid-cols-7 gap-1 sm:gap-3">
          {days.map((day, index) => {
            const dayTasks = getTasksForDay(day);

            return (
              <div
                key={index}
                className="min-h-[80px] sm:min-h-[120px] p-1.5 sm:p-2 rounded-lg sm:rounded-xl border border-gray-200 bg-white flex flex-col gap-1 hover:shadow-md transition"
              >
                {/* DAY NUMBER */}
                {day && (
                  <span className="text-[10px] sm:text-xs font-semibold text-gray-700">
                    {day}
                  </span>
                )}

                {/* TASK PREVIEW */}
                <div className="flex flex-col gap-1">
                  {dayTasks.slice(0, 2).map((task) => (
                    <div
                      key={task.id}
                      className="flex items-center justify-between gap-1 text-[9px] sm:text-xs px-1.5 sm:px-2 py-1 rounded-md bg-gradient-to-r from-orange-100 to-pink-100 text-gray-700"
                    >
                      <span className="truncate">{task.title}</span>

                      <span
                        className={`px-1 py-0.5 rounded text-[8px] sm:text-[10px] font-medium ${getPriorityStyle(
                          task.priority,
                        )}`}
                      >
                        {task.priority || "low"}
                      </span>
                    </div>
                  ))}

                  {/* MORE BUTTON */}
                  {dayTasks.length > 2 && (
                    <button
                      onClick={() => openModal(day, dayTasks)}
                      className="text-[9px] sm:text-xs text-pink-500 hover:underline text-left"
                    >
                      +{dayTasks.length - 2} more
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================
          MODAL (RESPONSIVE)
      ========================= */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-end sm:items-center justify-center"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="
              w-full 
              sm:max-w-md 
              bg-white 
              rounded-t-2xl sm:rounded-2xl 
              shadow-2xl 
              p-5 
              relative 
              animate-in fade-in slide-in-from-bottom sm:zoom-in
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
            >
              <FiX size={18} />
            </button>

            {/* TITLE */}
            <h3 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-1">
              Tasks
            </h3>
            <p className="text-xs text-gray-500 mb-4">{selectedDateLabel}</p>

            {/* TASK LIST */}
            <div className="max-h-[60vh] sm:max-h-[320px] overflow-y-auto flex flex-col gap-3">
              {selectedDayTasks.map((task) => (
                <div
                  key={task.id}
                  className="p-3 rounded-xl border bg-gradient-to-r from-orange-50 to-pink-50 flex justify-between items-center"
                >
                  <span className="text-sm text-gray-700">{task.title}</span>

                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${getPriorityStyle(
                      task.priority,
                    )}`}
                  >
                    {task.priority || "low"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CalendarView;
