import React from 'react'
import pic2 from '../assets/pic2.jpg'

const Analytics = () => {
  return (
    <div id='about' className='w-full bg-white py-8 px-4 ' >
       <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4 h-[300px] rounded-lg hover:scale-105 duration-500 ease-in-out'  src={pic2} alt="/" />
        <div className='flex flex-col justify-center'>
          <p className='text-[aqua] font-bold'> WHAT DO WE OFFER</p>
          <h1 className='md:text-4xl sm:text-2xl font-bold py-2'> A new lease at life: for you and your skin. </h1>
          <p>Caring for your skin is our commitment, because our products are tailor made in understanding of what your skin needs. Give your body the pampering that it deserves, a soap worthy of your skin with the best organic soaps tailor made for you. Show off that beautiful smooth skin, as you feel renewed and confident with S AND D NATURALS products!</p>
         

          <a href="#equipments" className='bg-[aqua] w-[200px] rounded-md  my-4 mx-auto  py-6 text-black text-center font-bold hover:scale-105 duration-500 ease-in-out'>
          <button > Find out More.</button>
          </a>

        </div>

       </div>
    </div>
  )
}

export default Analytics