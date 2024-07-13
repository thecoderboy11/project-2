import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Texture from "./Texture";
const Experience = () => {
  const updown = useAnimation();
  const du = useAnimation();
  const ud = useAnimation();
  const lefttoright = useAnimation();
  const righttoleft = useAnimation();
  const bounce = useAnimation();
  const bouncerev = useAnimation();

  const handleScroll = () => {
    lefttoright.start({
      x: [-100, 0],
      transition: { ease: "easeInOut", yoyo: Infinity, duration: 2 },
    });

    righttoleft.start({
      x: [100, 0],
      transition: { ease: "easeInOut", yoyo: Infinity, duration: 2 },
    });

    updown.start({
      y: [0, 50, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    });

    ud.start({
      y: [-50, 0], // Up to Down
      transition: {
        ease: "easeInOut",
        yoyo: Infinity,
        duration: 1,
      },
    });

    du.start({
      y: [50, 0], // Down to Up
      transition: {
        ease: "easeInOut",
        yoyo: Infinity,
        duration: 1,
      },
    });
    bounce.start({
      y: [0, -100, 0, -80, 0, -60, 0, -40, 0, -20, 0],
      transition: { yoyo: Infinity, duration: 4, ease: "easeInOut" },
    });

    bouncerev.start({
      y: [0, 100, 0, 80, 0, 60, 0, 40, 0, 20, 0],
      transition: { yoyo: Infinity, duration: 4, ease: "easeInOut" },
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lefttoright]);

  React.useEffect(() => {
    // Start the animation when the component mounts

    ud.start({
      y: [-50, 0], // Up to Down
      transition: {
        ease: "easeInOut",
        yoyo: Infinity,
        duration: 1,
      },
    });

    du.start({
      y: [50, 0], // Down to Up
      transition: {
        ease: "easeInOut",
        yoyo: Infinity,
        duration: 1,
      },
    });
    lefttoright.start({
      x: [-100, 0],
      transition: { ease: "easeInOut", yoyo: Infinity, duration: 2 },
    });

    righttoleft.start({
      x: [100, 0],
      transition: { ease: "easeInOut", yoyo: Infinity, duration: 2 },
    });

    bounce.start({
      y: [0, -100, 0, -80, 0, -60, 0, -40, 0, -20, 0],
      transition: { yoyo: Infinity, duration: 4, ease: "easeInOut" },
    });

    bouncerev.start({
      y: [0, 100, 0, 80, 0, 60, 0, 40, 0, 20, 0],
      transition: { yoyo: Infinity, duration: 4, ease: "easeInOut" },
    });

    updown.start({
      y: [0, 50, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [updown]);

  return (
    <div className="">



      <div className="relative">

      <div className="absolute w-[100%] h-[100%] opacity-10">
        <Texture />
      </div>


        <div>
          <motion.h1
            animate={lefttoright}
            className="md:text-5xl text-3xl text-yellow-500 font-bold ml-4 md:ml-[10%]"
          >
            Experience
          </motion.h1>

          <motion.div
            animate={righttoleft}
            className="h-[2px]  w-[45%] md:w-[67%] ml-[43%] md:ml-[24%] mt-2 bg-[#bab6b6]"
          ></motion.div>
        </div>


        {/* expr. card */}

        <div>

          <div className=" mt-16 flex flex-row justify-center items-center ">
            <div className="flex justify-center items-end flex-col">
              <div className="flex justify-start items-start flex-row gap-2 md:gap-5">
                <div className="bg-gray-500 text-gray-300  shadow-yellow-200 shadow-2xl rounded-tr-3xl rounded-br-3xl px-3 font-bold ">
                  2023
                </div>
                <div className=" w-6 h-6 bg-yellow-400 rounded-full  shadow-xl shadow-yellow-200 "></div>
              </div>
              <div className="mr-2 mt-3 w-[6px] h-[730px] md:h-[380px] rounded-lg bg-slate-300"></div>
            </div>

            <div class=" ml-2 md:ml-12 bg-custom w-[300px] md:w-[600px]   rounded-lg  px-4 py-2 shadow-lg  dark:bg-gray-900 md:px-8 md:py-4">
              <div class=" flex justify-center md:justify-end"></div>
              <h2 class=" font-extrabold font-serif text-2xl text-rose-600 dark:text-rose-300 md:mt-0 md:text-3xl">
                Software Development Intern
              </h2>
              <span class="mt-6 font-bold text-lg  text-rose-400 dark:text-rose-200">
                AMAZON
              </span>
              <p class="font-semibold mt-4 text-gray-300 ">
                I completed a six-month internship at Amazon in Germany, where I
                immersed myself in software development and honed my technical
                skills. My role involved working on diverse projects, focusing
                on code optimization, feature development, and troubleshooting.
                Collaborating with cross-functional teams, I gained experience
                in agile methodologies and learned to navigate complex systems.
                The internship provided me with valuable insights into industry
                best practices, large-scale software engineering, and the
                importance of efficient communication within a global team. This
                experience significantly enhanced my problem-solving abilities
                and technical proficiency, preparing me for future challenges in
                the software engineering field. Working at Amazon also exposed
                me to a high-performance work culture, driving me to
                continuously improve and innovate.
              </p>
              <br />
            </div>
          </div>

          <div className=" mt-16 flex flex-row justify-center items-center ">
            <div className="flex justify-center items-end flex-col">
              <div className="flex justify-start items-start flex-row gap-2 md:gap-5">
                <div className="bg-gray-500 text-gray-300  shadow-yellow-200 shadow-2xl rounded-tr-3xl rounded-br-3xl px-3 font-bold ">
                  2023
                </div>
                <div className=" w-6 h-6 bg-yellow-400 rounded-full  shadow-xl shadow-yellow-200 "></div>
              </div>
              <div className="mr-2 mt-3 w-[6px] h-[480px] md:h-[280px] rounded-lg bg-slate-300"></div>
            </div>

            <div class=" ml-2 md:ml-12 bg-custom w-[300px] md:w-[600px]   rounded-lg  px-4 py-2 shadow-lg  dark:bg-gray-900 md:px-8 md:py-4">
              <div class=" flex justify-center md:justify-end"></div>
              <h2 class=" font-extrabold font-serif text-2xl text-rose-600 dark:text-rose-300 md:mt-0 md:text-3xl">
                Software Development Intern
              </h2>
              <span class="mt-6 font-bold text-lg  text-rose-400 dark:text-rose-200">
                NETFLIX
              </span>
              <p class="font-semibold mt-4 text-gray-300 ">
              I completed a three-month internship at Netflix, focusing on developing and optimizing streaming solutions. I enhanced user experiences by implementing new features and improving functionalities, collaborating with experienced engineers. This internship provided me with insights into scalable software development, cloud technologies, and real-time data processing. The dynamic and innovative environment at Netflix significantly boosted my problem-solving skills and technical proficiency, preparing me for future challenges in the tech industry.
              </p>
              <br />
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Experience;
