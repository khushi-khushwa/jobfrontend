import React, { useState } from "react";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Corp",
      date: "2024-08-20",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Innovate LLC",
      date: "2024-08-22",
    },
  ]);

  const [selectedJobs, setSelectedJobs] = useState([
    {
      id: 3,
      title: "Full Stack Developer",
      company: "Dev Solutions",
      date: "2024-08-25",
    },
  ]);

  return (
    <div className=" bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6">My Jobs</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Applied Jobs</h3>
          {appliedJobs.length > 0 ? (
            <ul className="space-y-4">
              {appliedJobs.map((job) => (
                <li key={job.id} className="bg-gray-200 p-4 rounded">
                  <h4 className="font-bold">{job.title}</h4>
                  <p>{job.company}</p>
                  <p className="text-sm text-gray-600">
                    Applied on: {job.date}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No jobs applied for yet.</p>
          )}
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Selected Jobs</h3>
          {selectedJobs.length > 0 ? (
            <ul className="space-y-4">
              {selectedJobs.map((job) => (
                <li key={job.id} className="bg-green-200 p-4 rounded">
                  <h4 className="font-bold">{job.title}</h4>
                  <p>{job.company}</p>
                  <p className="text-sm text-gray-600">
                    Selected on: {job.date}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No jobs selected yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
