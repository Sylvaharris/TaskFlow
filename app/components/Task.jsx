"use client";

import React, { useState, useEffect } from "react";
import { FiTrash } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import ComingSoonButton from "./ComingSoonButton";

const Task = () => {
  // =========================
  // STATE
  // =========================
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [taskList, setTaskList] = useState([]);
  const [filter, setFilter] = useState("all");

  // =========================
  // HYDRATION SAFETY (IMPORTANT FIX)
  // =========================
  // We use this to ensure localStorage only runs in the browser
  const [mounted, setMounted] = useState(false);

  // =========================
  // RUN ONLY ON CLIENT MOUNT
  // =========================
  useEffect(() => {
    setMounted(true);
  }, []);

  // =========================
  // LOAD FROM LOCAL STORAGE (AFTER MOUNT)
  // =========================
  useEffect(() => {
    if (!mounted) return;

    const stored = localStorage.getItem("tasks");

    if (stored) {
      try {
        const parsed = JSON.parse(stored);

        if (Array.isArray(parsed)) {
          setTaskList(parsed);
        }
      } catch (error) {
        console.error("Error parsing tasks:", error);
      }
    }
  }, [mounted]);

  // =========================
  // SAVE TO LOCAL STORAGE
  // =========================
  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList, mounted]);

  // =========================
  // ADD TASK
  // =========================
  const handleAddTask = () => {
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      completed: false,
      priority,
    };

    setTaskList((prev) => [newTask, ...prev]);
    setTitle("");
  };

  // =========================
  // DELETE TASK
  // =========================
  const handleDelete = (id) => {
    setTaskList((prev) => prev.filter((task) => task.id !== id));
  };

  // =========================
  // TOGGLE TASK
  // =========================
  const handleToggle = (id) => {
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  // =========================
  // FILTER LOGIC
  // =========================
  const filteredTasks = taskList.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "high") return task.priority === "High";
    return true;
  });

  // =========================
  // PRIORITY STYLES
  // =========================
  const getPriorityColor = (p) => {
    if (p === "High") return "text-red-600 bg-red-50";
    if (p === "Medium") return "text-orange-600 bg-orange-50";
    return "text-gray-600 bg-gray-100";
  };

  // =========================
  // HYDRATION GUARD (IMPORTANT)
  // =========================
  // Prevents mismatch between server and client UI
  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Loading tasks...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-orange-50 px-4 py-6 sm:px-6 md:px-10 lg:px-16">
      <div className="w-full lg:max-w-4xl">
        {/* =========================
            HEADER
            ========================= */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Your <span className="text-pink-600">Tasks</span>
          </h1>
          <p className="text-gray-500 text-sm sm:text-base mt-1">
            Capture, organize, and stay in control of your day.
          </p>
        </div>

        {/* =========================
            INPUT AREA
            ========================= */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 bg-white p-3 sm:p-4 rounded-2xl border border-gray-200 shadow-sm mb-6">
          {/* INPUT */}
          <input
            type="text"
            placeholder="What needs to get done?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddTask();
              }
            }}
            className="flex-1 px-3 py-2 text-sm sm:text-base text-gray-900 placeholder-gray-400 outline-none rounded-lg bg-gray-50 focus:bg-white focus:ring-1 focus:ring-pink-500 transition"
          />

          <div className="flex gap-2 w-full sm:w-auto">
            {/* PRIORITY */}
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="px-3 py-2 text-sm text-gray-900 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-pink-500 outline-none"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>

            {/* AI BUTTON */}
            <ComingSoonButton />

            {/* ADD BUTTON */}
            <button
              onClick={handleAddTask}
              className="flex-1 sm:flex-none bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 active:scale-[0.98] transition flex items-center justify-center gap-2"
            >
              <FiPlus size={18} />
              Add Task
            </button>
          </div>
        </div>

        {/* =========================
            FILTER BUTTONS
            ========================= */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { key: "all", label: "All" },
            { key: "high", label: "High priority" },
            { key: "completed", label: "Completed" },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setFilter(item.key)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition ${
                filter === item.key
                  ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white"
                  : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* =========================
            TASK LIST
            ========================= */}
        <div className="space-y-3">
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggle(task.id)}
                  className="w-4 h-4 accent-green-500 cursor-pointer"
                />

                <p
                  className={`text-sm sm:text-base font-medium transition ${
                    task.completed
                      ? "line-through text-gray-400"
                      : "text-gray-900"
                  }`}
                >
                  {task.title}
                </p>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3">
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${getPriorityColor(
                    task.priority,
                  )}`}
                >
                  {task.priority}
                </span>

                <button
                  onClick={() => handleDelete(task.id)}
                  className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition"
                >
                  <FiTrash size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* =========================
            EMPTY STATE
            ========================= */}
        {filteredTasks.length === 0 && (
          <p className="text-center text-gray-400 mt-10 text-sm">
            No tasks found
          </p>
        )}
      </div>
    </div>
  );
};

export default Task;
