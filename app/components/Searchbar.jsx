"use client";

import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBox = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full max-w-md relative">
      {/* ICON */}
      <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

      {/* INPUT */}
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="
          w-full pl-10 pr-4 py-2
          rounded-lg border border-gray-300
          focus:outline-none focus:ring-2 focus:ring-pink-500
        "
      />
    </div>
  );
};

export default SearchBox;
