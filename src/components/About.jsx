import React from 'react'

const About = () => {
  return (
    <div name='Acerca de mi' className='w-full h-screen bg-[#131922]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-9'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 text-[#E8F5F2] border-[#8BC8DF]'>
                    Acerca de mi</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-9  text-[#E8F5F2]'>
                <div className='sm: text-right text-4xl font-bold '>
                    <p>Hola, Soy Leonardo Conde un gusto</p>
                </div>
                <div>
                    <p>mi primera experiencia en el mundo de la programacion Web, graduado de la universidad Estatal de Sonora este 2022,
                        buscando experiencia laboral. Soy una persona que le gusta la informatica, investigar, los videojuegos, mangas y la musica.
                    </p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default About