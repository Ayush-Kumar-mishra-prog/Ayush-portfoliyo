import React, { useEffect, useMemo, useState } from "react";
import { easeInOut, motion as Motion } from "framer-motion";

import { assets } from "../assets/assets";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const roles = useMemo(() => [
    "Full Stack Devloper",
    "Backend Devloper",
    "Frontend Devloper",
    "MERN Stack  Devloper"
  ], []);

  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeoutId;

    if (!isDeleting && displayText === currentRole) {
      timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, 1000);
    } else if (isDeleting && displayText === "") {
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
      }, 200);
    } else {
      timeoutId = setTimeout(
        () => {
          const nextText = isDeleting
            ? currentRole.slice(0, displayText.length - 1)
            : currentRole.slice(0, displayText.length + 1);

          setDisplayText(nextText);
        },
        isDeleting ? 45 : 90
      );
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <Motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="hero-shell min-h-screen flex items-center pt-28 sm:pt-32 md:pt-20 pb-16"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <Motion.div
          initial={{ opacity: 0, x: -36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
          className="mt-8 sm:mt-10 md:mt-0 md:w-1/2 mb-10 md:mb-0"
        >
          <p className="inline-flex items-center gap-2 chip rounded-full px-4 py-2 text-sm mb-5">
            Available for projects
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Hi, I am
            <span className="text-purple"> Ayush Kumar Mishra</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 min-h-[3rem] md:min-h-[3.5rem]">
            <span className="typewriter-dynamic">{displayText}</span>
          </h2>
          <p className="text-lg text-secondary mb-8 max-w-xl">
            I can create stunning web experience with morden technoliges and
            innovations designs
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="https://github.com/Ayush-Kumar-mishra-prog" className="btn-primary inline-flex items-center px-6 py-3 rounded-lg font-medium transition duration-300">
                     <FaGithub className='mr-2' />   <span className="">Github</span>
                            
                        
                    </a>
         

            <a href="https://www.linkedin.com/in/ayush-kumar-mishra-47bb24362" className="btn-secondary inline-flex items-center px-6 py-3 rounded-lg font-medium transition duration-300">
                     <FaLinkedin className='mr-2' />   <span className="">Linkedin</span>
                            
                        
                    </a>
          </div>
        </Motion.div>

        {/* Right side content */}

        <Motion.div
          initial={{ opacity: 0, scale: 0.9, x: 36 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="image-glow-frame relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute bg-purple-400/70 inset-2 rounded-full border border-[var(--border-soft)]"></div>
              <Motion.img
                animate={{ y: [0, -20, 0], rotate: [0, 1.5, 0, -1.5, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: easeInOut,
                }}
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 animate-float border-4 border-[var(--surface-strong)] shadow-[0_18px_45px_rgba(0,0,0,0.18)]"
                src={assets.profileImg}
                alt="profile_image"
              />
          </div>
        </Motion.div>
      </div>
    </Motion.div>
  );
};

export default Hero;
