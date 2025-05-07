import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20"> {/* Padding so hero isn't hidden behind navbar */}
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;