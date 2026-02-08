import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Education />
      <Contact />
      <Toaster />
    </div>
  );
}

export default App;
