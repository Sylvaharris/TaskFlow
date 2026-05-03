"use client";

import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      text: "This AI task manager completely changed how I organize my day. I feel 10x more productive.",
    },
    {
      name: "David Chen",
      role: "Software Engineer",
      text: "The smart prioritization is insane. It actually understands what I should focus on first.",
    },
    {
      name: "Amina Bello",
      role: "Startup Founder",
      text: "Beautiful UI and powerful AI features. It feels like having a personal assistant.",
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 bg-[#faf7ff]">
      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-[36px] sm:text-[50px] lg:text-[60px] font-bold text-black">
          Loved by{" "}
          <span className="bg-gradient-to-r from-orange-500 via-pink-600 to-red-700 bg-clip-text text-transparent">
            focus teams
          </span>
        </h2>
      </div>

      {/* GRID WRAPPER (CONSISTENT WIDTH WITH OTHER SECTIONS) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-xl"
          >
            <p className="text-gray-700 text-base leading-relaxed text-left">
              “{item.text}”
            </p>

            <div className="mt-auto text-left">
              <h4 className="font-bold text-gray-900">{item.name}</h4>
              <p className="text-sm text-gray-500">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
