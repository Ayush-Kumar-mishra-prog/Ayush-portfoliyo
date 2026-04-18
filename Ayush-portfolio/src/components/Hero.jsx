import React, { useEffect, useState } from "react";
import { easeInOut, motion } from "framer-motion";

import { assets } from "../assets/assets";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const roles = [
    "Full Stack Devloper",
    "Backend Devloper",
    "Frontend Devloper",
    "Mobile App Devloper",
    
  ];

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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="hero-shell min-h-screen flex items-center pt-28 sm:pt-32 md:pt-20 pb-16"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I am
            <span className="text-purple"> Ayush Kumar Mishra</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 min-h-[3rem] md:min-h-[3.5rem]">
            <span className="typewriter-dynamic">{displayText}</span>
          </h2>
          <p className="text-lg text-secondary mb-8">
            I can create stunning web experience with morden technoliges and
            innovations designs
          </p>

          <div className="flex space-x-4">
            <a href="https://github.com/Ayush-Kumar-mishra-prog" className="btn-primary inline-flex items-center px-6 py-3 rounded-lg font-medium transiton duration-300">
                     <FaGithub className='mr-2' />   <span className="">Github</span>
                            
                        
                    </a>
         

            <a href="www.linkedin.com/in/ayush-kumar-mishra-47bb24362" className="btn-secondary inline-flex items-center px-6 py-3 rounded-lg font-medium transiton duration-300">
                     <FaLinkedin className='mr-2' />   <span className="">Linkedin</span>
                            
                        
                    </a>
          </div>
        </div>

        {/* Right side content */}

        <div className="md-w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink opacity-70 blur-2xl"></div>
            <div className="absolute bg-purple-400 inset-2 rounded-full border border-[var(--border-soft)]"></div>
              <motion.img
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: easeInOut,
                }}
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 animate-float border-4 border-[var(--surface-strong)] shadow-[0_18px_45px_rgba(0,0,0,0.18)]"
                src={assets.profileImg}
                alt="profile_image"
              />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
