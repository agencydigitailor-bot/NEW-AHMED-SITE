
import React from 'react';
import { Link } from 'react-router-dom';

interface FlatButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'accent' | 'white';
  className?: string;
}

const FlatButton: React.FC<FlatButtonProps> = ({ 
  children, 
  to, 
  onClick, 
  variant = 'primary', 
  className = '' 
}) => {
  const baseStyles = "inline-flex items-center justify-center h-14 px-8 rounded-md font-semibold text-lg transition-all duration-200 hover:scale-105 active:scale-95 text-center";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-emerald-500 text-white hover:bg-emerald-600",
    outline: "bg-transparent border-4 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    accent: "bg-amber-500 text-white hover:bg-amber-600",
    white: "bg-white text-blue-700 hover:bg-blue-50 hover:text-blue-800 shadow-xl shadow-blue-950/30",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
};

export default FlatButton;
