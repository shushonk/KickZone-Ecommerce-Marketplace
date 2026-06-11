import React from 'react';
import { CartItem } from '../../types';
import { useStore } from '../../store/useStore';
import { formatINR, calculateDiscount } from '../../utils/pricing';
import { Minus, Plus, Trash2, Heart } from 'lucide-react';

import { motion } from 'motion/react';

interface CartItemCardProps {
  item: CartItem;
}

export const CartItemCard: React.FC<CartItemCardProps> = ({ item }) => {
  const { updateQuantity, removeFromCart, moveToWishlist } = useStore();
  const discountAmt = calculateDiscount(item.price, item.discountPercentage);
  const finalPrice = item.price - discountAmt;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="flex flex-col sm:flex-row gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm mb-4"
    >
      <div className="w-full sm:w-32 h-32 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden">
        <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-gray-900 line-clamp-2">{item.name}</h3>
          <p className="text-sm text-gray-500 mt-1">{item.category}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="font-bold text-lg">{formatINR(finalPrice)}</span>
            {discountAmt > 0 && (
              <>
                <span className="text-sm text-gray-400 line-through">{formatINR(item.price)}</span>
                <span className="text-xs font-semibold text-green-600">{item.discountPercentage}% OFF</span>
              </>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-3 border border-gray-200 rounded-lg p-1">
            <button 
              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
              className="p-1 hover:bg-gray-100 rounded text-gray-600 disabled:opacity-50"
              disabled={item.quantity <= 1}
            >
              <Minus size={16} />
            </button>
            <span className="w-6 text-center font-medium">{item.quantity}</span>
            <button 
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="p-1 hover:bg-gray-100 rounded text-gray-600"
            >
              <Plus size={16} />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => moveToWishlist(item.id)}
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg flex items-center gap-1"
            >
              <Heart size={16} /> <span className="hidden sm:inline">Save</span>
            </button>
            <button 
              onClick={() => removeFromCart(item.id)}
              className="px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg flex items-center gap-1"
            >
              <Trash2 size={16} /> <span className="hidden sm:inline">Remove</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
