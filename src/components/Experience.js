import React from 'react';
import data from '../data';
import ExpCard from './ExpCard';

function Experience() {
  const renderedList = data.map((item,index)=>{
    return <ExpCard image={item} key={index}/>
  })
  return (
    <section className='bg-[#0f1829]' id='experience'>
    <div className="container mx-auto py-24 ">
    <h2 className=' inline-block text-3xl font-bold text-gray-300 border-b-4 border-red-500'>Experience</h2>
    <p className='text-gray-400'>These are the technologies I've worked with</p>
    <div className="flex flex-wrap flex-col md:flex-row md:-mx-4">
    {renderedList}
    
    


    </div>

    </div>

    </section>
  )
}

export default Experience