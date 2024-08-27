import React from 'react'

import Navbar from '../Navbar';
import Job from './Job';


const Browser = () => {
const randomJobs =[1,2,3,4,5,6,7,8,9,10]
  return (
    <div>
     <Navbar/>
      <div className='max-w-8xl max-auto flex justify-center my-10'>
        <div>
        <h1 className='font-bold text-xl my-10'>Search Result ({randomJobs.length})</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
        {
            randomJobs.map((items, index)=>{
                return (
                    <div className=''>
                        <Job/>
                        </div>
                )
            })
        }
      </div>
      </div>
    </div>
    </div>
  )
}

export default Browser;
