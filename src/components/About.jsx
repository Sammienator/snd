import React from 'react'
import pic2 from '../assets/pic2.jpg'

const Analytics = () => {
  return (
    <div id='about' className='w-full bg-white py-8 px-4 ' >
       <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4 h-[300px] rounded-lg hover:scale-105 duration-500 ease-in-out'  src={pic2} alt="/" />
        <div className='flex flex-col justify-center'>
          <p className='text-[white] font-bold'> WHAT DO WE OFFER</p>
          <h1 className='md:text-4xl sm:text-2xl font-bold py-2'> A new lease at life: for you and your skin. </h1>
          <p>Caring for your skin is our commitment, because our products are tailor made in understanding of what your skin needs. Give your body the pampering that it deserves, a soap worthy of your skin with the best organic soaps tailor made for you. Show off that beautiful smooth skin, as you feel renewed and confident with S&D NATURALS products!</p>
         

          <a href="#equipments" className='bg-black w-[200px] rounded-md  my-4 mx-auto  py-6 text-white text-center font-bold hover:scale-105 duration-500 ease-in-out'>
          <button > Find out More.</button>
          </a>

        </div>


       </div>

       <div className='flex flex-col'>
        <h1 className='font-bold underline mt-10 uppercase italic text-3xl'>
          Why are natural soaps better?
        </h1>
        
          


       <div className=" flex flex-col p-6 mx-auto mt-4 m-8  md:space-y-0 md:flex-row italic text-white font-bold" >
       <p className='p-4'> " Home Made natural soaps are CRUELTY FREE. - Handmade using natural ingredients, organic soaps are a kinder, more conscious, and sustainable choice when it comes to soaps. " </p>
            <p className='p-4'> "Home Made natural soaps are better for the environment and local economies. - Currently, most handmade soaps are made by small-scale or home businesses. Buying from them helps them sustain and grow their business. They don’t contain harmful toxins or undergo factory processes that are detrimental to the environment." </p>
            <p className='p-4'> "Home Made natural soaps have natural healing properties - Natural soaps are suited for self-care. organic soaps contain elements like essential oils, herbs, and spice essences, they possess natural healing properties that commercial soaps don’t.It consists of base oils, butters, lye, and additives that are usually from a natural source resulting in beautiful skin. Natural soap actually relieves irritated skin, many times improving psoriasis and eczema." </p>
           <p className='p-4'>  "Home Made natural soaps are distinct and offer more choices and variety. - Compared to commercially produced soaps that typically come in limited varieties, you can choose from a range of natural soaps of different ingredients and unique scents."  </p>
          
       </div>
        
       </div>



    </div>
  )
}

export default Analytics