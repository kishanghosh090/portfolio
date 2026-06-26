import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import { Toaster } from './components/ui/toaster';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function App() {
  useSmoothScroll();

  return (
    <div className="w-full overflow-x-hidden bg-black relative min-h-screen">
      {/* Background Layers */}
      <div className="vignette" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Education />
          <Contact />
        </main>
      </div>

      <Toaster />
    </div>
  );
}

export default App;
