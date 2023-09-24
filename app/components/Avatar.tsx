import { placeholder } from "@/public/images";
import Image from "next/image";
import React from "react";
interface AvatarProps {
  src?: string | null;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <div>
      <Image
        className="rounded-full"
        height="30"
        width="30"
        alt="Avatar"
        src={src || placeholder}
      />
    </div>
  );
};

export default Avatar;
