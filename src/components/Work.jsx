import React from 'react'
import paginaWeb from '../assets/paginaWeb.png'
import weather from '../assets/weather.png'

const Work = () => {
  return (
    <div name='Proyectos' className=' w-full md:h-screen text-[#E8F5F2] bg-[#131922]'>
      <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full  '>
       <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-[#8BC8DF]'>Proyectos</p>
        <p className='p-6'>Proyectos realizados</p>
        </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {/*grid item*/}
       
          <div style={{backgroundImage: `url(${paginaWeb})`}}  className='shadow-lg shadow-[#131922] group container rounded-md flex justify-center items-center mx-auto content-div'>
      
      <div className='opacity-0 group-hover:opacity-100'>
        <span className='text-2xl font-bold text-white tracking-wider'>
          React Weather Application
        </span>
        <div className='pt-8 text-center'>
            <a href="/">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
            </a>
            <a target="_blank" href='https://github.com/LeonardoConde1/paginaWeb'>
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
            </a>
        </div>
        </div>
      </div>

      <div style={{backgroundImage: `url(${weather})`}}  className='shadow-lg shadow-[#131922] group container rounded-md flex justify-center items-center mx-auto content-div'>
      
      <div className='opacity-0 group-hover:opacity-100'>
        <span className='text-2xl font-bold text-white tracking-wider'>
          React Weather Application
        </span>
        <div className='pt-8 text-center'>
            <a target="_blank" href="https://github.com/LeonardoConde1/WheatherApp">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
            </a>
            <a target="_blank" href='https://leonardoconde1.github.io/WheatherApp/'>
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
            </a>
        </div>
        </div>
      </div>   
    
        </div>
      </div>
    </div>
    
  )
}

export default Work
