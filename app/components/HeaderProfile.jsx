import React from "react";
import { FaSave } from "react-icons/fa";
import ToggleButton from "./ToggleButton";
import { FiCheck } from "react-icons/fi";

const HeaderProfile = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-orange-50 px-4 py-6 sm:px-6 md:px-10 lg:px-16">
        <div className="w-full lg:max-w-4xl">
          {/* =========================
            HEADER
            ========================= */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              Your <span className="text-pink-600">Settings</span>
            </h1>
            <p className="text-gray-500 text-sm sm:text-base mt-1">
              Manage your profile, AI behavior and preferences.
            </p>
          </div>

          {/* CARD 1 */}
          <div className="mb-7 flex flex-col gap-10 p-[2px] rounded-2xl bg-gradient-to-r from-orange-400 via-pink-600 to-red-600 shadow-sm">
            <div className="rounded-2xl bg-white p-6 sm:p-8 flex flex-col gap-8">
              {/* HEADER */}
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold text-gray-800">Profile</h3>
                <p className="text-sm text-gray-500">
                  Update your account information and keep your profile up to
                  date
                </p>
              </div>

              {/* INPUT FIELDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-600">
                    Name
                  </label>
                  <input
                    className="bg-gray-100 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 transition"
                    type="text"
                    placeholder="Sylva Harris"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-600">
                    Email
                  </label>
                  <input
                    className="bg-gray-100 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 transition"
                    type="email"
                    placeholder="sylvaharris@gmail.com"
                  />
                </div>
              </div>

              {/* BUTTON */}
              <div className="flex justify-start">
                <button className="flex items-center gap-2 bg-gradient-to-r from-orange-400 via-pink-600 to-red-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-transform duration-200">
                  <FaSave size={18} />
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="mb-7 flex flex-col gap-10 p-[2px] rounded-2xl bg-gradient-to-r from-orange-400 via-pink-600 to-red-600 shadow-sm">
            <div className="rounded-2xl bg-white p-6 sm:p-8 flex flex-col gap-8">
              {/* HEADER */}
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold text-gray-900">
                  Preferences
                </h3>
                <p className="text-sm text-gray-600">
                  Customize how TaskFlow AI works for you.
                </p>
              </div>

              {/* ================= ITEM 1 ================= */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-col">
                  <h4 className="text-sm font-semibold text-gray-900">
                    AI Suggestions
                  </h4>
                  <p className="text-sm text-gray-600">
                    Let AI propose tasks and deadlines
                  </p>
                </div>
                <ToggleButton />
              </div>

              {/* ================= ITEM 2 ================= */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-col">
                  <h4 className="text-sm font-semibold text-gray-900">
                    Daily Digest
                  </h4>
                  <p className="text-sm text-gray-600">
                    Email summary of your tasks each morning
                  </p>
                </div>
                <ToggleButton />
              </div>

              {/* ================= ITEM 3 ================= */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-col">
                  <h4 className="text-sm font-semibold text-gray-900">
                    Dark Mode
                  </h4>
                  <p className="text-sm text-gray-600">Coming soon</p>
                </div>
                <ToggleButton />
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="flex flex-col gap-10 p-[2px] rounded-2xl bg-gradient-to-r from-orange-400 via-pink-600 to-red-600 shadow-sm">
            <div className="rounded-2xl bg-white p-6 sm:p-8 flex flex-col gap-8">
              {/* HEADER */}
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold text-gray-900">Plan</h3>
                <p className="text-sm text-gray-600">
                  You are currently on the Free plan
                </p>
              </div>

              {/* CONTENT */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 p-4 rounded-xl bg-gradient-to-r from-orange-50 via-pink-50 to-red-50 border border-pink-100">
                {/* TEXT */}
                <div className="flex flex-col">
                  <h4 className="text-sm font-semibold text-gray-900">
                    Upgrade to Premium
                  </h4>
                  <p className="text-sm text-gray-600">
                    Unlock unlimited tasks and advanced AI features
                  </p>
                </div>

                {/* BUTTON */}
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-orange-400 via-pink-600 to-red-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:scale-[1.03] active:scale-95 transition">
                  Upgrade
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderProfile;
