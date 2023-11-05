
import Link from "next/link";
import Icons from "./Icons";
import Projects from "./Projects";

const Main = () => {
  return (
    <section className="flex mt-5 flex-col ">
      {/* ABOUT ME SECTION */}
      <div className=" flex flex-col md:flex-row gap-5">
        <div className="bg-gray-500 p-4 rounded-lg w-100 md:w-[50%] h-[60vh] md:h-[60vh]">
          <h2 className="flex font-bold relative top-[80%] text-4xl">
            About Me
          </h2>
          <p className="flex justify-left text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            molestias quia totam pariatur tempore, perspiciatis iure laudantium
            sunt dolorum repellat unde dolorem aliquid officiis, voluptatem
            excepturi inventore recusandae ratione! Iste.
          </p>
          <Link
            className="bold-40 underline relative  left-[80%] md:left-[75%] hover:text-white lg:top-[6.5%]"
            href={""}
          >
            See More
          </Link>
        </div>

        {/* skills section */}
        <div className="flex flex-col mt-7 md:hidden">
          <h2 className="text-3xl text-center ">Skills/Tools</h2>
          <Icons />
        </div>

        {/* projects */}
        <Projects />
      </div>

      <div className=" mt-10 hidden md:flex">
        <h2 className="text-3xl text-center">Skills</h2>
        <Icons />
      </div>
    </section>
  );
};

export default Main;
