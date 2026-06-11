import React from 'react';
import { Address } from '../../types';
import { Check, Edit2, Trash2 } from 'lucide-react';

interface AddressCardProps {
  address: Address;
  selected?: boolean;
  onSelect?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export const AddressCard: React.FC<AddressCardProps> = ({ 
  address, 
  selected, 
  onSelect, 
  onEdit, 
  onDelete 
}) => {
  return (
    <div 
      className={`relative p-5 rounded-xl border-2 cursor-pointer transition-all ${
        selected ? 'border-blue-600 bg-blue-50/30' : 'border-gray-200 hover:border-gray-300 bg-white'
      }`}
      onClick={onSelect}
    >
      {selected && (
        <div className="absolute top-4 right-4 bg-blue-600 text-white p-1 rounded-full">
          <Check size={14} strokeWidth={3} />
        </div>
      )}
      
      <div className="flex gap-2 mb-2 items-center">
        <span className="font-bold text-gray-900">{address.fullName}</span>
        <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs font-medium">
          {address.type}
        </span>
      </div>
      
      <p className="text-gray-600 text-sm mb-1">{address.streetAppt}</p>
      <p className="text-gray-600 text-sm mb-3">{address.city}, {address.state} - {address.pincode}</p>
      <p className="text-gray-800 text-sm font-medium mb-4">{address.phone}</p>
      
      <div className="flex items-center gap-4">
        {selected && (
          <button 
            onClick={(e) => { e.stopPropagation(); onEdit?.(); }}
            className="text-blue-600 text-sm font-medium hover:underline flex items-center gap-1"
          >
            <Edit2 size={14} /> Edit
          </button>
        )}
        {onDelete && (
          <button 
            onClick={(e) => { e.stopPropagation(); onDelete?.(); }}
            className="text-red-600 text-sm font-medium hover:underline flex items-center gap-1"
          >
            <Trash2 size={14} /> Delete
          </button>
        )}
      </div>
    </div>
  );
};
