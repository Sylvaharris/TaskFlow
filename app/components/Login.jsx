"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Urbanist } from "next/font/google";
import Link from "next/link";
import Logo from "./Logo";

// LOAD GOOGLE FONT (Urbanist)
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const Login = () => {
  // =========================
  // STATE MANAGEMENT
  // =========================

  // Store user input (email)
  const [email, setEmail] = useState("");

  // Store user input (password)
  const [password, setPassword] = useState("");

  // Controls loading state of button
  const [loading, setLoading] = useState(false);

  // Router for navigation
  const router = useRouter();

  // =========================
  // HANDLE LOGIN FUNCTION
  // =========================
  const handleLogin = () => {
    // 1. VALIDATE INPUTS
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    // 2. START LOADING STATE
    setLoading(true);

    // 3. SIMULATE SERVER REQUEST
    setTimeout(() => {
      try {
        // 4. GET USER FROM STORAGE (support both cases if you add remember me later)
        const storedUser =
          localStorage.getItem("user") || sessionStorage.getItem("user");

        // 5. CHECK IF USER EXISTS
        if (!storedUser) {
          alert("No account found. Please sign up first.");
          setLoading(false);
          return; // IMPORTANT: stop execution
        }

        // 6. PARSE STRING → OBJECT
        const user = JSON.parse(storedUser);

        // 7. VALIDATE CREDENTIALS
        if (email === user.email && password === user.password) {
          // SUCCESS → REDIRECT (no alert)
          router.push("/test-tracker");
          return; // IMPORTANT: stop further execution
        }

        // 8. INVALID CREDENTIALS
        alert("Invalid email or password");
      } catch (error) {
        // 9. HANDLE ERRORS
        console.log("Login error:", error);
        alert("Something went wrong. Please try again.");
      } finally {
        // 10. STOP LOADING (runs no matter what)
        setLoading(false);
      }
    }, 1500);
  };

  return (
    // APPLY FONT TO ENTIRE PAGE
    <div className={`${urbanist.className} min-h-screen`}>
      {/* MAIN BACKGROUND WRAPPER */}
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-orange-400 via-pink-600 to-red-600 px-4">
        {/* LOGIN CARD */}
        <div
          className="
            w-full max-w-md
            flex flex-col items-center gap-5
            bg-white/5 backdrop-blur-md
            border border-white/40
            rounded-2xl
            p-6 sm:p-8
            shadow-lg

            // SUBTLE HOVER ANIMATION
            transition-all duration-300 ease-out
            hover:scale-[1.01] hover:shadow-xl
          "
        >
          {/* LOGO */}
          <div className="transition-transform duration-300 hover:scale-105">
            <Logo />
          </div>

          {/* HEADER SECTION */}
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              Sign in to your Account
            </h1>

            {/* NAVIGATION TO SIGNUP PAGE */}
            <p className="text-sm sm:text-base">
              Don’t have an Account?{" "}
              <Link
                href="/signup-page"
                className="
                  font-semibold text-[#F69E1E]
                  transition-all duration-200
                  hover:underline hover:opacity-80
                "
              >
                Sign Up
              </Link>
            </p>
          </div>

          {/* FORM SECTION */}
          <div className="w-full flex flex-col">
            {/* INPUT GROUP */}
            <div className="flex flex-col w-full">
              {/* EMAIL INPUT */}
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

            {/* OPTIONS ROW */}
            <div className="flex justify-between items-center mt-3 text-sm text-white/80">
              {/* REMEMBER ME CHECKBOX */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-pink-500" />
                Remember me
              </label>

              {/* FORGOT PASSWORD */}
              <span className="text-yellow-400 hover:underline cursor-pointer">
                Forgot Password?
              </span>
            </div>

            {/* LOGIN BUTTON */}
            <button
              onClick={handleLogin}
              disabled={loading}
              className="
                mt-5 w-full py-3 rounded-lg
                bg-white text-pink-600 font-semibold

                // BUTTON ANIMATIONS
                transition-all duration-300 ease-out
                hover:bg-gray-100 hover:scale-[1.02]
                active:scale-[0.98]

                flex items-center justify-center gap-2
                disabled:opacity-60 disabled:cursor-not-allowed
              "
            >
              {loading ? (
                <>
                  {/* SPINNER */}
                  <span className="animate-spin h-5 w-5 border-2 border-pink-500 border-t-transparent rounded-full"></span>
                  Loading...
                </>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </div>

        {/* FOOTER */}
        <p className="absolute bottom-4 text-xs text-white/70">
          Powered by The sylva Corporations
        </p>
      </div>
    </div>
  );
};

export default Login;
