import React from 'react'
import { Avatar } from '@mantine/core'

const Section4 = () => {
  return (
    <div className='text-white h-48'>
      <div className='flex flex-row justify-between px-[2em] pb-[2em] sm:pt-[2em] bg-black gap-[2em] lg:gap-[30em] h-full'>

        <div className='hidden sm:block '>
          <Avatar className="h-[4em] w-[4em] bg-yellow-300">
            <img src="../src/assets/logo.png"/>
          </Avatar>
          <br/>
          <p className="text-left">Showcasing the the wonderful neighbourhood around the state , giving clients an easier making their pick on the houses they desire </p>
        </div>

        <div className='flex justify-between lg:gap-[10em] pt-[2em]'>
          <div>
            <p>Services</p>
            <br/>
            <p>Lorem ipsum</p>
            <br/>
            <p>saiusfdhfsd</p>
            <br/>
            <p>sdjsdfjkafks</p>
          </div>

          <div className='lg:pr-[2em]'>
            <p>Menu</p>
            <br/>
            <p>Home</p>
            <br/>
            <p>Services</p>
            <br/>
            <p>Contacts</p>
            <br/>
            <p>Gallery</p>
          </div>
        </div>

      </div>

 

    </div>
  )
}

export default Section4
