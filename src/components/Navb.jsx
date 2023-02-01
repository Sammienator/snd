import React  from 'react'
// import { AiOutlineClose,AiOutlineMenu } from 'react-icons/ai'
import  logo from '../assets/logo.jpeg'




const Navbar = () => {
    // const [Nav, setNav] = useState(true)

    // const handleNav = () => {
    //     setNav(!Nav)
    // }


  return (

    
    <div  id='back' className= 'flex  justify-between items-center   h-24 max-w-[1240px] mx-auto px-4 text-black  ' >
        


        <img className='w-20  mt-10 shadow-xl '  src={logo} alt=" my pic" />
        

        
        
      <ul className=' flex flex-row   hover:cursor-pointer text-[#008080]  font-bold underline'>
        <li className='p-4 hover:scale-105 duration-500 ease-in-out shadow '><a href="#hero">Home.  </a> </li>
        {/* <li className=' p-4 hover:scale-105 duration-500 ease-in-out shadow '> <a href="#about"> About.  </a>  </li> */}
        <li className='p-4 hover:scale-105 duration-500 ease-in-out shadow '><a href="#product">Products.  </a>  </li>
        
      </ul>

      {/* <div onClick={handleNav} className='block sm:hidden' >

        {!Nav ? <AiOutlineClose size={40}/> : <AiOutlineMenu size={40} /> }

       </div>


      <div className={!Nav ? 'fixed left-0 top-0 w-[67%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed hidden    left-[-100%]' }>
      
      <h1 className='w-full text-3xl font-bold text-white m-4'>S And D Naturals.  </h1>
        
        <ul className='pt-6 uppercase text-white'>
        <li  className='p-4 border-b border-gray-600'><a href="#hero">Home  </a> </li>
        <li className='p-4 border-b border-gray-600'> <a href="#about"> About  </a> </li>
        <li className='p-4 border-b border-gray-600'> <a href="#product">Products  </a> </li>
        

        </ul>
      </div> */}
      
    
    
    </div>
  )
}

export default Navbar