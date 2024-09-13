import React, { useState } from "react";
import AppliedJobs from "./AppliedJobs";
import Projects from "./Projects";
import Education from "./Education";

import ResumeEdit from "./ResumeEdit";

const JobSeeker = () => {
  // State to track the active section
  const [activeSection, setActiveSection] = useState("profile-summary");

  const sections = [
    "profile-summary",
    "education",
    "projects",
    "applied-jobs",
    "resume-edit",
  ];
  // Function to scroll to the specific section
  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <div className=" bg-blue- flex gap-4 relative mt-2  max-w-4xl mx-auto  border-2 rounded-2xl border-slate-100  p-6">
      <div className="w-[30%] flex-col">
        {sections.map((sectionId) => (
          <div
            key={sectionId}
            onClick={() => handleSectionClick(sectionId)}
            className={` p-4 rounded-md mb-6  ${
              activeSection === sectionId
                ? "bg-green-500 text-white"
                : " hover:bg-gray-300"
            }`}
          >
            {sectionId
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </div>
        ))}
      </div>
      <div className="w-[70%] ">
        <div
          id="profile-summary"
          className="p-4 flex flex-col justify-center items-center bg-gray-100 mb-4 rounded-lg"
        >
          <div>
            <h2 className="text-xl font-bold mb-2">Profile Summary</h2>
            <textarea cols="60" rows="10" className=""></textarea>
          </div>
        </div>

        <div id="education" className="p-4 bg-gray-100 mb-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Education</h2>
          <Education />
        </div>

        <div id="projects" className="p-4 bg-gray-100 mb-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Projects</h2>
          <Projects />
        </div>

        <div id="applied-jobs" className="p-4 bg-gray-100 mb-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Applied Jobs</h2>
          <AppliedJobs />
        </div>

        <div id="resume-edit" className="p-4 bg-gray-100 mb-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Resume Edit</h2>
          <ResumeEdit />
        </div>
      </div>
    </div>
  );
};

export default JobSeeker;
