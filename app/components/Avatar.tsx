import { placeholder } from "@/public/images";
import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <div>
      <Image
        className="rounded-full"
        height="30"
        width="30"
        alt="Avatar"
        src={placeholder}
      />
    </div>
  );
};

export default Avatar;
