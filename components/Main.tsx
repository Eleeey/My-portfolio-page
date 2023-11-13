
import Link from "next/link";
import Icons from "./Icons";
import Projects from "./Projects";

const Main = () => {
  return (
    <section className="flex mt-5 flex-col  ">
      {/* ABOUT ME SECTION */}
      <div className="  flex flex-col md:flex-row gap-5 h-full  ">
        <div className="  bg-gray-200 p-4 rounded-lg w-100 md:w-[50%] h-[60vh] max-h-[65rem] md:max-h-[25rem]">
          <h2 className="flex  font-bold relative top-[90%] sm:top-[90%]  text-4xl">
            About Laakasen
          </h2>
          <p className=" -mt-5 flex font-bold justify-left text-left">
            Hello, I'm Laakasen Ezra, a passionate Front-End Engineer with a
            relentless drive to craft exceptional UIs that create meaningful
            user experiences. I thrive on collaborative teamwork and find my
            best inspiration in learning environments. My mission is to make a
            difference through elegant and functional web design. With a
            background in web development and a knack for problem-solving, I'm
            dedicated to staying at the forefront of industry trends and best
            practices. Whether it's enhancing user interactions, optimizing
            performance, or creating pixel-perfect designs, I'm committed to
            delivering top-notch results. Let's work together to turn ideas into
            beautifully designed, user-friendly interfaces that leave a lasting
            impression."
          </p>
          {/* <Link
            className="bold-40 underline relative  left-[80%] md:left-[75%] hover:text-white lg:top-[6.5%]"
            href={""}
          >
            See More
          </Link> */}
        </div>

        {/* skills section */}
        <div className="flex flex-col mt-7 md:hidden">
          <h2 className="text-3xl text-center ">Skills/Tools</h2>
          <Icons />
        </div>

        {/* projects */}
        <Projects />
      </div>

      <div className=" flex flex-col mt-10 hidden md:flex">
        <h2 className="text-3xl text-center">Skills/Tools/</h2>
        <Icons />
      </div>
    </section>
  );
};

export default Main;
