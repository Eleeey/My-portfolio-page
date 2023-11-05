import { ICONS } from "@/constants";
import Image from "next/image";
import React from "react";

const Icons = () => {
  return (
    <div className="flex  mt-12 flex-row gap-12 flex-wrap justify-center">
      {ICONS.map((icon) => (
        <div className="flex flex-col">
          <Image
            src={`${icon.name}`}
            alt={`${icon.label}`}
            key={`${icon.key}`}
            width={70}
            height={70}
            
          />
          <label className="text-center ">{`${icon.label}`}</label>
        </div>
      ))}
    </div>
  );
};

export default Icons;
