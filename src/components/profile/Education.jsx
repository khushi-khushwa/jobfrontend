import React, { useState } from "react";
const Education = () => {
  const [education, setEducation] = useState({
    degree: "",
    institution: "",
    year: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });
  };

  const saveEducation = () => {
    setIsEditing(false);
    // Logic to save the education information, e.g., sending it to a backend server
    console.log("Education saved:", education);
  };

  const editEducation = () => {
    setIsEditing(true);
  };

  return (
    <div className=" bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Edit Education</h2>

        {isEditing ? (
          <div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Degree</label>
              <input
                type="text"
                name="degree"
                value={education.degree}
                onChange={handleInputChange}
                className="border p-2 rounded w-full"
                placeholder="e.g., Bachelor of Science"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Institution</label>
              <input
                type="text"
                name="institution"
                value={education.institution}
                onChange={handleInputChange}
                className="border p-2 rounded w-full"
                placeholder="e.g., University of XYZ"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">
                Year of Graduation
              </label>
              <input
                type="text"
                name="year"
                value={education.year}
                onChange={handleInputChange}
                className="border p-2 rounded w-full"
                placeholder="e.g., 2024"
              />
            </div>
            <button
              onClick={saveEducation}
              className="bg-blue-500 text-white p-2 rounded w-full"
            >
              Save Education
            </button>
          </div>
        ) : (
          <div>
            <p className="mb-4">
              <strong>Degree:</strong> {education.degree}
            </p>
            <p className="mb-4">
              <strong>Institution:</strong> {education.institution}
            </p>
            <p className="mb-4">
              <strong>Year of Graduation:</strong> {education.year}
            </p>
            <button
              onClick={editEducation}
              className="bg-green-500 text-white p-2 rounded w-full"
            >
              Edit Education
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Education;
