import React from "react";

const DateTracker = () => {
  // =========================
  // STEP 1: Get today's date
  // =========================
  const today = new Date();

  // =========================
  // STEP 2: Get day name (Tuesday, Monday, etc.)
  // =========================
  const dayName = today.toLocaleDateString("en-US", {
    weekday: "long",
  });

  // =========================
  // STEP 3: Get month name (May, June, etc.)
  // =========================
  const monthName = today.toLocaleDateString("en-US", {
    month: "long",
  });

  // =========================
  // STEP 4: Get day number (1, 2, 3...)
  // =========================
  const dayNumber = today.getDate();

  return (
    <div className="text-gray-700 font-medium">
      {/* FINAL OUTPUT */}
      {dayName}, {monthName} {dayNumber}
    </div>
  );
};

export default DateTracker;
