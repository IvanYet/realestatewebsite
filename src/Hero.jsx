import React from 'react'
import { Text, Mark } from '@mantine/core'
import { Button } from '@mantine/core'

const Hero2 = () => {
  return (
    <div className='relative'>

        <img className="-z-10 w-full h-full" src="../src/assets/hero.jpg" alt=""/>
        <div className='absolute top-0 left-0 text-white ml-[0.5em] sm:ml-[1em]' >
          <h1 className='sm:text-[5em]'>Find your dream home</h1>
          <Text className='sm:text-[2em] font-p'>
            <Mark>explore and discover</Mark> houses of the latest design
          </Text>
          <br/>
          <Button className='w-[9em] sm:mt-[1em] sm:w-[10em] font-p text-black font-bold' variant="filled" color="rgba(250, 187, 0, 1)" size="md" radius="xs">Learn More</Button>
        </div>
    </div>
  )
}

export default Hero2
