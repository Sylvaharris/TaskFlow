"use client";

import React from "react";
import Navbar from "./components/Navbar";
import { Urbanist } from "next/font/google";
import { BiArrowToRight, BiVideo } from "react-icons/bi";
import FeaturesCard from "./components/FeaturesCard";
import HowItWorksCard from "./components/HowItWorksCard";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const page = () => {
  return (
    <div
      className={`${urbanist.className} min-h-screen relative overflow-hidden bg-[#faf7ff]`}
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-[-220px] left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[500px] md:h-[800px] bg-indigo-500/40 rounded-full blur-[200px]" />

      <div className="absolute left-[-200px] top-1/2 -translate-y-1/2 w-[400px] md:w-[750px] h-[400px] md:h-[750px] bg-violet-500/50 rounded-full blur-[220px]" />
      <div className="absolute right-[-200px] top-1/2 -translate-y-1/2 w-[400px] md:w-[750px] h-[400px] md:h-[750px] bg-cyan-400/40 rounded-full blur-[220px]" />
      <div className="absolute bottom-[-220px] left-1/2 -translate-x-1/2 w-[500px] md:w-[850px] h-[500px] md:h-[850px] bg-amber-400/25 rounded-full blur-[240px]" />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF0095]/10 via-indigo-200/10 to-cyan-200/20" />
      <div className="absolute inset-0 bg-white/10" />

      {/* CONTENT */}
      <div className="relative z-10 mt-5">
        <Navbar />

        {/* HERO SECTION */}
        <div className="flex flex-col gap-6 justify-center items-center mt-20 md:mt-30 px-4 text-center">
          {/* TITLE */}
          <p className="font-extrabold leading-tight tracking-tight">
            <span className="block text-[38px] sm:text-[50px] md:text-[90px] text-gray-900">
              Manage Tasks
            </span>

            <span className="block text-[38px] sm:text-[50px] md:text-[90px] bg-gradient-to-r from-orange-400 via-pink-600 to-red-600 bg-clip-text text-transparent">
              Smarter with AI
            </span>
          </p>

          {/* DESCRIPTION */}
          <p className="text-sm sm:text-base md:text-[20px] max-w-2xl text-gray-600">
            Nexus AI prioritizes your work, suggests smart deadlines, and breaks
            down complex goals into actionable steps — so you can focus on what
            truly matters.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8">
            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-400 via-pink-600 to-red-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.05] transition-all duration-300">
              Get Started
              <BiArrowToRight />
            </button>

            <button className="flex items-center justify-center gap-2 bg-white/30 backdrop-blur-md border border-white/40 text-[#FF0095] font-semibold py-3 px-6 sm:px-8 rounded-lg shadow-sm hover:bg-white/50 hover:scale-[1.05] transition-all duration-300">
              <BiVideo />
              See How it Works
            </button>
          </div>

          {/* HERO IMAGE */}
          <div className="w-full flex justify-center px-4">
            <img
              src="/images/heroimg.png"
              alt="todo graphics"
              className="w-full max-w-[600px] md:max-w-[900px] h-auto"
            />
          </div>
        </div>

        {/* FEATURES */}
        <section className="flex flex-col justify-center items-center text-gray-600 max-w-6xl mx-auto mt-20 md:mt-40 px-4 text-center">
          <span className="bg-white/30 backdrop-blur-md border border-white/40 text-[#FF0095] py-2 px-5 rounded-full text-sm">
            Features
          </span>

          <h2 className="text-[28px] sm:text-[40px] md:text-[60px] font-bold text-black mt-4">
            Built to make you{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-600 to-red-700 bg-clip-text text-transparent">
              unstoppable
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-[20px] max-w-2xl text-black mt-3 mb-10">
            Every feature is designed to remove friction and help you ship more
            of what matters.
          </p>

          <FeaturesCard />
        </section>

        {/* HOW IT WORKS */}
        <section className="flex flex-col justify-center items-center text-gray-600 max-w-6xl mx-auto py-20 md:py-40 px-4 text-center">
          <span className="bg-white/30 backdrop-blur-md border border-white/40 text-[#FF0095] py-2 px-5 rounded-full text-sm">
            How it Works
          </span>

          <h2 className="text-[28px] sm:text-[40px] md:text-[60px] font-bold text-black mt-4">
            Three steps to{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-600 to-red-700 bg-clip-text text-transparent">
              deep focus
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-[20px] max-w-2xl text-black mt-3 mb-10">
            Every feature is designed to remove friction and help you ship more
            of what matters.
          </p>

          <HowItWorksCard />
        </section>

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* PRICING */}
        <Pricing />

        {/* CTA */}
        <section className="w-full py-20 md:py-24 px-4 relative overflow-hidden bg-gradient-to-br from-[#fff1f8] via-[#ffe4f2] to-[#fff7f2] text-center">
          <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-pink-400/30 rounded-full blur-[160px]" />
          <div className="absolute bottom-[-150px] right-[-150px] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-orange-400/30 rounded-full blur-[140px]" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="font-bold text-black text-[28px] sm:text-[40px] md:text-[60px] leading-tight">
              Start working{" "}
              <span className="bg-gradient-to-r from-orange-500 via-pink-600 to-red-700 bg-clip-text text-transparent">
                smarter today
              </span>
            </h2>

            <p className="text-gray-600 mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Join thousands of users using AI to organize tasks, boost
              productivity, and achieve more with less stress.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10">
              <button className="flex items-center gap-2 bg-gradient-to-r from-orange-400 via-pink-600 to-red-600 text-white font-semibold py-4 px-6 rounded-xl">
                Get Started Free <BiArrowToRight />
              </button>

              <button className="flex items-center gap-2 bg-white/50 backdrop-blur-md border border-white/60 text-[#FF0095] font-semibold py-4 px-6 rounded-xl">
                <BiVideo />
                See How it Works
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default page;
