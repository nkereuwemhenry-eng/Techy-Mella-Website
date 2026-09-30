import React from 'react'
import logo from '../assets/logo.png'
import facebook from '../assets/facebook image.png'
import instagram from '../assets/instagram icon.png'
import linkedin from '../assets/linkedin icon.png'
import whatsapp from '../assets/whatsapp.jpg'
import { motion } from "motion/react"

const phoneNumber = '2348091153978'

const Footer = ({theme}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40
    px-4 sm:px-10 lg:px-24 xl:px-40'>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      className='flex flex-col md:flex-row md:items-start justify-between gap-10'>
        <div className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
             <img src={logo} className='w-10 sm:w-20' alt="Techy Mell logo" />
             <p className='max-w-md'>From strategy to <span className='text-yellow-500'>execution!!!</span>...</p>

          <ul className='flex gap-6'>
            <li><a className='hover:text-primary' href="#hero">Home</a></li>
            <li><a className='hover:text-primary' href="#about">About</a></li>
            <li><a className='hover:text-primary' href="#services">Services</a></li>
            <li><a className='hover:text-primary' href="#contact-us">Contact Us</a></li>
          </ul>
        </div>
        <div className='text-gray-600 dark:text-gray-400'>
          <h3 className='font-semibold'>Subscribe to our newsletter</h3>
          <p className='text-sm mt-2 mb-6'>The latest updates articles, and resources, sent to your inbox weekly.</p>
          <div className='flex gap-2 text-sm'>
            <input type="email" placeholder='Enter your email' className='w-full p-3 text-sm outline-none rounded
            dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500' />
            <button className='bg-primary text-white rounded px-6'>Subscribe</button>
          </div>
        </div>
      </motion.div>
      <hr className='border-gray-300 dark:border-gray-600 my-6'/>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      className='pb-6 text-sm text-gray-500 flex justify-center
      sm:justify-between gap-4 flex-wrap'>
        <p>© {new Date().getFullYear()} Techy Mella-All rights reserved.</p>
        <div className='flex items-center gap-3'>
          <a href={`https://wa.me/${phoneNumber}`} target='_blank' rel='noreferrer' aria-label='Chat on WhatsApp'>
            <img src={whatsapp} className='h-5 w-5 object-contain shrink-0 rounded-full' alt="WhatsApp" />
          </a>
          <a href='https://facebook.com' target='_blank' rel='noreferrer' aria-label='Facebook'>
            <img src={facebook} className='w-5 h-5 object-contain shrink-0' alt="Facebook" />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noreferrer' aria-label='Instagram'>
            <img src={instagram} className='w-5 h-5 object-contain shrink-0' alt="Instagram" />
          </a>
          <a href='https://linkedin.com' target='_blank' rel='noreferrer' aria-label='LinkedIn'>
            <img src={linkedin} className='w-5 h-5 object-contain shrink-0' alt="LinkedIn" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Footer
