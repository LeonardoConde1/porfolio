import React,{useState} from 'react'
import {FaBars, FaTimes, FaGithub,FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import Leonardo from '../assets/Leonardo.gif'
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] bg-[#0f141c] text-gray-50 flex justify-between items-center px-4 '>
      <div>
        <img src={Leonardo} alt="Logo" style={{width: '50px'}}/>
      </div>

     {/*menu*/}
        <ul className='hidden md:flex'>
          <li className='hover:text-[#8BC8DF]'><Link to='home' smooth={true} offset={50} duration={500}>
          Home
        </Link></li>
          <li  className='hover:text-[#8BC8DF]'><Link to='Acerca de mi' smooth={true} offset={50} duration={500}>
          Acerca de mi
        </Link></li>
          <li  className='hover:text-[#8BC8DF]'><Link to='habilidades' smooth={true} offset={50} duration={500}>
          habilidades
        </Link></li>
          <li  className='hover:text-[#8BC8DF]'><Link to='Proyectos' smooth={true} offset={50} duration={500}>
          Proyectos
        </Link></li>
          <li  className='hover:text-[#8BC8DF]'><Link to='Contacto' smooth={true} offset={50} duration={500}>
          Contacto
        </Link></li>
        </ul>

      {/*menu mobile*/}
      <div onClick={handleClick} className='md:hidden z-10'>
       {!nav ? <FaBars size={20}/> : <FaTimes size={20} />}
      </div>
      
      <ul className={!nav ? 'hidden' :'absolute top-0 left-0 w-full h-screen bg-[#131922] flex flex-col justify-center items-center'}>
          <li className=' py-6 text-4xl'><Link onClick={handleClick} to='home' smooth={true} offset={50} duration={500}>
          Home
        </Link></li>
          <li className=' py-6 text-4xl'><Link onClick={handleClick} to='Acerca de mi' smooth={true} offset={50} duration={500}>
          Acerca de mi
        </Link></li>
          <li className=' py-6 text-4xl'><Link onClick={handleClick} to='habilidades' smooth={true} offset={50} duration={500}>
          habilidades
        </Link></li>
          <li className=' py-6 text-4xl'><Link onClick={handleClick} to='Proyectos' smooth={true} offset={50} duration={500}>
          Proyectos
        </Link></li>
          <li className=' py-6 text-4xl'> <Link onClick={handleClick} to='Contacto' smooth={true} offset={50} duration={500}>
          Contacto
        </Link></li>
        </ul>
        {/*menu mobile icons*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-[#3177df]'>
            <a target="_blank"  className=' flex justify-between items-center w-full font-bold' 
             href='https://www.linkedin.com/in/leonardo-conde-7a6168224/'>
              Linkedin <FaLinkedin size={30}/>

            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-[#383737]'>
            <a target="_blank"  className=' flex justify-between items-center w-full font-bold' 
              href='https://github.com/LeonardoConde1'>
              Github <FaGithub size={30}/>

            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-[#a8e2a8]'>
            <a target="_blank" className=' flex justify-between items-center w-full font-bold' 
              href='/'>
              Email <HiOutlineMail size={30}/>

            </a>
          </li>
        </ul>
      </div>
    </div>
   
  )
}

export default Navbar