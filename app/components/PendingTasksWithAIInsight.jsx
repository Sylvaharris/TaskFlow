"use client";

import React, { useState } from "react";
import { FiClock, FiX, FiZap } from "react-icons/fi";

/**
 * PENDING TASKS + AI INSIGHT WITH MODAL
 * --------------------------------------
 * - Shows pending tasks list
 * - AI insight card
 * - Clicking button opens modal
 */

const PendingTasksWithAIInsight = ({ taskList = [] }) => {
  // =========================
  // STATE: MODAL OPEN/CLOSE
  // =========================
  const [open, setOpen] = useState(false);

  // =========================
  // FILTER PENDING TASKS
  // =========================
  const pendingTasks = taskList.filter((task) => !task.completed);

  return (
    <>
      {/* =========================
          MAIN LAYOUT
          ========================= */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
        {/* =========================
            LEFT - TASK LIST
            ========================= */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <FiClock className="text-orange-500" size={20} />
            <h2 className="text-sm sm:text-base font-semibold text-gray-800">
              Pending Tasks Overview
            </h2>
          </div>

          <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
            {pendingTasks.length === 0 && (
              <p className="text-sm text-gray-400 text-center py-6">
                No pending tasks
              </p>
            )}

            {pendingTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between bg-gray-50 p-3 rounded-xl border border-gray-100"
              >
                <p className="text-sm text-gray-800 font-medium">
                  {task.title}
                </p>

                <span className="text-xs px-3 py-1 rounded-full bg-orange-50 text-orange-600">
                  {task.priority}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* =========================
            RIGHT - AI CARD
            ========================= */}
        <div className="bg-gradient-to-br from-pink-500 via-orange-500 to-red-500 text-white rounded-2xl p-5 sm:p-6 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FiZap size={20} />
              <h2 className="text-sm sm:text-base font-semibold">AI Insight</h2>
            </div>

            <p className="text-sm text-white/90">
              Get smart suggestions based on your task behavior and priorities.
            </p>

            <div className="mt-4 bg-white/20 rounded-xl p-3 text-sm">
              🔥 You have{" "}
              <span className="font-bold">{pendingTasks.length}</span> pending
              tasks
            </div>
          </div>

          {/* BUTTON THAT OPENS MODAL */}
          <button
            onClick={() => setOpen(true)}
            className="mt-6 bg-white text-pink-600 font-semibold py-2 rounded-lg hover:bg-gray-100 transition active:scale-[0.98]"
          >
            Ask AI for Suggestions
          </button>
        </div>
      </div>

      {/* =========================
          MODAL (AI SUGGESTION)
          ========================= */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* OVERLAY */}
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* MODAL CARD */}
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8 animate-in fade-in zoom-in-95">
            {/* CLOSE ICON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
            >
              <FiX size={20} />
            </button>

            {/* ICON */}
            <div className="flex justify-center mb-5">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-50 text-pink-500">
                <FiClock size={24} />
              </div>
            </div>

            {/* TEXT */}
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 text-center mb-2">
              AI Suggestions
            </h2>

            <p className="text-sm text-gray-500 text-center mb-6">
              Based on your tasks, focus on completing high priority items first
              to improve productivity.
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* CANCEL */}
              <button
                onClick={() => setOpen(false)}
                className="w-full border border-gray-300 bg-white text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
              >
                Cancel
              </button>

              {/* PRIMARY */}
              <button
                onClick={() => setOpen(false)}
                className="w-full bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 text-white py-2 rounded-lg font-medium hover:opacity-90 transition"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PendingTasksWithAIInsight;
