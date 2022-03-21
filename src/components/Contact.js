import React from 'react'

function Contact() {
  return (
    <section className='bg-[#0f1829]' id='contact'>
        <div className="container mx-auto py-24 px-4 md:px-0">
       <div className="text-center mb-5">
       <h2 className=' inline-block text-3xl font-bold text-gray-300 border-b-4 border-red-500'>Contact</h2>
    <p className='text-gray-400'>Submit the form below</p>
       </div>

        <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2">
           <form action="" className='flex flex-col gap-5'>
               <input type="text" placeholder='Name' className='text-white px-4 py-2 border-2 border-gray-300 bg-[#c6cdf6] block w-full rounded-md' />
               <input type="email" placeholder='Email' className='text-white px-4 py-2 border-2 border-gray-300 bg-[#c6cdf6] block w-full rounded-md' />
               <textarea placeholder='Message' name="" id="" cols="30" rows="10" className='text-white px-4 py-2 border-2 border-gray-300 bg-[#c6cdf6] block w-full rounded-md'></textarea>
               <input type="submit" className=' text-white inline-block w-1/4 mx-auto px-3 py-2 rounded-md hover: outline-none cursor-pointer border-2 border-gray-400 hover:bg-gray-300 hover:text-gray-700' />
           </form>

            </div>
        </div>


        </div>
    </section>
  )
}

export default Contact