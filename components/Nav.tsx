import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className=" border-1 flex items-center justify-between  max-container  relative py-5 z-30">
      <Link href={"/"}>
        <h1 className="font-extrabold text-xl ">
          Laakasen Ezra
        </h1>
      </Link>
      <ul className=" h-full gap-12 flex">
        <Link href={"https://github.com/Eleeey"} target="blank">
          <Image
            src={"/github (1).svg"}
            alt={"github"}
            height={24}
            width={24}
          />
        </Link>
        <Link href={"https://www.linkedin.com/in/laakasen-ezra"} target="blank">
          <Image
            src={"/linkedin (1).svg"}
            alt={"github"}
            height={24}
            width={24}
          />
        </Link>
        <Link href={"/Untitled (7).pdf"} target="blank" className="rounded-lg bg-black text-white px-5 py-1 hover:bg-white hover:border-black hover:border-2 hover:text-black">Resume</Link>
      </ul>
    </nav>
  );
};

export default Nav;
