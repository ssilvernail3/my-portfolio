function Projects() {
  const projects = [
    {
      title: 'Secure Network & GRC Assessment',
      description:
        '10-week engagement delivering segmented VLAN architecture, Cisco NGFW, endpoint protection, NIST CSF mapping, and a full policy toolkit (AUP, Password, IRP).',
      tech: ['Network Security', 'GRC', 'NIST CSF', 'Cisco Firepower', 'Microsoft 365', 'AWS S3'],


      links: [
        { label: 'Case Study (PDF)', href: '/assets/sterling-oakmont-case-study.pdf' },
        { label: 'Network Diagram',   href: '/assets/sterling-oakmont-network-diagram.pdf' },
        { label: 'Company Newsletter', href: '/assets/sterling-oakmont-newsletter.pdf' },
        { label: 'Policy Toolkit (PDF)', href: '/assets/sterling-oakmont-policy-toolkit.pdf' },
      ],
      image: '/images/sterling-oakmont-diagram.png'
    },
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
      link: 'https://github.com/ssilvernail3/my-portfolio',
      image: '/images/portfolio-preview.png'
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

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-4">
              {/* Only show View Code if a single repo link exists */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
                >
                  View Code
                </a>
              )}

              {/* Only show Live Site if provided */}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
                >
                  Live Site
                </a>
              )}

              {/* NEW: Render multiple resource buttons if links[] exists */}
              {Array.isArray(project.links) && project.links.length > 0 && (
                 project.links.map((l, i) => (
                  <a
                    key={i}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
                  >
                    {l.label}
                  </a>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;