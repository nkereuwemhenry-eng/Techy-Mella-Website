import React, { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VerifiedBy from './components/VerifiedBy'
import Services from './components/Services'
import About from './components/About'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} relative min-h-screen bg-[#F6F8FC] dark:bg-gray-950`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <VerifiedBy />
      <Services />
      <About />
      <ContactUs />
      <Footer theme={theme}/>
    </div>
  )
}

export default App
