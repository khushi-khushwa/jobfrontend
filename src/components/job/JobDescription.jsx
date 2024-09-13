import React from 'react'

const JobDescription = () => {
   const isApplied = true;
  return (
    <div className='max-w-7xl mx-auto my-12 '>
    <div className='flex justify-between items-center'>
      
      <div>
      <h1 className="font-bold text-1">Frontend developer</h1>
      <div className='flex items-center gap-2 mt-4 '>
      <button className="h-7 w-24 p-1  max-[455px]:w-20 flex items-center justify-center bg-emerald-50 rounded-lg max-[455px]:text-sm">
            12 position
          </button>
          <button className="h-7 w-24 p-1  max-[455px]:w-20  flex items-center justify-center bg-emerald-50 rounded-lg max-[455px]:text-sm">
            Part time
          </button>
          <button className="h-7 w-24 p-1  max-[455px]:w-20 flex items-center justify-center bg-emerald-50 rounded-lg max-[455px]:text-sm">
            24LPA
          </button>
      </div>
      </div>
         <div>
      <button className={`bg-emerald-500 px-5 py-2 rounded-lg  ${isApplied ? 'bg-black text-white cursor-not-allowed' : 'bg-emerald-500 hover:bg-green-600'}`}>
      {isApplied ? "Already Applied" : "Apply Now"}
      </button>
      </div>
     
    </div>
    <div className='mt-5'>
      <h1 className=' flex gap-3'>Role:<span>Software Developer</span></h1>
      <h1  className='flex gap-3'>Location: <span>sec-62 Gurugram</span></h1>
      <h1  className='flex gap-3'>Experience: <span>0 to 1 year</span></h1>
      <h1  className='flex gap-3'>Total Applicant: <span>10</span></h1>
      <h1  className='flex gap-3'>Posted: <span>1 Day ago</span></h1>
    
      <div className='mt-4'>
         <h1 className='font-semibold'>Job Description</h1> 
         <p>A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</p>
      </div>
      <div className='mt-4'>
        <h1 className='font-semibold'>Job Responsibility</h1>
        <p>Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</p>
      </div>
    </div>
    </div>
  )
}

export default JobDescription; 
