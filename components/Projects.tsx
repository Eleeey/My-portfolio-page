import Link from 'next/link'
import React from 'react'



const Projects = () => {
  return (
    <div className="flex md:w-[70%]  flex-col gap-2">
      <Link href="/mywork">
        <div className=" projects ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            labore et laboriosam quo at ducimus dolorum voluptate officiis amet
            error!
          </p>
        </div>
      </Link>
      <Link href={"/contact"}>
        <div className="flex flex-row h-48  gap-3">
          <div className="w-[100%] h-[100%] sm:w-[100%] bg-blue-200 rounded-md"></div>
        </div>
      </Link>
    </div>
  );
}

export default Projects