import React from 'react';
import Section from '../ui/Section';

const About = () => {
  const stats = [
    { number: "8+", label: "Years Experience" },
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
            With over 8 years of experience in the beauty industry, I specialize in creating looks 
            that enhance your natural beauty while reflecting your personal style.
          </p>
          <p className="text-gray-600 mb-4">
            My approach combines technical expertise with artistic creativity, ensuring that 
            each client feels confident and beautiful.
          </p>
          <p className="text-gray-600 mb-8">
            I've worked with brides, models, and clients for special events, always prioritizing 
            quality products and personalized service.
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