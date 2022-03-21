import React from 'react'
import REALSTATE from '../assets/realestate.jpg'

function Work() {
  return (
    <section className='bg-[#0f1829]' id='work'>
        <div className="container mx-auto">
        <h2 className=' inline-block text-3xl font-bold text-gray-300 border-b-4 border-red-500'>Work</h2>
    <p className='text-gray-400'>Checkout some of my recent work</p>
    <div className="flex flex-wrap flex-col md:flex-row md:-mx-4">
    <div className="md:w-1/2 lg:w-1/3 p-4 ">
    <div className='relative group'>
    <img src={REALSTATE} alt="" className='w-full rounded-lg' />
    <div className="flex flex-col absolute top-0 left-0 right-0 h-full w-full bg-blue-200 rounded-lg justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out ">
        <h1 className='text-3xl font-bold'>REACT JS APP</h1>
        <div className="flex gap-3 mt-3">
            <button className='py-2 px-3 rounded-lg bg-green-300 hover:bg-green-500 transition duration-500 '>Demo</button>
            <button className='py-2 px-3 rounded-lg bg-green-300 hover:bg-green-500 transition duration-500 '>Code</button>
        </div>
    </div>
    </div>

    </div>
    <div className="md:w-1/2 lg:w-1/3 p-4 ">
    <div className='relative group'>
    <img src={REALSTATE} alt="" className='w-full rounded-lg' />
    <div className="flex flex-col absolute top-0 left-0 right-0 h-full w-full bg-blue-200 rounded-lg justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out ">
        <h1 className='text-3xl font-bold'>REACT JS APP</h1>
        <div className="flex gap-3 mt-3">
            <button className='py-2 px-3 rounded-lg bg-green-300 hover:bg-green-500 transition duration-500 '>Demo</button>
            <button className='py-2 px-3 rounded-lg bg-green-300 hover:bg-green-500 transition duration-500 '>Code</button>
        </div>
    </div>
    </div>

    </div>
    <div className="md:w-1/2 lg:w-1/3 p-4 ">
    <div className='relative group'>
    <img src={REALSTATE} alt="" className='w-full rounded-lg' />
    <div className="flex flex-col absolute top-0 left-0 right-0 h-full w-full bg-blue-200 rounded-lg justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out ">
        <h1 className='text-3xl font-bold'>REACT JS APP</h1>
        <div className="flex gap-3 mt-3">
            <button className='py-2 px-3 rounded-lg bg-green-300 hover:bg-green-500 transition duration-500 '>Demo</button>
            <button className='py-2 px-3 rounded-lg bg-green-300 hover:bg-green-500 transition duration-500 '>Code</button>
        </div>
    </div>
    </div>

    </div>

    </div>

        </div>
    </section>
  )
}

export default Work