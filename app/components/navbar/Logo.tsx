"use client";

import { logo } from "@/public/images";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/")}
      alt="logo"
      className="hidden md:block cursor-pointer"
      height="100"
      width="100"
      src={logo}
    />
  );
};

export default Logo;
