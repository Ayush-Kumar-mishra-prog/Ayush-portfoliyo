import React from 'react'

const ProjectCard = ({ title, description, image, tech }) => {
  return (
    <div className='project-glow-card group surface-card rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer'>
        <img src={image} alt={title} className="w-full h-60 object-cover transition duration-500 group-hover:scale-105" />

        <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-secondary mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {tech.map((item,index)=>(
<span key={index} className="chip px-3 py-1 rounded-full text-sm">{item}</span>
                ))}
            </div>

            <div className="flex gap-2 ">
                <a href="#" className="btn-primary flex-1 text-center rounded-lg px-4 py-2 font-medium transition duration-300">View Demo</a>

                <a href="" className="btn-secondary flex-1 text-center px-4 py-2 font-medium rounded-lg transition duration-300">View Code</a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
