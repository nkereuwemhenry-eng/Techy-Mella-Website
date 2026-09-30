import React, { useState } from 'react'
import Title from './Title'
import { motion } from "motion/react"

const phoneNumber = '2348091153978'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const WhatsAppText = encodeURIComponent(
      `Hello Techy Mell, my name is ${formData.name}. Email: ${formData.email}. Message: ${formData.message}`
    )

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${WhatsAppText}`
    window.open(whatsappLink, '_blank', 'noopener,noreferrer')
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    id='contact-us' className='flex flex-col items-center gap-7 px-4 pt-30 text-gray-700 sm:px-12 lg:px-24 xl:px-40 dark:text-white'>
      <Title
        title='Reach out to us'
        desc='From strategy to execution, we turn engagement into opportunities.'
      />

      <div className='flex flex-col items-center gap-3 text-center'>
        <p className='text-sm text-gray-600 dark:text-gray-300'>Prefer a faster reply?</p>
        <a
          href={`https://wa.me/${phoneNumber}`}
          target='_blank'
          rel='noreferrer'
          className='inline-flex items-center gap-2 rounded-full border border-[#D4AF37] bg-[#fffaf0] px-5 py-2.5 text-sm font-semibold text-[#8a5a14] transition hover:scale-[1.01] dark:border-[#d9b857] dark:bg-gray-900 dark:text-[#f5d77d]'
        >
          Chat on WhatsApp
        </a>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      onSubmit={handleSubmit} className='grid w-full max-w-3xl gap-4 sm:grid-cols-2'>
        <div className='sm:col-span-1'>
          <label className='mb-2 block text-sm font-medium'>Your Name</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Enter Your Name'
            className='w-full rounded-lg border border-gray-300 bg-white p-3 text-sm outline-none placeholder:text-gray-400 dark:border-gray-600 dark:bg-gray-900'
            required
          />
        </div>

        <div className='sm:col-span-1'>
          <label className='mb-2 block text-sm font-medium'>Email Address</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter Your Email'
            className='w-full rounded-lg border border-gray-300 bg-white p-3 text-sm outline-none placeholder:text-gray-400 dark:border-gray-600 dark:bg-gray-900'
            required
          />
        </div>

        <div className='sm:col-span-2'>
          <label className='mb-2 block text-sm font-medium'>Your Message</label>
          <textarea
            rows='5'
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='How can we help?'
            className='w-full rounded-lg border border-gray-300 bg-white p-3 text-sm outline-none placeholder:text-gray-400 dark:border-gray-600 dark:bg-gray-900'
            required
          />
        </div>

        <div className='sm:col-span-2 flex flex-col items-center gap-3'>
          <button
            type='submit'
            className='rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-[#c79e1f]'
          >
            Send Message via WhatsApp
          </button>
          <p className='text-xs text-gray-500 dark:text-gray-400'>Or send us an email below.</p>
        </div>
      </motion.form>
    </motion.section>
  )
}

export default ContactUs
