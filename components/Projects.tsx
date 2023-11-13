import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="flex md:w-[70%]  flex-col gap-2">
      <Link href="/mywork">
        <div className=" projects text-white hover:text-white hover:rounded-lg hover:border-black ">
          <h3 className="font-extrabold text-3xl relative -left-[30%] top-[80%] lg:top-[70%]   sm:-left-[35%] ">
            {" "}
            My Works
          </h3>
        </div>
      </Link>
      <Link className=" " href={"/contact"}>
        <div className=" aboutme flex flex-row h-48  gap-3 text-white hover:rounded-lg hover:border-black">
          <div className="w-[100%] h-[100%] sm:w-[100%]   rounded-md">
            <h3 className="font-extrabold text-3xl relative left-[2%] top-[70%] ">
              {" "}
              Contact Me
            </h3>
            <Image
              className=" relative top-[25%] left-[70%] md:left-[75%] lg:left-[80%] rotate-[20deg] "
              src={"/share2.svg"}
              alt={""}
              height={100}
              width={80}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Projects;
