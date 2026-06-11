import React from 'react';
import { useNavigate } from 'react-router';
import { ShoppingCart } from 'lucide-react';

interface EmptyStateProps {
  title: string;
  description: string;
  actionText?: string;
  actionLink?: string;
  icon?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ 
  title, 
  description, 
  actionText = 'Shop Now', 
  actionLink = '/',
  icon = <ShoppingCart size={64} className="text-gray-300" />
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center p-12 text-center bg-white rounded-xl border border-gray-200">
      <div className="mb-6 p-6 bg-gray-50 rounded-full">
        {icon}
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-500 mb-8 max-w-md">{description}</p>
      {actionText && (
        <button
          onClick={() => navigate(actionLink)}
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
        >
          {actionText}
        </button>
      )}
    </div>
  );
};
