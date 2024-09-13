import React, { useState } from "react";

const ResumeEdit = () => {
  const [resume, setResume] = useState(null);

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const saveResume = () => {
    if (resume) {
      // Logic to save the resume, e.g., sending it to a backend server
      console.log("Resume saved:", resume.name);
    }
  };

  const deleteResume = () => {
    setResume(null);
    // Logic to delete the resume from the server can be added here
    console.log("Resume deleted");
  };

  return (
    <div>
      <div className=" bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Edit Resume</h2>

          {resume ? (
            <div className="mb-4">
              <p className="mb-2">Current Resume: {resume.name}</p>
              <button
                onClick={deleteResume}
                className="bg-red-500 text-white p-2 rounded w-full"
              >
                Delete Resume
              </button>
            </div>
          ) : (
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Upload Resume</label>
              <input
                type="file"
                onChange={handleFileChange}
                className="border p-2 rounded w-full"
                accept=".pdf,.doc,.docx"
              />
            </div>
          )}

          {resume && (
            <button
              onClick={saveResume}
              className="bg-blue-500 text-white p-2 rounded w-full"
            >
              Save Resume
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeEdit;
