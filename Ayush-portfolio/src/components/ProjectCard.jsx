import React from 'react'
import { ExternalLink } from 'lucide-react'
import { motion as Motion } from 'framer-motion'
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, description, image, tech,code,demo }) => {
  return (
    <Motion.div
      whileHover={{ y: -10, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className='project-glow-card group surface-card rounded-2xl overflow-hidden cursor-pointer'
    >
        <img src={image} alt={title} className="w-full h-60 object-contain transition duration-500 group-hover:scale-105" />

        <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-secondary mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {tech.map((item,index)=>(
<span key={index} className="chip px-3 py-1 rounded-full text-sm">{item}</span>
                ))}
            </div>

            <div className="flex gap-2 ">
                <a href={demo} className="btn-primary flex-1 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 font-medium transition duration-300">
                  <ExternalLink size={17} />
                  Demo
                </a>

                <a href={code} className="btn-secondary flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 font-medium rounded-lg transition duration-300">
                 <FaGithub size={17} />
                  Code
                </a>
            </div>
        </div>
    </Motion.div>
  )
}

export default ProjectCard
