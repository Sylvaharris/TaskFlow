import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <img src="/images/logo.png" alt="Logo" />
    </Link>
  );
};

export default Logo;
