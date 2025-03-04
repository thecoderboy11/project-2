

import React, { useEffect } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import "./App.css";
import hannanImage from "./the coder boy.jpeg";
import {  motion, useAnimation } from "framer-motion";
import Texture from "./Texture";
import { setupHoverEffect } from "./HoverCard3D";

const FirstPage = () => {
  const controls = useAnimation();
  const righttoleft = useAnimation();
  const scrollani = useAnimation();
  const bounce = useAnimation();
  const bouncerev = useAnimation();
  const isDesktop = window.innerWidth >= 768;

  const handleScroll = () => {
    const isDesktop = window.innerWidth >= 768;
    if (!isDesktop) return;

    scrollani.start({
      x: [0, -50, 50, -50, 0],
      transition: { ease: "easeInOut", yoyo: Infinity, duration: 4 },
    });

    righttoleft.start({
      x: [120, 0],
      transition: { ease: "easeInOut", yoyo: Infinity, duration: 2 },
    });

    controls.start({
      y: [0, 50, 0],
      transition: { duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "loop" },
    });

    bounce.start({
      x: [0, 80, 0],
      transition: { yoyo: Infinity, duration: 4, ease: "easeInOut" },
    });

    bouncerev.start({
      x: [0, -80, 0],
      transition: { yoyo: Infinity, duration: 4, ease: "easeInOut" },
    });
  };

  useEffect(() => {
    setupHoverEffect(".card3d");
    const isDesktop = window.innerWidth >= 768;
    if (!isDesktop) return;

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollani]);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 768;
    if (!isDesktop) return;

    scrollani.start({
      x: [0, -50, 50, -50, 0],
      transition: { yoyo: Infinity, duration: 4 },
    });

    bounce.start({
      x: [0, 80, 0],
      transition: { yoyo: Infinity, duration: 4, ease: "easeInOut" },
    });

    bouncerev.start({
      x: [0, -80, 0],
      transition: { yoyo: Infinity, duration: 4, ease: "easeInOut" },
    });

    controls.start({
      y: [0, 50, 0],
      transition: { duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "loop" },
    });
  }, [controls]);

  return (
    <div className="relative py-10 bg-custom overflow-hidden md:h-screen">
      
      
     {
      isDesktop &&  <div className=" absolute w-[100%] h-[100%] opacity-10">
      <Texture />
    </div>
     }


      <div className="relative mt-20 md:mt-52 md:flex justify-evenly md:gap-5 ">

        <div className="">
        <div className=" flex flex-col">
          
          <div className=" rounded-xl flex flex-col justify-center firstpage_i_am_coder_line mx-8 p-4 md:p-16">

            <motion.div animate={scrollani}  className="overflow-hidden p-4">
              <h1 className="text-xl md:text-4xl text-neutral-300">
                I'M
                <span className="ml-4 md:ml-10 font-bold text-3xl md:text-7xl text-yellow-400">
                  the coder boy
                </span>
              </h1>
            </motion.div>

            <div className="h-[1px] my-6 bg-[#c4bebe]"></div>
            
        
            <motion.div animate={scrollani}
             className="  w-[290px]  overflow-hidden md:w-[500px] ml-4 mt-2 md:mt-4  font-serif font-semibold text-lg text-neutral-300">
             Welcome! I am a passionate software engineer with hands-on experience from internships at Amazon in Germany and Netflix, specializing in developing and optimizing software solutions. I have a strong background in web development and a proven track record of enhancing user experiences through innovative features and functionalities. Additionally, I run an Instagram page where I offer services such as portfolio website development. Let me help you create stunning, functional websites that showcase your unique brand and skills.
            </motion.div>
         

          </div>

{/* social links */}
          <motion.div animate={scrollani}
                    
          className="w-[370px] md:w-[694px] shadow-xl shadow-slate-500 hover:shadow-white md:mt-8 mt-4 mx-5 md:ml-10 md:mx-0 sociallinkdiv flex justify-evenly items-center text-5xl py-6 overflow-hidden">

            <motion.div animate={bounce}  className="sociallinkbutton rounded-2xl p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <a target="__blank" href="https://www.instagram.com/the_coder_boy__">
                <FaInstagram />
              </a>
            </motion.div>

            <motion.div animate={bouncerev} className="sociallinkbutton rounded-2xl p-2 bg-gradient-to-r from-cyan-500 to-blue-500">
              <a target="__blank" href="https://in.linkedin.com/">
                <FaLinkedin />
              </a>
            </motion.div>
            <motion.div animate={bounce} className="sociallinkbutton rounded-2xl p-2 bg-gradient-to-r from-neutral-900 to-black text-white">
              <a target="__blank" href="https://github.com/">
                <FaGithub />
              </a>
            </motion.div>
            <motion.div animate={bouncerev} className="sociallinkbutton rounded-2xl p-2 bg-white">
              <a target="__blank" href="https://x.com/">
                <FaXTwitter />
              </a>
            </motion.div>
          </motion.div>
        </div>

        </div>

        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={controls}
          onHoverStart={() => controls.stop()}
          onHoverEnd={() =>
            controls.start({
              y: [0, 50, 0],
              transition: { duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "loop" },
            })
          }
          className="card3d shadow-2xl shadow-zinc-400 hover:shadow-white grayscale hover:grayscale-0 sociallinkdiv mx-10 md:mx-0 md:p-0 mt-16 mb-10 md:mt-0 sm:w-[350px] md:w-[510px]"
        >
          <img className="aspect-[3/4] border-[2px]  object-cover " src={hannanImage} alt="404" />
        </motion.div>
      </div>
    </div>
  );
};

export default FirstPage;
