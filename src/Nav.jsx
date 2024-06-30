import { Avatar, Button } from '@mantine/core'
import React from 'react'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Hero = () => {

  const[menuOpen , setMenuOpen] = useState(false)

  const toggleMenu = () =>{
    setMenuOpen(!menuOpen)
  }
  
  return (
    // Navigation & Hero Section
    <div>
      <div className={`relative transition-all duration-300 ${menuOpen ? 'h-[30vh]' : 'h-[10vh]'} sm:h-[15vh] bg-yellow-100`}>
      <div className='relative h-[10vh] flex justify-between w-[100%] sm:h-[15vh] bg-white items-center px-[1em]'>
        <div className='flex items-center'>
          <Avatar variant="filled" radius="xs" size="md">
            <img src="../src/assets/logo.png"/>
          </Avatar>
          <p className="ml-[0.5em] font-logo font-bold">Homie</p>
        </div>

        <nav className='font-extrabold hidden sm:block'>
          <Link to="/">Home</Link>
          <a href=''>Services</a>
          <Link to="/contacts">Contacts</Link>
          <Link to="/gallery">Gallery</Link>
        </nav>
        
        <div className='absolute right-0 sm:hidden mr-[2em]'>
          <button onClick={toggleMenu}>
            <Icon className ="h-[2em] w-[4em]" icon="mdi:menu"/>
          </button>
        </div>

        {menuOpen && (
          <div>
            <div className='relative w-full h-[10vh] bg-transparent'></div>
            <div className='absolute left-0 sm:hidden h-[20vh] w-full flex flex-col justify-between'>
              <Link to='/' className='block mt-[0.5em] mb-[0.5em] ml-[1em]'>Home</Link>
              <a href='' className='block mt-[0.5em] mb-[0.5em] ml-[1em]'>Services</a>
              <Link to="/contacts" className='block mt-[0.5em] mb-[0.5em] ml-[1em]'>Contacts</Link>
              <Link to="/gallery" className='block mt-[0.5em] mb-[0.5em] ml-[1em]'>Gallery</Link>
            </div>
          </div>
        )}
      </div>
      </div>
    </div>

  )

}

export default Hero
