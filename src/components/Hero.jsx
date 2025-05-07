function Hero() {
    return (
      <section className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center px-4">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4">Shane Silvernail</h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-6">
          Cybersecurity Enthusiast · Developer · Problem Solver
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/ssilvernail3/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-900 px-4 py-2 rounded hover:bg-gray-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shane-silvernail/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400"
          >
            LinkedIn
          </a>
        </div>
      </section>
    );
  }
  
  export default Hero;