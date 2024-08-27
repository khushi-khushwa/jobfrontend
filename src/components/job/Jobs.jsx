import React from 'react'
import Navbar from '../Navbar'
import JobCards from '../JobCards'
import FilterCard from './FilterCard'
import Job from './Job'

const Jobs = () => {
  const jobArray = [1,2,3,4,5,6,7,8,9,10,11,12]
  return (
    <div>
      <Navbar/>
      <div className='max-w-full max-auto mt-20 xl:px-6 px-10 '>
     <div className='flex lg:gap-5 md:gap-32 justify-center  '>
      <div className='w-[19%] max-[930px]:w-[25%] '>
        <FilterCard/>
        </div>
        {
          jobArray.length <= 0 ? <span>Job not found</span> :(
          <div className='flex-1justify-center items-center m-3'>
            <div className='grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6'>
            {
             jobArray.map((item,index) =>
              ( 
              <div>
                    <Job/>
              </div>
             ))}
        </div>
        </div>
        )
        }
        </div>
        </div>
  
     </div>
   
  
  )
}

export default Jobs
