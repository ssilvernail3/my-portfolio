function Navbar() {
    return (
      <nav className="fixed top-0 left-0 right-0 bg-gray-800 text-white px-6 py-4 shadow-md z-50">
        <ul className="flex justify-center gap-6 text-sm sm:text-base">
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#resume" className="hover:text-blue-400">Resume</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;