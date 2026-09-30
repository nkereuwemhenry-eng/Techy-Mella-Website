import React from 'react'
import facebook from '../assets/facebook image.png'
import instagram from '../assets/instagram icon.png'
import linkedin from '../assets/linkedin icon.png'
import { motion } from "motion/react"


const VerifiedBy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
    className='flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40
     gap-10 text-gray-700 dark:text-white/80'>
      <motion.h3
       initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
      className='font-semibold'>Verified On All Social Media Platforms</motion.h3>
      <motion.div
       initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
      className='flex justify-center items-center flex-wrap gap-10 m-4'>
        <motion.img
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0},
          }}
          transition={{ duration: 0.4 }}
        src={facebook} alt="Facebook" className='max-h-5 sm:max-h6 dark:drop-shadow-xl' />
        <motion.img
        variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0},
          }}
          transition={{ duration: 0.4 }}
        src={instagram} alt="Instagram" className='max-h-5 sm:max-h6 dark:drop-shadow-xl' />
        <motion.img
        variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0},
          }}
          transition={{ duration: 0.4 }}
        src={linkedin} alt="LinkedIn" className='max-h-5 sm:max-h6 dark:drop-shadow-xl' />

      </motion.div>
    </motion.div>
  )
}

export default VerifiedBy
