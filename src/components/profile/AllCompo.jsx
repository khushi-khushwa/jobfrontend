import React, { useState } from "react";

import AppliedJobs from "./AppliedJobs";
import ResumeEdit from "./ResumeEdit";
import Education from "./Education";
import Projects from "./Projects";
const AllCompo = () => {
  const [activeSection, setActiveSection] = useState("applied-jobs");
  const renderContent = () => {
    switch (activeSection) {
      case "applied-jobs":
        return <AppliedJobs />;
      case "resume-edit":
        return <ResumeEdit />;
      case "education":
        return <Education />;
      case "projects":
        return <Projects />;
      default:
        return <AppliedJobs />;
    }
  };

  return (
    <div className="flex">
      {/* Left Section (Tabs) */}
      <div className="w-1/3 bg-gray-200 p-4">
        <button
          className={`w-full py-2 px-4 mb-2 ${
            activeSection === "applied-jobs" ? "bg-green-400" : "bg-gray-300"
          }`}
          onClick={() => setActiveSection("applied-jobs")}
        >
          Applied Jobs
        </button>
        <button
          className={`w-full py-2 px-4 mb-2 ${
            activeSection === "resume-edit" ? "bg-green-400" : "bg-gray-300"
          }`}
          onClick={() => setActiveSection("resume-edit")}
        >
          Resume Edit
        </button>
        <button
          className={`w-full py-2 px-4 mb-2 ${
            activeSection === "education" ? "bg-green-400" : "bg-gray-300"
          }`}
          onClick={() => setActiveSection("education")}
        >
          Education
        </button>
        <button
          className={`w-full py-2 px-4 mb-2 ${
            activeSection === "projects" ? "bg-green-400" : "bg-gray-300"
          }`}
          onClick={() => setActiveSection("projects")}
        >
          Projects
        </button>
        {/* Add more buttons as needed */}
      </div>

      {/* Right Section (Content) */}
      <div className="w-2/3 p-4">{renderContent()}</div>
    </div>
  );
};

export default AllCompo;
