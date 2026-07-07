import React, { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle')
  const contactEmail = 'ayushrajmishra960@gmail.com'

  const handleSubmit = async (event) => {
    event.preventDefault()
    setFormStatus('sending')

    const formData = new FormData(event.currentTarget)
    formData.append('_subject', 'New portfolio contact message')
    formData.append('_template', 'table')
    formData.append('_captcha', 'false')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Message could not be sent')
      }

      event.currentTarget.reset()
      setFormStatus('success')
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <Motion.div
    initial={{opacity:0,y:50}}
               whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount:0.2 }}
      id='contact'
      className='section-primary pt-20 pb-28 md:pb-32 scroll-mt-24'
      >

        <div className="container mx-auto px-6 ">
            <h2 className="text-3xl font-bold text-center mb-4">
                Get In  <span className="text-purple">Touch</span>
            </h2>
            <p className="text-secondary text-center max-w-2xl mx-auto  mb-16">Have a project in mind or want to collabrate ? Let's talk</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <Motion.div whileHover={{ y: -6 }} className="surface-card rounded-3xl p-6 md:p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="">
                            <label htmlFor="name" className='block mb-2'>Your Name</label>
                            <input id="name" name="name" type="text" className="input-surface w-full mb-6 rounded-lg px-4 py-3 outline-none" required />
                        </div>
                        <div className="">
                            <label htmlFor="email" className='block mb-2'>Your Email Address</label>
                            <input id="email" name="email" type="email" className="input-surface w-full mb-6 rounded-lg px-4 py-3 outline-none" placeholder='email@example.com' required />
                        </div>

                         <div className="">
                            <label htmlFor="message" className='block mb-2'>Your Message</label>
                            <textarea id="message" name="message" className="input-surface w-full h-40 rounded-lg px-4 py-3 outline-none mb-6 resize-none" placeholder='Your message' required />
                        </div>

                        <button
                            type='submit'
                            disabled={formStatus === 'sending'}
                            className="btn-primary w-full px-6 py-3 rounded-lg font-medium transition duration-300 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>

                        {formStatus === 'success' && (
                            <p className="text-sm text-emerald-300">Message sent successfully. I will receive it by email.</p>
                        )}

                        
                    </form>
                </Motion.div>

                <Motion.div whileHover={{ y: -6 }} className="surface-card space-y-8 rounded-3xl p-6 md:p-8">
                    <div className="flex items-start">
                        <div className="text-purple text-2xl mr-4">
                            <FaMapMarkerAlt />
                        </div>
                        <div className="">
                            <h3 className="text-lg font-semibold mb-2">Location</h3>
                            <p className="text-secondary">Mathura</p>
                        </div>
                    </div>

                    <div className="flex items-start mt-2">
                        <div className="text-purple text-2xl mr-4">
                            <FaEnvelope />
                        </div>
                        <div className="">
                            <h3 className="text-lg font-semibold mb-2">Email</h3>
                            <p className="text-secondary">{contactEmail}</p>
                        </div>
                    </div>

                    <div className="flex items-start mt-2">
                        <div className="text-purple text-2xl mr-4 mb-6">
                            <FaPhone />
                        </div>
                        <div className="">
                            <h3 className="text-lg font-semibold mb-2">Phone</h3>
                            <p className="text-secondary">+91 7302852204</p>
                        </div>
                    </div>

                    <div className="pt-4">
                        <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
                        <div className="flex space-x-4">
                            <a href="https://github.com/Ayush-Kumar-mishra-prog" className=" w-12 h-12 rounded-full text-white flex items-center bg-black  hover:bg-white hover:text-black justify-center transition duration-300">
                                <FaGithub />
                            </a>

                             <a href="https://www.facebook.com/profile.php?id=61564353241438" className=" w-12 h-12 rounded-full flex items-center justify-center text-purple bg-black hover:bg-purple hover:text-white transition duration-300">
                                <FaFacebook />
                            </a>

                             <a href="www.linkedin.com/in/ayush-kumar-mishra-47bb24362" className=" w-12 h-12 rounded-full flex items-center justify-center text-purple bg-black hover:bg-purple hover:text-white transition duration-300">
                                <FaLinkedin />
                            </a>

                             <a href="https://www.instagram.com/ayush__kumar__mishra_/" className=" w-12 h-12 rounded-full flex items-center justify-center text-pink bg-black hover:bg-pink hover:text-white transition duration-300">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </Motion.div>
            </div>
        </div>
    </Motion.div>
  )
}

export default Contact
