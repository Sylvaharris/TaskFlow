"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Urbanist } from "next/font/google";
import Link from "next/link";
import Logo from "./Logo";

// =========================
// LOAD GOOGLE FONT
// =========================
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const Register = () => {
  // =========================
  // STATE MANAGEMENT
  // =========================

  // Stores user's fullname input
  const [fullname, setFullname] = useState("");

  // Stores user's email input
  const [email, setEmail] = useState("");

  // Stores user's password input
  const [password, setPassword] = useState("");

  // Controls loading state for button UI (spinner, disable click)
  const [loading, setLoading] = useState(false);

  // Router for navigation between pages
  const router = useRouter();

  // =========================
  // HANDLE SIGNUP LOGIC
  // =========================
  const handleSignup = () => {
    // 1. VALIDATE INPUT FIELDS
    if (!fullname || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    // 2. CREATE USER OBJECT FROM INPUT DATA
    const userData = { fullname, email, password };

    // 3. START LOADING STATE (UI FEEDBACK)
    setLoading(true);

    // 4. SIMULATE API REQUEST (DELAY)
    setTimeout(() => {
      try {
        // 5. SAVE USER DATA TO LOCAL STORAGE
        // IMPORTANT: objects must be converted to string
        localStorage.setItem("user", JSON.stringify(userData));

        // 6. CLEAR INPUT FIELDS AFTER SUCCESS
        setFullname("");
        setEmail("");
        setPassword("");

        // 7. REDIRECT USER TO DASHBOARD
        router.push("/dashboard");
      } catch (error) {
        // 8. HANDLE ANY ERRORS (e.g storage issues)
        console.log("Error saving user:", error);
      } finally {
        // 9. STOP LOADING STATE (always runs)
        setLoading(false);
      }
    }, 2000);
  };

  return (
    // APPLY FONT TO ENTIRE PAGE
    <div className={`${urbanist.className} min-h-screen`}>
      {/* =========================
          MAIN PAGE WRAPPER
      ========================= */}
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-orange-400 via-pink-600 to-red-600 px-4">
        {/* =========================
            SIGNUP CARD CONTAINER
        ========================= */}
        <div
          className="
            w-full max-w-md
            flex flex-col items-center gap-5
            bg-white/5 backdrop-blur-md
            border border-white/40
            rounded-2xl
            p-6 sm:p-8
            shadow-lg

            // SUBTLE HOVER EFFECT (premium feel)
            transition-all duration-300 ease-out
            hover:scale-[1.01] hover:shadow-xl
          "
        >
          {/* LOGO WITH HOVER ANIMATION */}
          <div className="transition-transform duration-300 hover:scale-105">
            <Logo />
          </div>

          {/* =========================
              HEADER SECTION
          ========================= */}
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              Signup for an Account
            </h1>

            {/* NAVIGATION TO LOGIN PAGE */}
            <p className="text-sm sm:text-base">
              Already have an Account?{" "}
              <Link
                href="/login-page"
                className="
                  font-semibold text-[#F69E1E]

                  // LINK HOVER EFFECT
                  transition-all duration-200
                  hover:underline hover:opacity-80
                "
              >
                Login
              </Link>
            </p>
          </div>

          {/* =========================
              FORM SECTION
          ========================= */}
          <div className="w-full flex flex-col">
            {/* INPUT GROUP (STACKED FIELDS) */}
            <div className="flex flex-col w-full">
              {/* FULLNAME INPUT */}
              <input
                className="
                  w-full px-4 py-3
                  rounded-t-lg
                  bg-white/5
                  text-white
                  outline-none border-b border-white/20

                  // INPUT FOCUS ANIMATION
                  transition-all duration-200
                  focus:border-white/60 focus:bg-white/10
                "
                type="text"
                placeholder="Fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />

              {/* EMAIL INPUT */}
              <input
                className="
                  w-full px-4 py-3
                  bg-white/5
                  text-white
                  outline-none border-b border-white/20

                  transition-all duration-200
                  focus:border-white/60 focus:bg-white/10
                "
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* PASSWORD INPUT */}
              <input
                className="
                  w-full px-4 py-3
                  rounded-b-lg
                  bg-white/5
                  text-white
                  outline-none border-b border-white/20

                  transition-all duration-200
                  focus:border-white/60 focus:bg-white/10
                "
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* =========================
                SIGNUP BUTTON
            ========================= */}
            <button
              onClick={handleSignup}
              disabled={loading}
              className="
                mt-5 w-full py-3 rounded-lg
                bg-white text-pink-600 font-semibold

                // BUTTON INTERACTIONS
                transition-all duration-300 ease-out
                hover:bg-gray-100 hover:scale-[1.02]
                active:scale-[0.98]

                flex items-center justify-center gap-2
                disabled:opacity-60 disabled:cursor-not-allowed
              "
            >
              {loading ? (
                <>
                  {/* LOADING SPINNER */}
                  <span className="animate-spin h-5 w-5 border-2 border-pink-500 border-t-transparent rounded-full"></span>
                  Loading...
                </>
              ) : (
                "Signup"
              )}
            </button>

            {/* =========================
                TERMS TEXT
            ========================= */}
            <p className="text-center text-xs sm:text-sm text-gray-200 mt-4">
              By signing up, you agree to the{" "}
              <span className="text-yellow-400 hover:underline cursor-pointer">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-yellow-400 hover:underline cursor-pointer">
                Data Processing Agreement
              </span>
            </p>
          </div>
        </div>

        {/* =========================
            FOOTER
        ========================= */}
        <p className="absolute bottom-4 text-xs text-white/70">
          Powered by The sylva Corporations
        </p>
      </div>
    </div>
  );
};

export default Register;
