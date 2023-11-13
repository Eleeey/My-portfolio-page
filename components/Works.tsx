import React from "react";
import Projects from "./Projects";
import { PROJECTS } from "@/constants";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Works = () => {
  return (
    <div className="flex mt-10 flex-col flex-wrap  w-100 h-100">
      <div className="flex w-[100%] flex-wrap gap-3 justify-between md:w-[100%]">
        {PROJECTS.map((work) => (
          <div className=" w-full mt-4 bg-gray-50 rounded-lg md:w-[49%]  flex h-auto flex-col ">
            <Image src={work.image} alt={""} width={500} height={50} />
            <div className="w-full p-3 flex flex-col align justify-center">
              <h3 className="font-bold uppercase ">{work.name}</h3>
              <p>{work.description}</p>
              <div className="flex flex-row gap-5 justify-center flex-wrap mt-3">
                {work.techUsed.map((tech) => (
                  <Image src={`${tech}`} alt={""} width={35} height={20}/>
                ))}
              </div>
              <div className="flex justify-center mt-5 flex-row">
                <Link href={""}>
                  <Button
                    type={"button"}
                    title={"Live Demo"}
                    icon={"/link.svg"}
                    color="p-2 "
                    height={20}
                    width={20}
                  />
                </Link>
                <Link className="ml-5" href={""}>
                  <Button
                    type={"button"}
                    title={"Github"}
                    icon={"/github (1).svg"}
                    color="bg-white  border-1 p-2 hover:border-black"
                    height={20}
                    width={20}
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
