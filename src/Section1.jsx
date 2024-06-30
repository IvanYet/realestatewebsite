import React from 'react'

const Section1 = () => {
  return (
    <div className='mt-[10em]'>

        <div className='flex justify-center'> 
            <h1 className='mb-[2em] text-6xl '>Gardens Bay</h1>
        </div>
        
        <div className='w-auto sm:grid grid-cols-2 gap-[5em] mx-[2em] bg-orange-100 rounded-2xl'>
          <div>
            <img className="object-cover h-[20em] w-full rounded-2xl mr-[2em]" src='../src/assets/sec1.jpeg'></img>
          </div>  
          <div className='flex flex-col mx-[2em] mt-[2em]'>
            <h1>De Cabin</h1>
            <p className='mb-[1em]'>A cozy house located near the calm local river in the greenish forest . This house offers warmth and security due its cabin-like design and even have a ballcany on the first floor. Enjoy the sounds of birds chirping in the morning while you sip coffee or tea or whatever you please in the morning .It is well-suited for those who like a more laid back lifestyle with a slower pace with life  </p>
          </div>
        </div>


        <div className="bg-white h-[4em] w-full"></div>
        <div className='w-auto sm:grid  grid-cols-2 gap-[5em] mx-[2em] bg-slate-200 rounded-2xl'>
          <div className='flex flex-col mx-[2em] mt-[2em]'>
            <h1 className='mt-[1em]'>The Woods</h1>
            <p>Located on Canada’s Vancouver Island, the Woods combines Japanese, Scandinavian, and Pacific Northwest aesthetic.Generous sliding glass doors immerse guests in nature, while the charcoal black exterior complements the rocky coastline.It is suitable for those who wants to live in nature but still wants a touch of modernity</p>
          </div>
          <img className="object-cover w-full sm:h-[20em] rounded-2xl mr-[2em]" src='../src/assets/sec2.jpeg'></img>
        </div>
    </div>
  )
}

export default Section1
