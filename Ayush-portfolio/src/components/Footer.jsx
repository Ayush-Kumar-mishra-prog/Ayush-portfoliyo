import { motion as Motion } from 'framer-motion'
import React from 'react'

const Footer = () => {
  return (
    <Motion.div
    initial={{opacity:0,y:50}}
               whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount:0.2 }}
    >
  <div className="section-secondary py-8 border-t border-[var(--border-soft)]">
    <div className="mx-auto px-6 text-center">
        <p className="text-secondary ">@ 2026 Created by Ayush kumar misrha.All rights reserver </p>
    </div>
  </div>
    </Motion.div>
  )
}

export default Footer
