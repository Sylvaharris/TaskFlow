import React from "react";
import { BiLogoTwitter, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {
  const productLinks = ["Features", "Pricing", "Integrations", "Updates"];
  const companyLinks = ["About", "Careers", "Blog", "Contact"];

  return (
    <footer className="w-full px-6 py-16 relative overflow-hidden bg-[#0f0f1a] text-white">
      {/* background glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-pink-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-orange-500/20 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* LOGO */}
        <div>
          <img src="/images/logo.png" alt="logo" className="w-40 mb-4" />
          <p className="text-gray-400 text-sm">
            Smarter task management powered by AI.
          </p>
        </div>

        {/* PRODUCT */}
        <div>
          <h4 className="font-semibold mb-4">Product</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            {productLinks.map((item) => (
              <li key={item} className="cursor-pointer hover:text-white">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            {companyLinks.map((item) => (
              <li key={item} className="cursor-pointer hover:text-white">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="font-semibold mb-4">Connect</h4>

          <div className="flex gap-4 mb-4">
            <div className="bg-white/10 p-3 rounded-lg cursor-pointer">
              <BiLogoTwitter size={20} />
            </div>

            <div className="bg-white/10 p-3 rounded-lg cursor-pointer">
              <BiLogoInstagram size={20} />
            </div>

            <div className="bg-white/10 p-3 rounded-lg cursor-pointer">
              <BiLogoLinkedin size={20} />
            </div>
          </div>

          <p className="text-gray-400 text-sm">hello@nexusai.com</p>
        </div>
      </div>

      {/* STATIC TEXT (IMPORTANT FIX) */}
      <div className="relative z-10 mt-16 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
        © 2026 Nexus AI. All rights reserved. <br />
        Designed & Developed by{" "}
        <span className="bg-gradient-to-r from-orange-400 via-pink-600 to-red-600 bg-clip-text text-transparent font-semibold">
          sylvaharris
        </span>
      </div>
    </footer>
  );
};

export default Footer;
