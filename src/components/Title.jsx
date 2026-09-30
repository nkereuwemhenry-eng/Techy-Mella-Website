import React from 'react'
import { motion } from "motion/react"

const Title = ({title, desc}) => {
  return (
    <div className='flex flex-col items-center text-center'>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      className='mb-4 text-2xl font-semibold tracking-tight sm:text-4xl'>{title}</motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2  }}
        viewport={{ once: true }}
      className='max-w-lg text-sm leading-relaxed text-center text-gray-500
      dark:text-white/75 '>{desc}</motion.p>
    </div>
  )
}

export default Title
