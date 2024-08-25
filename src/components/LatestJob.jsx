import React from 'react'
import JobCards from './JobCards'
const LatestJob = () => {
    const randomJobs = [1,2,3,4,5,7,8];
  return (
    <div className='mt-12 max-w-7xl  mx-auto my-20'>
      <h1 className='text-3xl font-semibold text-center'>Job Opening</h1>
   <div className='grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-5'>
      {
        randomJobs.slice(0,6).map((items)=><JobCards/>)
      }
   </div>
   
   
    </div>
  )
}

export default LatestJob
