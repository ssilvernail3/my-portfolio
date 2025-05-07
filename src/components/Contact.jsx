import { useEffect, useState } from 'react';
function Contact() {
    const [submitted, setSubmitted] = useState(false);
  
    useEffect(() => {
      const query = new URLSearchParams(window.location.search);
      if (query.get('success') === 'true') {
        setSubmitted(true);
      }
    }, []);
  
    return (
      <section id="contact" className="min-h-screen bg-white text-gray-900 px-6 py-20 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <p className="text-center max-w-xl mb-6">
          Whether you're reaching out about a role, a collaboration, or just want to connect, I'd love to hear from you.
        </p>
  
        {submitted ? (
          <div className="bg-green-100 text-green-800 px-6 py-4 rounded shadow text-center max-w-xl">
            Thank you for reaching out. Your message has been sent!
          </div>
        ) : (
          <form
            action="https://formspree.io/f/mldbnbge"
            method="POST"
            className="w-full max-w-xl flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="border rounded px-4 py-2"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="border rounded px-4 py-2"
            />
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Your Message"
              className="border rounded px-4 py-2"
            ></textarea>
  
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-500 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </section>
    );
  }
  
  export default Contact;