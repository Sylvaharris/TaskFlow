import React from "react";
import { FaHourglassHalf, FaTasks, FaBullseye } from "react-icons/fa";
import { MdDesignServices, MdPsychology } from "react-icons/md";
import { SiOpenai } from "react-icons/si";

const FeaturesCard = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
      <FeatureCardDetail
        icon={<MdPsychology />}
        title="AI Task Suggestions"
        description="Smart recommendations based on your habits, energy, and goals — never start from a blank list again."
      />

      <FeatureCardDetail
        icon={<SiOpenai />}
        title="Smart Prioritization"
        description="Our AI ranks tasks by impact and urgency, so you always know what to do next."
      />

      <FeatureCardDetail
        icon={<FaBullseye />}
        title="Goal Breakdown"
        description="Turn ambitious goals into clear, actionable steps with one click."
      />

      <FeatureCardDetail
        icon={<FaTasks />}
        title="Productivity Insights"
        description="Personalized analytics reveal when you focus best and what slows you down."
      />

      <FeatureCardDetail
        icon={<FaHourglassHalf />}
        title="Auto Deadlines"
        description="AI suggests realistic deadlines based on complexity and your calendar."
      />

      <FeatureCardDetail
        icon={<MdDesignServices />}
        title="Private by Design"
        description="End-to-end encryption. Your tasks and goals stay yours — always."
      />
    </div>
  );
};

export default FeaturesCard;

/* =========================
   CARD COMPONENT
========================= */
const FeatureCardDetail = ({ icon, title, description }) => {
  return (
    <div className="w-full h-full bg-[#FFE3FF] rounded-xl shadow-lg p-5 sm:p-6 lg:p-8 flex flex-col items-start text-left gap-3 sm:gap-4 hover:scale-[1.03] hover:shadow-xl transition-all duration-300">
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center text-pink-600 text-xl sm:text-2xl shadow-sm">
        {icon}
      </div>

      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
