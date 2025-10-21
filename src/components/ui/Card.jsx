import React from 'react';
import { cn } from '../utils/cn';

const Card = ({ 
  children, 
  className, 
  hoverable = false,
  ...props 
}) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-lg overflow-hidden shadow-md",
        hoverable && "portfolio-item",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children, className, ...props }) => (
  <div className={cn("p-6", className)} {...props}>
    {children}
  </div>
);

export const CardImage = ({ src, alt, className, ...props }) => (
  <div className="overflow-hidden">
    <img 
      src={src} 
      alt={alt}
      className={cn(
        "w-full h-64 object-cover portfolio-image",
        className
      )}
      {...props}
    />
  </div>
);

export default Card;