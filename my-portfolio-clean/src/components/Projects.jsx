import React from 'react';

function Projects() {
  // Example project data
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of project 1.',
      link: '#',
    },
    {
      title: 'Project 2',
      description: 'A brief description of project 2.',
      link: '#',
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="bg-dark-background py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-primary-blue mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a href={project.link} className="text-primary-blue hover:underline">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;