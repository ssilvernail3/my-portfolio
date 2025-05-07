function Resume() {
    return (
      <section id="resume" className="min-h-screen bg-gray-50 text-gray-900 px-6 py-20 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-6">Resume</h2>
        
        <p className="text-center max-w-xl mb-8">
          Here's a quick look at my resume. You can preview it below or download a copy to keep.
        </p>
  
        {/* PDF Preview (Desktop only) */}
        <div className="hidden md:block w-full max-w-4xl h-[750px] mb-8">
          <iframe
            src="/Resume.pdf"
            className="w-full h-full rounded border shadow"
            title="Resume Preview"
          />
        </div>
  
        {/* Download Button */}
        <a
          href="/Resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-500 transition"
        >
          Download Resume (PDF)
        </a>
      </section>
    );
  }
  
  export default Resume;