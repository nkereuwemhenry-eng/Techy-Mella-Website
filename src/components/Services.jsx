import React from 'react'
import Title from './Title'
import strategyIcon from '../assets/strategy logo.png'
import socialIcon from '../assets/social icon.png'
import consultationIcon from '../assets/one on one icon.png'
import trainingIcon from '../assets/training icon.png'
import Servicecard from './Servicecard'
import { motion } from "motion/react"

const Services = () => {
    const servicesData = [
        {
        title: 'Brand and Content Strategy',
        description: 'We help you develop a comprehensive brand and content strategy that aligns with your business goals and resonates with your target audience.',
        icon: strategyIcon
         },
          {
        title: 'Social Media Management',
        description: 'We manage your social media presence, creating engaging content, scheduling posts, and analyzing performance to ensure your brand stays relevant and visible.',
        icon: socialIcon
         },
         {
        title: '1:1 Consultation',
        description: 'We provide personalized consultation sessions to help you navigate your social media strategy and achieve your business objectives.'
        , icon: consultationIcon
         },
         {
        title: 'Virtual/In-Person Training',
        description: 'We offer training sessions, both virtual and in-person, to equip you and your team with the skills and knowledge needed to effectively manage your social media presence.'
        , icon: trainingIcon
        },

]
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.5 }}
    id='services' className='relative mx-auto flex w-full max-w-7xl flex-col items-center gap-7 px-4
    pt-30 text-gray-700 dark:text-white sm:px-8 lg:px-12 xl:px-16'>
        <Title title='What We Offer' desc='We help brands get seen, build their audience, and turn engagement into opportunities.' />

        <div className='grid w-full grid-cols-1 gap-6 md:grid-cols-2'>
          {servicesData.map((service, index) => (
            <Servicecard key={service.title} service={service} index={index} />
          ))}
        </div>


      
    </motion.div>
  )
}

export default Services
