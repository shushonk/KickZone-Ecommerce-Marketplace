import React from 'react';
import { Link, useNavigate } from 'react-router';
import { useStore } from '../../store/useStore';
import { Product } from '../../types';
import { calculateDiscount, formatINR } from '../../utils/pricing';
import { Heart, Star, ShoppingCart, Info } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const { toggleWishlist, wishlist, addToCart } = useStore();
  const isWishlisted = wishlist.some(item => item.id === product.id);
  
  const discountAmt = calculateDiscount(product.price, product.discountPercentage);
  const finalPrice = product.price - discountAmt;
  
  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="group flex flex-col h-full bg-white border border-gray-100 hover:shadow-[0_2px_4px_0_rgba(0,0,0,.08)] transition-all duration-300">
      <Link to={`/product/${product.id}`} className="relative aspect-[4/5] bg-gray-50 flex items-center justify-center p-4 overflow-hidden block">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
          onError={(e) => { 
            const fallbackText = encodeURIComponent(product.subCategory || product.category || 'Product');
            e.currentTarget.src = `https://placehold.co/400x500/eeeeee/333333?text=${fallbackText}`; 
          }}
        />
        <button 
          onClick={handleWishlist}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-colors z-10 ${isWishlisted ? 'bg-red-50 text-red-500' : 'bg-white/80 text-gray-400 hover:text-red-500'}`}
        >
          <Heart size={18} fill={isWishlisted ? 'currentColor' : 'none'} />
        </button>
        {product.discountPercentage > 20 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">
             {Math.random() > 0.5 ? 'LIMITED OFFER' : 'HOT DEAL'}
          </div>
        )}
      </Link>
      
      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{product.category}</p>
        <Link to={`/product/${product.id}`} className="block font-medium text-gray-900 line-clamp-2 md:line-clamp-2 lg:line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors flex-grow h-[40px]">
          {product.name}
        </Link>
        
        <div className="flex items-center gap-1 mb-2 mt-auto">
          <div className="flex items-center bg-green-700 text-white px-1.5 py-0.5 rounded text-[10px] font-bold gap-0.5">
            {product.rating.toFixed(1)} <Star size={10} fill="currentColor" />
          </div>
          <span className="text-xs text-gray-500">({Math.floor(Math.random() * 5000) + 100})</span>
        </div>
        
        <div className="mt-2">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-lg font-bold text-gray-900">{formatINR(finalPrice)}</span>
            {discountAmt > 0 && (
              <>
                <span className="text-sm text-gray-500 line-through">{formatINR(product.price)}</span>
                <span className="text-xs font-bold text-[#388e3c]">{product.discountPercentage}% off</span>
              </>
            )}
          </div>
          <p className="text-[10px] font-semibold text-gray-500 mb-3 flex items-center gap-1">
            <span className="text-green-600">✓ Free delivery</span> 
            {Math.random() > 0.7 && <span className="text-red-500 ml-auto text-[9px] uppercase">Only {Math.floor(Math.random() * 5) + 1} left</span>}
          </p>
          
          <div className="flex gap-2">
             <button 
               onClick={() => navigate(`/product/${product.id}`)}
               className="flex-1 flex items-center justify-center gap-1 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 hover:border-gray-300 rounded-sm text-[11px] font-[500] transition-colors tracking-wide"
             >
               Details
             </button>
             <button 
               onClick={handleAddToCart}
               className="flex-1 flex items-center justify-center gap-1 py-1.5 bg-[#ff9f00] hover:bg-[#fb641b] text-white rounded-sm text-[11px] font-[500] transition-colors tracking-wide shadow-sm"
             >
               Add to Cart
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};
