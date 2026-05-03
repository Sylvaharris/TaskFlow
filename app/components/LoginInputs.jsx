"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "../components/Logo";
import { FaHSquare } from "react-icons/fa";
import { ImCheckboxChecked } from "react-icons/im";

const LoginInputs = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const router = useRouter(); // ✅ correct

  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      if (
        username.trim().toLowerCase() === "sylvaharris" &&
        password === "1234567"
      ) {
        router.push("/test-tracker");
      } else {
        alert("Invalid credentials");
      }

      setLoading(false);
    }, 1500); // fake loading delay
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-orange-400 via-pink-600 to-red-600 bg-cover bg-center flex items-center justify-center">
        <div className="flex flex-col gap-4 items-center justify-center bg-white/5 backdrop-blur-md border border-white/40 rounded-[30px] my-40 mx-auto max-w-150 p-10">
          {/* LOGO IMAGE/ICON */}
          <Logo />

          {/* LOGIN HEAD TEXT */}
          <div>
            <h1 className="text-center mb-4 text-[38px] font-[700]">
              Sign in to your Account
            </h1>
            <p className="text-center text-md mb-4">
              Dont have an Account?{" "}
              <span className="text-lg font-bold text-[#F69E1E] cursor-pointer">
                SignUp
              </span>
            </p>
          </div>
          <div className="flex flex-col">
            {/* USERNAME INPUT */}

            <input
              className="px-5 py-4 w-130 rounded-t-lg border-b-1 bg-white/5 backdrop-blur-md text-white outline-1 outline-gray-300"
              type="text"
              placeholder="Username e.g sylvaharris"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            {/* PASSWORD INPUT */}
            <input
              className="px-5 py-4 w-130 rounded-b-lg border-0 mb-2  bg-white/5 backdrop-blur-md text-white outline-1 outline-gray-300"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* REMEMBER ME & FORGOT PASSWORD */}
            <div className="flex justify-between align-center mb-10">
              <div>Remember Me</div>

              <p className="font-bold text-yellow-500 hover:underline cursor-pointer">
                Forgot Password?
              </p>
            </div>

            {/* LOGIN BUTTON */}
            <button
              onClick={handleClick}
              disabled={loading}
              className="cursor-pointer bg-white py-4 mb-3 rounded-lg text-[#FF0095] font-bold text-[20px] flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {loading ? (
                <>
                  <span className="animate-spin h-5 w-5 border-2 border-pink-500 border-t-transparent rounded-full"></span>
                  Loading...
                </>
              ) : (
                "Login"
              )}
            </button>

            <p className="text-center text-sm text-gray-200">
              By signing up, you agree to the{" "}
              <span className="text-yellow-500 hover:underline cursor-pointer">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-yellow-500 hover:underline cursor-pointer">
                Data Processing Agreement
              </span>
            </p>
          </div>
        </div>

        <p>Powered by The sylva Corporations</p>
      </div>
    </>
  );
};

export default LoginInputs;
