import React from 'react'
import { Button } from '@mantine/core'
import { Icon } from '@iconify/react'

const Section2 = () => {
  return (
    <div className='mt-[10em] relative'>
        <div className='absolute top-0 left-0 bg-black h-[70em] w-full opacity-5 '></div>
        <div className='flex justify-center text-5xl mb-[2em]'>
            <h1 className='mt-[1em]'>Explore</h1>
        </div>
        <div className='flex flex-col sm:flex-row mx-10 gap-[6em]'>
            <div className='flex flex-col'>
                <h1>The Hills</h1>
                <p>“This modern abode embraces simplicity, with clean lines, uncluttered spaces, and a monochromatic palette. Floor-to-ceiling windows flood each room with natural light, blurring the boundaries between indoors and outdoors.”</p>
            </div>

            <div className='flex flex-col'>
                <h1>Naturalist</h1>
                <p>“Angular forms intersect seamlessly, creating a symphony of glass, concrete, and steel. The cantilevered design defies gravity, while the floating staircase adds drama to the entryway.”</p>
            </div>
            
            <div className='flex flex-col'>
                <h1>Sweet Home</h1>
                <p className="mb-[-2em]">“Nestled among tall trees, this home blurs the line between architecture and forest. Cedar-clad walls mirror the surrounding trunks, and expansive decks invite residents to commune with nature.” </p>
            </div>
        </div>
        <div className='flex justify-center mt-[4em]'>
            <Button className="mb-[2em] text-black hover:text-black" variant="light" color="yellow" size="xl" radius="xl">Gallery<Icon className="ml-[0.5em] h-[2em] w-[1.5em]" icon="memory:arrow-right"/></Button>
        </div>
      
    </div>
  )
}

export default Section2
