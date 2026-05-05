"use client";

import React, { useState, useEffect } from "react";
import { FiClock, FiX } from "react-icons/fi";
import { FaWandMagicSparkles } from "react-icons/fa6";

const ComingSoonButton = () => {
  const [open, setOpen] = useState(false);

  // =========================
  // CLOSE ON ESC KEY
  // =========================
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      window.addEventListener("keydown", handleKey);
    }

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <>
      {/* BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="bg-white border border-pink-400 text-pink-500 px-4 py-2 rounded-lg font-medium hover:bg-pink-50 active:scale-[0.98] transition flex items-center gap-2"
      >
        <FaWandMagicSparkles size={18} />
        AI
      </button>

      {/* MODAL */}
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
              Coming Soon
            </h2>
            <p className="text-sm text-gray-500 text-center mb-6">
              This feature is not available yet. We are working on it.
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* CANCEL BUTTON */}
              <button
                onClick={() => setOpen(false)}
                className="w-full border border-gray-300 bg-white text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
              >
                Cancel
              </button>

              {/* PRIMARY BUTTON */}
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

export default ComingSoonButton;
