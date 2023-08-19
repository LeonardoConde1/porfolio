import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#131922]'>
        {/*contenedor*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center  h-full'>
        
             <p className='text-[#E8F5F2] font-bold py-2'>Hola, mi nombre es</p>
             <h1 className='text-4xl sm:text-7xl font-bold text-[#E8F5F2]'>Leonardo Conde</h1>
             <h2 className='text-4xl sm:text-7xl font-bold text-[#E8F5F2]'> Soy un desarrollador Frontend</h2>            
          <div > 
              <button  className='bg-[#E8F5F2] border-2 group px-6 py-3 my-4 flex items-center hover:bg-[#8BC8DF] hover:border-gray-100 '> Proyectos
              <span className='group-hover:rotate-90 duration-500'>
               <HiArrowNarrowRight className='ml-3 group-hover:scale-150 duration-175'/>
                </span>
             
                </button>
                </div>
           
          </div> 
          
        </div>     
   
  )
}

export default Home