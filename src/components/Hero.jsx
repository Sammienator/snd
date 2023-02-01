import React from 'react'

const Hero = () => {
  return (
    <div id='hero' className='text-black'>
        <div className='max-v-[100px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#E63E00] font-bold p-2 text-5xl '> S&D NATURALS</p>
            {/* <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'> Grow with Us</h1> */}
            <div className='flex justify-center items-center'>
                <p className='md:text=5xl sm:text-4xl text-xl font-bold py-4 italic'> Feel Good and Do Good!</p>
            </div>

            {/* <p className='md:text-5xl sm:text-5xl text-xl font-bold pt-2 text-white '> A Soap So Good, Not Buying It Seems Rude </p> */}

            <button className='bg-[#E63E00] w-[200px] rounded-md font-bold my-6 mx-auto py-3  text-white hover:bg-black scale-105 duration-500 ease-in-out '> Get Started  </button>

        </div>
    </div>
  )
} 

export default Hero 