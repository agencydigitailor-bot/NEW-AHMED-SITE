
import React from 'react';
import { Link } from 'react-router-dom';

interface FlatCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  path?: string;
  variant?: 'white' | 'muted' | 'blue' | 'emerald';
  className?: string;
}

const FlatCard: React.FC<FlatCardProps> = ({ 
  title, 
  description, 
  icon, 
  path, 
  variant = 'white',
  className = '' 
}) => {
  const baseStyles = "group p-8 rounded-lg transition-all duration-200 hover:scale-[1.02] flex flex-col h-full";
  
  const variants = {
    white: "bg-white text-gray-900",
    muted: "bg-gray-100 text-gray-900",
    blue: "bg-blue-50 text-gray-900 hover:bg-blue-100",
    emerald: "bg-emerald-50 text-gray-900 hover:bg-emerald-100",
  };

  const content = (
    <>
      {icon && (
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-blue-500 mb-6 transition-transform duration-200 group-hover:scale-110">
          {icon}
        </div>
      )}
      <h3 className="text-2xl font-bold mb-4 tracking-tight leading-tight">{title}</h3>
      <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>
      {path && (
        <div className="mt-6 font-bold text-blue-600 flex items-center">
          Lees meer <span className="ml-2">→</span>
        </div>
      )}
    </>
  );

  if (path) {
    return (
      <Link to={path} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {content}
    </div>
  );
};

export default FlatCard;
