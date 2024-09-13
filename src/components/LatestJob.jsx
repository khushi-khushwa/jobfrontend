import React from "react";
import JobCards from "./JobCards";
const LatestJob = () => {
  const randomJobs = [1, 2, 3, 4, 5, 7, 8];
  return (
    <div className="mt-12  max-w-[74rem] max-[1279px]:max-w-[49rem] mx-auto my-20">
      <h1 className="text-3xl font-semibold text-center">Job Opening</h1>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9 my-5 md:gap-6 lg:gap-6">
        {randomJobs.slice(0, 6).map((items, index) => (
          <div key={index}>
            <JobCards />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestJob;
