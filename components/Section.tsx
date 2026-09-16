
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  bg?: 'white' | 'muted' | 'blue' | 'emerald' | 'dark';
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  bg = 'white', 
  className = '', 
  id 
}) => {
  const backgrounds = {
    white: "bg-white",
    muted: "bg-gray-100",
    blue: "bg-blue-500 text-white",
    emerald: "bg-emerald-500 text-white",
    dark: "bg-gray-900 text-white",
  };

  return (
    <section id={id} className={`py-20 px-6 ${backgrounds[bg]} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;
