import React from 'react'
import { Textarea } from '@mantine/core'

const Service = () => {
  return (
    <div className='relative h-[20em] w-full'>
      <img className='relative object-cover h-[20em] w-full'  src='../src/assets/contacts.jpg'/>
      <div className='absolute top-0 text-white'>
        <h1 className='ml-[1em] mt-[2em] sm:ml-[2em] sm:mt-[2em] sm:text-6xl'>Contact Us ! </h1>
        <p className='sm:ml-[8em] mx-[2em] mt-[1em]'>It would be a pleasure working with our clients to find their dream home, feel free to each out to us whenever</p>
        
        <div className='sm:mx-[8em] mx-[2em] mt-[2em]'>
            <Textarea label="Full Name" placeholder="Full Name"/>
            <Textarea label="Email" placeholder="Email"/>
            <Textarea minRows={9} autosize label="Comment" placeholder="Comment"/>
        </div>
      </div>

      
    </div>
  )
}

export default Service
