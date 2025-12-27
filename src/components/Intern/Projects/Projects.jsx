import React from 'react';
import './Projects.css';

const Projects = () => {
  // Sample projects data - replace with actual data
  const projectsData = [
    {
      projectName: 'Project 1',
      description: 'Description of Project 1',
      professor: 'Prof. ABC',
      contact: 'abc@iitr.ac.in'
    },
    {
      projectName: 'Project 2',
      description: 'Description of Project 2',
      professor: 'Prof. XYZ',
      contact: 'xyz@iitr.ac.in'
    },
    {
      projectName: 'Project 3',
      description: 'Description of Project 3',
      professor: 'Prof. DEF',
      contact: 'def@iitr.ac.in'
    },
  ];

  return (
    <div className="Projects_container">
      <h2 className="Projects_title">Projects</h2>
      <div className="Projects_table_container">
        <table className="Projects_table">
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Project Description</th>
              <th>Professor Associated</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {projectsData.map((project, index) => (
              <tr key={index}>
                <td>{project.projectName}</td>
                <td>{project.description}</td>
                <td>{project.professor}</td>
                <td>
                  <a href={`mailto:${project.contact}`} className="Projects_contact_link">
                    {project.contact}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;

