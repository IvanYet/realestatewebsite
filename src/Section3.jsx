import React from 'react'
import { Button } from '@mantine/core'

const Section3 = () => {
  return (

    <div className='relative mt-[10em]'>
      <img className="relative h-[25em] sm:w-[100%] sm:h-[100%]" src="../src/assets/sec3.jpg" alt=""/>
      <div className='absolute top-0 left-0 text-white flex flex-col text-center justify-center items-center sm:gap-[2em]' >
        <h1 className='mt-[1em] sm:mt-[2em] sm:text-5xl'>The Modernist</h1>
        <p className='px-[1em] sm:px-[2em] sm:text-xl '>Concrete, wood, and metal dance together. Polished concrete floors meet warm oak cabinetry, while steel beams frame breathtaking vistas.A tranquil courtyard with a koi pond welcomes you. Inside, neutral tones, bamboo accents, and a meditation room evoke serenity—a modern retreat for the soul.Do not miss the opportunity to visit our exhibition!</p>
        <br/>
        <Button  className='w-[9em] text-black' variant="filled" color="yellow" size="xl" radius="xl">Learn More</Button>
      </div>
      <div className='w-full h-60 bg-white'></div>
    </div>
  )
}

export default Section3
