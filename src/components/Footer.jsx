import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='bg-blue-950 text-white py-8 mt-16 '>
      <div className='w-[30rem] max-auto flex flex-col items-center '>
        <div className='flex items-center justify-center mb-4' >
             <h1 className="text-2xl font-bold">
              {" "}
              Job <span className="text-red-700">Portal</span>
            </h1>

            </div> 
            <p className='text-sm text-gray-400 mb-6'>
            © 2024 Jobstack. Design & Develop with{' '}
            <span className="text-red-500">❤️</span> by Shreethemes.

            </p>

            <div className='flex space-x-4'>
             <Link to="" >
             </Link>
             </div>
            <div className='flex space-x-4'>
             <Link to="" >
             </Link>
             </div>
            <div className='flex space-x-4'>
             <Link to="" >
             </Link>
             </div>
            <div className='flex space-x-4'>
             <Link to="" >
             </Link>
            </div>
        <div></div>
      </div>
    </div>
  )
}

export default Footer
