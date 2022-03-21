import React from 'react'


function ExpCard({image}) {
  return (
    <div className="md:w-1/2 lg:w-1/4  p-4">
    <div  className='py-14 shadow-md shadow-cyan-500 hover:shadow-cyan-200 rounded-lg'>
    <img src={image} alt="" className='w-28 mx-auto' />
    </div>

    </div>
  )
}

export default ExpCard