import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function Home() {
  return (
    <section className='bg-[#0f1829] md:h-screen flex items-center' id='home'>
    <div className="container mx-auto flex justify-center py-40 md:my-0">

    <div className='lg:w-2/4 text-center md:text-left'>
        <h3 className='text-red-500 text-xl'>Hi, my name is</h3>
        <h1 className='text-6xl font-bold text-gray-300 my-3'>Mahmudul Hasan</h1>
        <h1 className='text-6xl font-bold text-gray-500 mb-3'>I,m a Full Stack Developer.</h1>
        <p className='text-gray-600 mb-4'>I am a full stack developer specialized in building (and occasionally designing) exceptional digital experiences. Currently I'm focused on building full-stack web application</p>
        <button className='inline-flex items-center border-2 border-gray-500 py-2 px-3 text-gray-500 font-medium cursor-pointer hover:bg-gray-500 hover:text-gray-800'>View Work<FaArrowRight className='ml-2'/></button>
    </div>
    

    </div>

    </section>
  )
}

export default Home