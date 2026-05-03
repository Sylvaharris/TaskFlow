"use client";

import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      description: "Perfect for trying out the platform",
      features: [
        "Basic task management",
        "AI suggestions (limited)",
        "1 workspace",
      ],
      button: "Get Started",
      highlight: false,
    },
    {
      name: "Pro",
      price: "$12",
      description: "Best for individuals who want productivity boost",
      features: [
        "Advanced AI prioritization",
        "Unlimited tasks",
        "Smart deadlines",
        "Analytics dashboard",
      ],
      button: "Start Pro",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "$29",
      description: "For teams and power users",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Admin controls",
        "Priority support",
      ],
      button: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <section className="w-full py-20 sm:py-24 px-4 sm:px-6 bg-[#faf7ff]">
      {/* HEADER */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="font-bold text-black leading-tight text-[36px] sm:text-[48px] lg:text-[60px]">
          Simple,{" "}
          <span className="bg-gradient-to-r from-orange-500 via-pink-600 to-red-700 bg-clip-text text-transparent">
            honest pricing
          </span>
        </h2>

        <p className="text-gray-600 mt-4 text-base sm:text-lg">
          Choose a plan that fits your workflow
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {plans.map((plan, index) => {
          const isHighlighted = plan.highlight;

          return (
            <div
              key={index}
              className={[
                "rounded-2xl p-6 sm:p-8 flex flex-col gap-5 shadow-md transition-all duration-300",
                isHighlighted
                  ? "bg-gradient-to-br from-orange-400 via-pink-600 to-red-600 text-white md:scale-105"
                  : "bg-white text-gray-900",
                // ONLY enable hover on medium screens and above
                "md:hover:-translate-y-2 md:hover:shadow-2xl",
              ].join(" ")}
            >
              {/* PLAN NAME */}
              <h3 className="text-lg sm:text-xl font-bold">{plan.name}</h3>

              {/* PRICE */}
              <p className="text-3xl sm:text-4xl font-extrabold">
                {plan.price}
                <span className="text-sm font-medium">/mo</span>
              </p>

              {/* DESCRIPTION */}
              <p className={isHighlighted ? "text-white/90" : "text-gray-600"}>
                {plan.description}
              </p>

              {/* FEATURES */}
              <ul className="flex flex-col gap-2 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>

              {/* BUTTON */}
              <button
                className={[
                  "mt-auto py-3 rounded-lg font-semibold transition-all duration-300",
                  isHighlighted
                    ? "bg-white text-pink-600 md:hover:bg-gray-100"
                    : "bg-gradient-to-r from-orange-400 via-pink-600 to-red-600 text-white md:hover:opacity-90 md:hover:scale-[1.03]",
                ].join(" ")}
              >
                {plan.button}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
