import React from 'react';
import { cn } from '../utils/cn';

const Section = ({ 
  children, 
  id,
  title,
  subtitle,
  className,
  container = true,
  ...props 
}) => {
  return (
    <section id={id} className={cn("py-16", className)} {...props}>
      {container ? (
        <div className="container mx-auto px-4">
          {(title || subtitle) && (
            <div className="text-center mb-12">
              {title && (
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {subtitle}
                </p>
              )}
            </div>
          )}
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
};

export default Section;