"use client";

import React, { useState } from "react";

const GradientToggle = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex items-center gap-3">
      {/* Toggle Container */}
      <div
        onClick={() => setIsOn(!isOn)}
        className={`w-14 h-7 flex items-center rounded-full p-[2px] cursor-pointer transition-all duration-300 ${
          isOn
            ? "bg-gradient-to-r from-orange-400 via-pink-600 to-red-600"
            : "bg-gray-300"
        }`}
      >
        {/* Knob */}
        <div
          className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-all duration-300 ${
            isOn ? "translate-x-7" : "translate-x-0"
          }`}
        />
      </div>

      {/* Label */}
      <span className="text-sm text-gray-700">
        {isOn ? "Enabled" : "Disabled"}
      </span>
    </div>
  );
};

export default GradientToggle;
