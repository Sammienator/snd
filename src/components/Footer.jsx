import React from 'react'
import logo from '../assets/logo.jpeg'



const Footer = () => {
  return (
    <div id='footer' className='bg-grey border shadow-xl'>

        <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>

            <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>


                <div >
                    <img className='h-20  shadow-xl hover:scale-105 duration-500 ease-in-out' src={logo} alt="" />
                </div>

                <div id='icons'  className='flex justify-center  space-x-4 p-4 text-3xl hover:scale-110 duration-300 ease-in-out'>

                 

                </div>

            </div>

            <div className=' flex justify-around space-x-32'>
                <div className='flex flex-col space-y-3 text-black font-bold hover:scale-105 duration-500 ease-in-out'>
                    <a href="#home" className='hover:text-[black]'> Home</a>
                    <a href="#about" className='hover:text-[black]'> About</a>
                    <a href="#product" className='hover:text-[black]'> Products</a>
                    <a href="#footer" className='hover:text-[black]'> Contact</a>



                </div>

                <div className='flex flex-col space-y-3 text-white font-bold hover:scale-105 duration-500 ease-in-out'>
                    <a href="/" className='hover:text-[black]'> About</a>
                    <a href="/" className='hover:text-[black]'> FAQ</a>
                    <a href="/" className='hover:text-[black]'> Community</a>
                    <a href="/" className='hover:text-[black]'> Privacy</a>



                </div>

            </div>

            <div className='flex flex-col justify-between'>
                <form action="">
                    <div className='flex space-x-3'>
                        <input type="text" className="flex px-4 rounded-full focus:outline-black border   " placeholder = 'Your email for updates.' />

                       <button className='px-2 py-2 text-white font-bold rounded-full bg-[black] hover:bg-black focus:outline-none'>
                        Go.

                       </button>

                    

                    </div>
                </form>
                <div className='hidden text-black md:block hover:scale-105 duration-500 ease-in-out'>
                    Copyright &copy; 2023, THE SAMMIENATOR INC.

                </div>

            </div>

        </div>

    </div>
  )
}

export default Footer