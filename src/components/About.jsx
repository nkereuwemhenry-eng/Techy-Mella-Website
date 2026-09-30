import React from 'react'
import CEOImage from '../assets/Ceophoto.jpg'
import { motion } from "motion/react"


const About = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    id='about' className='px-6 py-16 sm:px-10 lg:px-20'>
      <div className='mx-auto max-w-5xl rounded-[28px] border border-[#8a4b1b]/80 bg-[linear-gradient(135deg,#f8e4ae_0%,#d7a64f_18%,#b8732d_35%,#8c431d_52%,#d6a152_68%,#b57a31_82%,#7f2c1a_100%)] p-5 shadow-[0_20px_45px_rgba(15,23,42,0.12)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(121,89,14,0.22)] dark:border-[#d3a857] dark:bg-[linear-gradient(135deg,#4b2a0f_0%,#8f5519_22%,#d8a75d_48%,#9d6327_68%,#54270f_100%)] sm:p-8 lg:p-10'>
        <div className='flex flex-col gap-8 md:flex-row md:items-center'>
          <div className='md:w-1/3'>
            <div className='overflow-hidden rounded-[24px] border border-[#D4AF37] bg-gray-100 shadow-md'>
              <motion.img
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                src={CEOImage}
                alt='Mabel Samuel'
                className='h-[330px] w-full object-cover object-center sm:h-[380px] md:h-[420px]'
              />
            </div>
          </div>

          <div className='md:w-2/3'>
            <h2 className='mb-4 text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-white'>
              Meet the CEO
            </h2>

            <p className='text-base leading-7 text-gray-700 sm:text-lg dark:text-white/75'>
              Mabel Samuel is a visionary Social Media Strategist and digital entrepreneur
              passionate about helping brands stand out, connect meaningfully with their
              audiences, and grow with purpose. With a blend of creativity, strategic thinking,
              and a deep understanding of the digital landscape, she transforms ideas into
              impactful digital experiences. She doesn’t just build an online presence—she builds
              brands that command attention, inspire connection, and create lasting impact.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
