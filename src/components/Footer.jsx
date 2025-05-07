import { Github, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center px-6 py-8 mt-10">
      <p className="text-sm mb-2">
        &copy; {new Date().getFullYear()} Shane Silvernail. All rights reserved.
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-4">
        <a
          href="https://github.com/ssilvernail3/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <Github size={24} />
        </a>
        <a
          href="https://linkedin.com/in/shane-silvernail/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <Linkedin size={24} />
        </a>
      </div>

      <p className="text-xs mt-4 text-gray-400">
        Built with React & Tailwind CSS
      </p>
    </footer>
  );
}

export default Footer;