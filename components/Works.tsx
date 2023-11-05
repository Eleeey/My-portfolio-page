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
          <div className=" w-full border-2 bg-gray-50 rounded-lg md:w-[49%] flex h-42 flex-row ">
            <Image src={work.image} alt={""} width={200} height={100} />
            <div className="w-full p-5 flex flex-col align justify-center">
              <h3 className="font-bold uppercase ">{work.name}</h3>
              <p>{work.description}</p>
              <div className="flex flex-row gap-5 flex-wrap mt-3">
                {work.techUsed.map((tech) => (
                  <p className="w-auto bg-black border-1 rounded-lg px-4 text-white">{tech}</p>
                ))}
              </div>
              <div className="flex justify-center mt-5 flex-row">
                <Link href={""}>
                  <Button
                    type={"button"}
                    title={"Live Demo"}
                    icon={"/share.svg"}
                    color=""
                    height={35}
                    width={40}
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
