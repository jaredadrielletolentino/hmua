import React from 'react';
import Button from '../ui/Button';
import Section from '../ui/Section';

const Hero = () => {
  return (
    <Section 
      id="home" 
      className="hero-section"
      container={false}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
          Hair & Makeup Artist
        </h1>
        <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          Creating beauty that enhances your natural features
        </p>
        <Button 
          size="lg"
          className="animate-fade-in-up animation-delay-400"
          onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
        >
          View Portfolio
        </Button>
      </div>
    </Section>
  );
};

export default Hero;