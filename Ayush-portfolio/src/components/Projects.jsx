import { motion } from 'framer-motion'
import React from 'react'
import { projects } from '../assets/assets'
import ProjectCard from './ProjectCard'
import { ArrowRight } from 'lucide-react'

const Projects = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={sectionVariants}
      viewport={{ once: false, amount: 0.1 }}
      id='projects'
      className='section-primary block py-20 scroll-mt-24'
    >
<div className="container mx-auto px-4 sm:px-6">
    <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-4">My 
        <span className="text-purple">Projects</span>
    </motion.h2>
    <motion.p variants={itemVariants} className="text-secondary text-center max-w-2xl mx-auto mb-6">A collection of my recent work</motion.p>

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {
            projects.map((project,index)=>(
          <motion.div key={index} variants={itemVariants}>
            <ProjectCard {...project} />
          </motion.div>
            ))
        }
    </div>

    <motion.div variants={itemVariants} className="text-center mt-12">
        <a href="#" className="btn-secondary inline-flex items-center px-6 py-3 rounded-lg font-medium transiton duration-300">
            <span className="">View More Projects</span>
                <ArrowRight className='ml-2' />
            
        </a>
    </motion.div>
</div>

    </motion.div>

  )
}

export default Projects
