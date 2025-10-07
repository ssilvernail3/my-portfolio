import profileImg from '../assets/profile.jpg';
function About() {
    return (
      <section id="about" className="min-h-screen bg-white text-gray-900 px-6 py-20 flex flex-col items-center">
        <img src={profileImg} alt="Shane Silvernail" className="w-40 h-40 object-cover rounded-full border-4 border-gray-300 mb-6" />
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="italic text-gray-500 mb-6"> "I believe strong systems start with clear standards."</p>
        <div className="max-w-3xl text-center text-lg leading-relaxed">
          <p className="mb-4">
            Hi, I’m <strong>Shane Silvernail</strong> — a <strong>Disney Aspire
          Graduate</strong> and <strong>Cybersecurity Professional</strong> with
          a Master of Science in Information Technology, specializing in
          Cybersecurity, from <strong>Purdue University Global</strong>.</p>
          <p className="mb-4">
            I’m passionate about helping organizations strengthen their security
          posture through governance, risk, and compliance (GRC) frameworks,
          threat analysis, and strategic policy development. My background
          combines hands-on cybersecurity skills with a deep understanding of
          IT infrastructure, risk management, and secure network design.
          </p>
          <p className="mb-4">
            I enjoy being the person who makes sure everything is running the way it should. Whether that means writing clean code, managing compliance requirements, or monitoring systems to keep out threats, I’m driven by the idea of keeping people and data safe.
          </p>
          <p>
            I’m always looking to grow, both personally and professionally. I want to be part of a team that values security as much as I do and where I can keep learning and improving every day.
                </p>
          <p className="mt-6 italic text-gray-600"> I’m currently open to entry-level roles or internships in cybersecurity, compliance, or security operations.</p>
                <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Tech & Tools I Work With</h3>
                <div className="flex flex-wrap justify-center gap-3 text-sm sm:text-base">
                    <span className="bg-gray-100 px-4 py-2 rounded shadow">JavaScript</span>
                    <span className="bg-gray-100 px-4 py-2 rounded shadow">Python</span>
                    <span className="bg-gray-100 px-4 py-2 rounded shadow">React</span>
                    <span className="bg-gray-100 px-4 py-2 rounded shadow">Linux</span>
                    <span className="bg-gray-100 px-4 py-2 rounded shadow">SQL</span>
                    <span className="bg-gray-100 px-4 py-2 rounded shadow">GitHub</span>
                    <span className="bg-gray-100 px-4 py-2 rounded shadow">Wireshark</span>
                    <span className="bg-gray-100 px-4 py-2 rounded shadow">Snort</span>
                    <span className="bg-gray-100 px-4 py-2 rounded shadow">Tailwind CSS</span>
                    <span className="bg-gray-100 px-4 py-2 rounded shadow">Security Frameworks</span>
                </div>
            </div> 
        </div>
      </section>
    );
  }
  
  export default About;