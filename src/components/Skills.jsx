import React from 'react'

import html from '../assets/html.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import sql from '../assets/sql.png'
import javascript from '../assets/javascript.png'
import php from '../assets/php.png'

const Skills = () => {
  return (
    <div name='habilidades' className='w-full h-screen bg-[#131922] text-[#E8F5F2]'>
        {/*container*/ }
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl py-4 font-bold  border-b-4 border-[#8BC8DF]'>Experiencia</p>
                <p className='py-4'>Tecnologias con las que estoy trabajando</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
              <div className='shadow-md shadow-black hover:scale-105 duration-75'>
               <img className='w-20 mx-auto' src={html} alt="html"/><p className='my-4'>HTML</p>
               </div>  
               <div className='shadow-md shadow-black hover:scale-105 duration-75'>
               <img className='w-20 mx-auto' src={tailwind} alt="html"/><p  className='my-4'>Tailwind</p>
               </div>  
               <div className='shadow-md shadow-black hover:scale-105 duration-75'>
               <img className='w-20 mx-auto' src={javascript} alt="html"/><p  className='my-4'>JavaScript</p>
               </div>  
               <div className='shadow-md shadow-black hover:scale-105 duration-75'>
               <img className='w-20 mx-auto' src={php} alt="html"/><p  className='my-4'>Php</p>
               </div>  
               <div className='shadow-md shadow-black hover:scale-105 duration-75'>
               <img className='w-20 mx-auto' src={sql} alt="html"/><p  className='my-4'>SQL</p>
               </div>  
               <div className='shadow-md shadow-black hover:scale-105 duration-75'>
               <img className='w-20 mx-auto' src={react} alt="html"/><p  className='my-4'>React</p>
               </div>  
               </div>          
        </div>


    </div>
  )
}

export default Skills