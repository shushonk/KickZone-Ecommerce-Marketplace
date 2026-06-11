import React from 'react';
import { ProductCard } from '../components/product/ProductCard';
import { useStore } from '../store/useStore';
import { Zap, Clock, ThumbsUp } from 'lucide-react';
import { DUMMY_PRODUCTS } from '../utils/dummyData';

export const KickZoneMinutesPage: React.FC = () => {
  // Fetch minutes products
  const minutesProducts = DUMMY_PRODUCTS.filter(p => p.category === 'Minutes' || p.category === 'Grocery').slice(0, 24);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Search Header for Minutes */}
      <div className="bg-purple-700 text-white px-4 py-8 text-center sticky top-0 z-10">
        <h1 className="text-3xl font-extrabold mb-2 flex items-center justify-center gap-2">
          <Zap className="text-yellow-400" /> KickZone Minutes <Zap className="text-yellow-400" />
        </h1>
        <p className="text-purple-100 font-medium mb-6">Groceries and Essentials delivered in 10-30 minutes!</p>
        
        <div className="max-w-2xl mx-auto flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {['Snacks', 'Beverages', 'Personal Care', 'Dairy', 'Fruits & Veg', 'Instant Food'].map(c => (
            <button key={c} className="whitespace-nowrap px-4 py-1.5 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-colors">
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-white p-4 rounded shadow-sm border flex items-center gap-4">
             <div className="bg-purple-100 p-3 rounded-full text-purple-700"><Clock size={24} /></div>
             <div>
               <h3 className="font-bold">Superfast Delivery</h3>
               <p className="text-xs text-gray-500">Delivered within minutes to your door.</p>
             </div>
          </div>
          <div className="bg-white p-4 rounded shadow-sm border flex items-center gap-4">
             <div className="bg-green-100 p-3 rounded-full text-green-700"><Zap size={24} /></div>
             <div>
               <h3 className="font-bold">Fresh Quality</h3>
               <p className="text-xs text-gray-500">Highest quality standards strictly maintained.</p>
             </div>
          </div>
          <div className="bg-white p-4 rounded shadow-sm border flex items-center gap-4">
             <div className="bg-blue-100 p-3 rounded-full text-blue-700"><ThumbsUp size={24} /></div>
             <div>
               <h3 className="font-bold">Best Prices</h3>
               <p className="text-xs text-gray-500">No surge pricing, always affordable.</p>
             </div>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-6">Quick Picks For You</h2>
        
        {minutesProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {minutesProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Loading products...</p>
        )}
      </div>
    </div>
  );
};
