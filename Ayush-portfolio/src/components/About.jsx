import React from 'react'
import { motion } from 'framer-motion'

import { aboutInfo, assets } from '../assets/assets'

const About = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="section-primary py-20"
    >

        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">About
                <span className="text-purple">{" "}Me</span>
                <p className="text-secondary text-center  mx-auto mb-16">Get to know more about my background and passion</p>
            </h2>

            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="md-w-1/2 rounded-2xl overflow-hidden">
               <motion.img 
               initial={{opacity:0,y:50}}
               whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: false, amount:0.2 }}
      className='object-cover w-full h-full md:w-160'
               src={assets.SecondProfileImg} alt="" />
               </div>

               <motion.div
               initial={{opacity:0,y:50}}
               whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: false, amount:0.2 }}
               className="md:w-1/2">

                <div className="rounded-2xl p-8">
                    <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
                    <p className="text-secondary mb-6">
                        I am a dedicated student of bachelors of computer applications with a strong interest in web development, currently learning technologies like React, PHP,Laravel,Node, Express and MySQL etc. I enjoy building software projects to improve my skills and understand real-world application development.
                    </p>

                    <p className="text-secondary mb-12">I have worked on academic and personal projects such as a Library Management System,Ecommerce, Ai chat plateform and a Portfolio website. I am a quick learner and focusing on UI design and basic backend functionality. I am eager to learn, grow, and gain practical experience in software development.!</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {
                            aboutInfo.map((data,index)=>(
  <div key={index} className="surface-card rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
    <div className="text-purple font-bold text-4xl mb-4">
        <data.icon />
    </div>
    <h3 className="text-xl font-semibold mb-3">{data.title}</h3>
    <p className="text-secondary">{data.description}</p>
  </div>
                            ))
                        }
                    </div>
                </div>

               </motion.div>
            </div>
        </div>

     </motion.div>
  )
}

export default About
