import React, { useState } from 'react';
import { useStore } from '../../store/useStore';
import { Tag, Check, X } from 'lucide-react';

export const CouponBox: React.FC = () => {
  const { appliedCoupon, setCoupon, cart } = useStore();
  const [inputCode, setInputCode] = useState('');

  if (cart.length === 0) return null;

  const handleApply = () => {
    if (inputCode.trim()) {
      setCoupon(inputCode.trim().toUpperCase());
      setInputCode('');
    }
  };

  return (
    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm mb-4">
      <h3 className="text-base font-semibold text-gray-800 flex items-center gap-2 mb-3">
        <Tag size={18} /> Apply Coupons
      </h3>
      
      {appliedCoupon ? (
        <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-2 text-green-700">
            <Check size={18} />
            <span className="font-semibold">{appliedCoupon}</span>
            <span className="text-sm">applied!</span>
          </div>
          <button 
            onClick={() => setCoupon(null)}
            className="text-gray-500 hover:text-red-500"
          >
            <X size={18} />
          </button>
        </div>
      ) : (
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter coupon code"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent uppercase"
          />
          <button
            onClick={handleApply}
            disabled={!inputCode.trim()}
            className="px-5 py-2 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            Apply
          </button>
        </div>
      )}
      <div className="mt-3 text-xs text-gray-500 flex gap-2 flex-wrap pb-1">
        <span className="bg-gray-100 px-2 py-1 rounded cursor-pointer hover:bg-gray-200" onClick={() => setCoupon('WELCOME50')}>WELCOME50</span>
        <span className="bg-gray-100 px-2 py-1 rounded cursor-pointer hover:bg-gray-200" onClick={() => setCoupon('SAVE10')}>SAVE10</span>
      </div>
    </div>
  );
};
