import React from 'react';

interface PaymentMethodCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  selected: boolean;
  onSelect: () => void;
}

export const PaymentMethodCard: React.FC<PaymentMethodCardProps> = ({ id, title, description, icon, selected, onSelect }) => {
  return (
    <div 
      onClick={onSelect}
      className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition ${
        selected ? 'border-blue-600 bg-blue-50/50' : 'border-gray-200 hover:border-gray-300 bg-white'
      }`}
    >
      <div className="p-2 bg-gray-50 rounded-lg">
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selected ? 'border-blue-600' : 'border-gray-300'}`}>
        {selected && <div className="w-2.5 h-2.5 bg-blue-600 rounded-full" />}
      </div>
    </div>
  );
};
