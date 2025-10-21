import React from 'react';
import Section from '../ui/Section';

const About = () => {
  const stats = [
    { number: "4+", label: "Years Experience" },
    { number: "50+", label: "Graduation and Birthday Makeups" },
    { number: "100+", label: "Bridal Makeups" }
  ];

  return (
    <Section 
      id="about"
      className="bg-gray-50"
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12 flex justify-center">
          <div className="relative">
            <img 
              src="/portfolio/Aina-1.jpg" 
              alt="Makeup Artist" 
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-lg border-4 border-white"
            />
            {/* Optional decorative element */}
            <div className="absolute -inset-4 rounded-full border-2 border-accent/30 animate-pulse"></div>
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">About Me</h2>
          <p className="text-gray-600 mb-4">
            Hi, I’m Aina, the heart behind HMUA by Aina.
            My journey began with a simple love for makeup and the joy it brings, and today, I’m grateful to turn that passion into creating radiant looks for brides and clients on their most special days. ✨
            What started as a simple passion turned into a dream come true when I started my makeup journey in December 2020.
          </p>
          <p className="text-gray-600 mb-4">
            My goal has always been simple: to make everyone feel beautiful and confident in their own skin. I believe makeup isn’t about changing how you look, but about enhancing your natural beauty and letting your personality shine through.
          </p>
          <p className="text-gray-600 mb-8">
            I’ve trained with NIX Institute of Beauty and Makeup Science Asia, and I’m always eager to learn more to give my clients the best experience possible. For the past five years, I’ve met so many amazing people, and each one reminds me why I love what I do.

            Made with passion, crafted with love - Aina
          </p>
          
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-2xl font-bold mb-1 text-accent">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;