import React from 'react';
import { BackButton } from './BackButton';

interface PageHeaderProps {
  title: string;
  fallback?: string;
  className?: string;
  children?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, fallback = '/', className = '', children }) => {
  return (
    <div className={`bg-white shadow-sm mb-4 px-4 py-3 flex items-center gap-4 ${className}`}>
      <BackButton fallback={fallback} />
      <h1 className="text-lg font-medium text-gray-900 flex-1 truncate">{title}</h1>
      {children && <div className="flex items-center gap-2">{children}</div>}
    </div>
  );
};
