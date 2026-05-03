import React from "react";
import { FaTasks } from "react-icons/fa";
import { FaBolt } from "react-icons/fa6";
import { FiUserPlus } from "react-icons/fi";

const HowItWorksCard = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
      <WorksCardDetail
        icon={<FiUserPlus />}
        title="Create Your Account"
        description="Sign up in seconds and set up your workspace to start organizing tasks instantly."
      />

      <WorksCardDetail
        icon={<FaTasks />}
        title="Add Your Tasks"
        description="Input your goals and daily tasks, and let AI understand your workflow and priorities."
      />

      <WorksCardDetail
        icon={<FaBolt />}
        title="Get AI Suggestions"
        description="Receive smart breakdowns, priorities, and next-step recommendations automatically."
      />
    </div>
  );
};

export default HowItWorksCard;

/* =========================
   CARD COMPONENT
========================= */
const WorksCardDetail = ({ icon, title, description }) => {
  return (
    <div className="w-full h-full bg-[#FFE3FF] shadow-lg p-5 sm:p-6 lg:p-8 rounded-xl flex flex-col items-start text-left gap-3 sm:gap-4 hover:scale-[1.03] hover:shadow-xl transition-all duration-300">
      {/* ICON */}
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm text-pink-600 text-xl sm:text-2xl">
        {icon}
      </div>

      {/* TITLE */}
      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
