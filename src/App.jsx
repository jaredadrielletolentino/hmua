import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Portfolio from './components/sections/PortfolioGrid';
import Videos from './components/sections/Videos';
import About from './components/sections/About';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <div className="section-divider"></div>
      <Portfolio />
      <div className="section-divider"></div>
      <Videos />
      <div className="section-divider"></div>
      <About />
      <div className="section-divider"></div>
      <Contact />
    </Layout>
  );
}

export default App;