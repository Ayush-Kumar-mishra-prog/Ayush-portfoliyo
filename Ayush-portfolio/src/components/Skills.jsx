import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../assets/assets'

const Skills = () => {
  return (
    <motion.div
    initial={{opacity:0,y:50}}
               whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount:0.2 }}

      id='skills'
      className='section-secondary py-20'

    >
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">
                My <span className="text-purple">Skills</span>
            </h2>
            <p className="text-secondary text-center mx-auto mx-w-2xl mb-16">Technologies I work to bring ideas to life</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {
                    skills.map((skill,index)=>(
 <div  key={index} className="surface-card rounded-2xl p-6 hover:-translate-y-2 transition duration-300 cursor-pointer">
    <div className="flex items-center mb-4">
        <skill.icon className='w-12 h-12 text-purple mr-6' />
        <h3 className="text-xl font-semibold">{skill.title}</h3>
    </div>

    <p className="text-secondary mb-4">
        {skill.description}
    </p>

    <div className="flex flex-wrap gap-2">
        {skill.tags.map((tech)=>(
            <span key={tech} className="chip px-3 py-1 rounded-full text-sm">{tech}</span>
        ))}
    </div>
 </div>
                    ))
                }
            </div>
        </div>

    </motion.div>
  )
}

export default Skills
