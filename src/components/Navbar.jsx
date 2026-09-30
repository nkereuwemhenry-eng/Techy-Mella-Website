import { useState } from 'react'
import logo from '../assets/logo.png'
import ThemeTogglebtn from './ThemeTogglebtn'
import { motion } from "motion/react"

const Navbar = ({ theme, setTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <motion.div
    initial={{opacity: 0, y: -50}}
    animate={{ opacity: 1, y: 0 }}
    transition={{duration: 0.6, ease: 'easeOut'}}
     className='flex justify-between items-center px-4 sm:px-12 lg:px-24
       xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl
      font-medium bg-white/50 dark:bg-gray-900/70'>

        <img src={logo} 
        className='w-20 h-auto' alt="Techy Mell logo" /> 

        <div className={`${isMenuOpen ? 'max-sm:translate-x-0' : 'max-sm:translate-x-full'}
        text-Navyblue-700 dark:text-white sm:text-sm max-sm:w-60 max-sm:pl-10
        max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full
        max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20
        flex sm:items-center gap-5 transition-transform`}>

            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className='sm:hidden absolute top-5 right-5 text-2xl'
              aria-label='Close navigation menu'
            >
              &#10005;
            </button>

            <a onClick={()=>setIsMenuOpen(false)} href="#" className='sm:hover:border-b'>HOME</a>
            <a onClick={()=>setIsMenuOpen(false)} href="#about" className='sm:hover:border-b sm:ml-4'>ABOUT</a>
            <a onClick={()=>setIsMenuOpen(false)} href="#services" className='sm:hover:border-b sm:ml-4'>SERVICES</a>
            <a onClick={()=>setIsMenuOpen(false)} href="#contact-us" className='sm:hover:border-b sm:ml-2'>CONTACT US</a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          className='sm:hidden text-2xl'
          aria-label='Open navigation menu'
        >
          &#9776;
        </button>

        <ThemeTogglebtn theme={theme} setTheme={setTheme} />

        <div>
           <a onClick={()=>setIsMenuOpen(false)} href="#contact-us" className='text-sm max-sm:hidden flex
           items-center gap-2 bg-primary text-white px-4 py-2 rounded-full
           cursor-pointer hover:scale-103 transition-all color-gold'>
            BOOK A SESSION ➡</a> 
        </div>                                      
    </motion.div>
  )
}

export default Navbar
