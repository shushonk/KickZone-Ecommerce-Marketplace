import React from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export const BackButton: React.FC<{ fallback?: string; className?: string }> = ({ fallback = '/', className = '' }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate(fallback);
    }
  };

  return (
    <button 
      onClick={handleBack} 
      className={`flex items-center justify-center p-2 -ml-2 rounded-full hover:bg-gray-100 text-gray-700 transition-colors ${className}`}
      aria-label="Go back"
    >
      <ArrowLeft size={20} />
    </button>
  );
};
