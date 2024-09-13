import React, { useState } from "react";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    name: "",
    link: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const addProject = () => {
    if (newProject.name && newProject.link && newProject.description) {
      setProjects([...projects, newProject]);
      setNewProject({ name: "", link: "", description: "" });
    }
  };

  const deleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  return (
    <div>
      {/* Add form fields or data display here */}

      <div className=" bg-gray-100 flex items-center justify-center">
        <div>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={newProject.name}
              onChange={handleInputChange}
              className="border p-2 rounded w-full mb-2"
              placeholder="Project Name"
            />
            <input
              type="text"
              name="link"
              value={newProject.link}
              onChange={handleInputChange}
              className="border p-2 rounded w-full mb-2"
              placeholder="Project Link"
            />
            <textarea
              name="description"
              value={newProject.description}
              onChange={handleInputChange}
              className="border p-2 rounded w-full mb-2"
              placeholder="Project Description"
            />
            <button
              onClick={addProject}
              className="bg-blue-500 text-white p-2 rounded w-full"
            >
              Add Project
            </button>
          </div>
          <h3 className="text-xl font-semibold mb-4">Projects</h3>
          <ul className="space-y-4">
            {projects.map((project, index) => (
              <li
                key={index}
                className="bg-gray-200 p-4 rounded flex justify-between items-start"
              >
                <div>
                  <h4 className="font-bold">{project.name}</h4>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    {project.link}
                  </a>
                  <p>{project.description}</p>
                </div>
                <button
                  onClick={() => deleteProject(index)}
                  className="text-red-500 ml-4"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
