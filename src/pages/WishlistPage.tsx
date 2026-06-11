import React from 'react';
import { useStore } from '../store/useStore';
import { ProductCard } from '../components/product/ProductCard';
import { EmptyState } from '../components/common/EmptyState';
import { Heart } from 'lucide-react';

export const WishlistPage: React.FC = () => {
  const { wishlist } = useStore();

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">My Wishlist ({wishlist.length})</h1>
      
      {wishlist.length === 0 ? (
        <EmptyState 
          title="Empty Wishlist" 
          description="You have no items in your wishlist. Start adding!" 
          icon={<Heart size={64} className="text-gray-300" />} 
        />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {wishlist.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
