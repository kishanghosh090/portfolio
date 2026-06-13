import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import CursorWater from './components/CursorWater';
import { Toaster } from './components/ui/toaster';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function App() {
  useSmoothScroll();

  return (
    <div className="App">
      <div className="ambient-glow" aria-hidden="true" />
      <CursorWater />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <Education />
        <Contact />
      </div>
      <Toaster />
    </div>
  );
}

export default App;
