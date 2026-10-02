import React from 'react'
import { motion } from "motion/react"

const Servicecard = ({service, index}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y:30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.5 }}
      viewport={{ once: true }}
    className='relative w-full overflow-hidden rounded-xl border
    border-gray-200 dark:border-gray-700 hover:border-[#D4AF37] shadow-xl shadow-gray-100
    dark:shadow-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[#D4AF37]/30'>
        <div className='pointer-events-none blur-2xl rounded-full bg-gradient-to-r
        from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] absolute -top-32 -left-32
        transition-opacity duration-500 mix-blend-lighten opacity-70'>
        </div>
        <div className='flex h-full items-start gap-4 p-5
        rounded-[10px] bg-white dark:bg-gray-900 z-10 relative'>

                <div className='shrink-0 rounded-full bg-gray-100 dark:bg-gray-700'>
              <img src={service.icon} alt="" className='m-2 h-16 w-16 rounded-full
                    bg-white object-contain dark:bg-gray-900' />
                </div>
                <div className='min-w-0 flex-1'>
                    <h3 className='font-bold'>{service.title}</h3>
                    <p className='text-sm mt-2'>{service.description}</p>
                </div>

        </div>
    </motion.div>
  )
}

export default Servicecard
