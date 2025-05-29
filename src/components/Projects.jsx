function Projects() {
    const projects = [
  {
    title: 'PyScan Vulnerability Scanner',
    description:
      'Built a multi-threaded Python tool to scan IPs for open ports, grab service banners, match known vulnerabilities, and export PDF/HTML reports.',
    tech: ['Python', 'Socket', 'Threading', 'WeasyPrint', 'Jinja2'],
    link: 'https://github.com/ssilvernail3/pyscan',
    image: '/images/pyscan-preview.png'
  },
  {
    title: 'MarvelPedia Character Explorer',
    description:
      'Created a Marvel-themed superhero search app using Flask, JavaScript, and the Marvel API to return real-time character data with secure hash authentication and animated UI cards.',
    tech: ['JavaScript', 'Flask', 'Axios', 'PostgreSQL', 'Bootstrap'],
    link: 'https://github.com/ssilvernail3/marvel',
    image: '/images/marvelpedia-preview.png'
  },
  {
    title: 'Portfolio Website',
    description:
      'Built this personal portfolio using React and Tailwind CSS to showcase my projects and cybersecurity skills.',
    tech: ['React', 'Tailwind CSS'],
    link: 'https://github.com/ssilvernail3/my-portfolio'
  }
    ];
  
    return (
      <section id="projects" className="min-h-screen bg-gray-100 text-gray-900 px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 border border-gray-200"
            >
              {/* ✅ ADD THIS IMAGE BLOCK */}
              {project.image && (
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-40 object-cover rounded mb-4"
                />
              )}
    
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs text-blue-700 font-medium mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-blue-100 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Projects;