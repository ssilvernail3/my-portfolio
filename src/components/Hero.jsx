function Hero() {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 text-white text-center px-4">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Shane Silvernail
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-6 max-w-xl">
          Cybersecurity Developer • Driven by Structure • Always Learning
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-700 px-4 py-2 rounded hover:bg-blue-100 font-semibold transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            LinkedIn
          </a>
        </div>
      </section>
    );
  }
  
  export default Hero;