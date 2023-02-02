import React  from 'react'
// import { AiOutlineClose,AiOutlineMenu } from 'react-icons/ai'





const Navbar = () => {
    // const [Nav, setNav] = useState(true)

    // const handleNav = () => {
    //     setNav(!Nav)
    // }


  return (

    
    <div  id='back' className= 'flex  justify-end  items-center   h-24 max-w-[1240px] mx-auto px-4 text-black  ' >
         
        
      <ul className=' flex flex-row  mt-10 text-xl items-center   hover:cursor-pointer text-[#E63E00]  font-bold underline'>
        <li className='p-4 hover:scale-105  duration-500 ease-in-out s '><a href="#hero">Home.  </a> </li>
        {/* <li className=' p-4 hover:scale-105 duration-500 ease-in-out shadow '> <a href="#about"> About.  </a>  </li> */}
        <li className='p-4 hover:scale-105 duration-500 ease-in-out '><a href="#product">Products.  </a>  </li>
        
      </ul>

      
    
    </div>
  )
}

export default Navbar