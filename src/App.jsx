import React from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Project from './components/Project';
import Skills from './components/Skills';

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Brands />
      <Skills />
      <Project title='인터버스' />
      <div style={{ height: '2000px' }}></div>
    </div>
  );
}
