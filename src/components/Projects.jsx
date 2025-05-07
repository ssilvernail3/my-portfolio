function Projects() {
    const projects = [
      {
        title: 'Yearbook Encryption App',
        description:
          'Designed a secure architecture for uploading and editing yearbook data, with encryption and cloud storage protections.',
        tech: ['Python', 'AES', 'RSA', 'AWS'],
        link: 'https://github.com/YOUR_USERNAME/yearbook-security',
      },
      {
        title: 'Snort Intrusion Detection Lab',
        description:
          'Configured SNORT with custom rules to detect network threats and log suspicious activity during lab simulations.',
        tech: ['Snort', 'Linux', 'Wireshark'],
        link: 'https://github.com/YOUR_USERNAME/snort-lab',
      },
      {
        title: 'Portfolio Website',
        description:
          'Built this personal portfolio using React and Tailwind CSS to showcase my projects and cybersecurity skills.',
        tech: ['React', 'Tailwind CSS'],
        link: 'https://github.com/YOUR_USERNAME/portfolio-site',
      },
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