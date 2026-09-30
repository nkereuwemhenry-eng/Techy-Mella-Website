import React from 'react'
import people from '../assets/people.jpg'
import background from '../assets/background.png'
import { motion } from "motion/react"

const Hero = () => {
  return (
    <div id='hero' className='flex flex-col items-center justify-center gap-2
    py-20 px-4 sm:px-12 lg:px-24 xl:px-40 
    text-center w-full overflow-hidden text-gray-700 dark:text-white'>

        <motion.div
          initial={{ opacity: 0, y: 20}}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 0.5, delay:0.7 }}
          viewport={{ once: true }}

        className='inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>
          <img className='w-10 rounded-full' src={people} alt='People who trust Techy Mell' />
            <p className='text-xs font-medium'>Trusted by brands nation wide.</p>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl'>Giving Your Brand It's Desired <span className='bg-gradient-to-r from-[#D4AF37] to-[#C0C0C0] text-transparent bg-clip-text'>Visibility</span></motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
        className='text-sm sm:text-lg font-medium text-gray-600 dark:text-gray-300 max-w-4/5 sm:max-w-lg pb-3'>Creating meaningful interactions between brands and customers.</motion.p>

        <motion.div
          initial={{ opacity: 0, y: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
          viewport={{ once: true }}
        className='relative mt-4 flex w-full items-center justify-center'>
          <img src={background} alt='background image' className='w-full max-w-6xl object-cover' />
          <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
           className='absolute left-1/2 top-[75%] z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-[#c79e1f]'>
            Explore Our Services
          </button>
        </motion.div>
      
    </div>
  )
}

export default Hero
