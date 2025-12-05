import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-charcoal selection:bg-ivory selection:text-charcoal font-sans antialiased relative">
      {/* Cinematic Grain Overlay */}
      <div className="bg-grain" />

      {/* Ambient Background Lighting */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cool-gray-light/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-ivory/5 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cool-gray/30 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-4000" />
      </div>

      <Navbar />
      <main className="flex flex-col relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;