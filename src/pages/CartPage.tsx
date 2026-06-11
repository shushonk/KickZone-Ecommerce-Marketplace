import React from 'react';
import { useNavigate } from 'react-router';
import { useStore } from '../store/useStore';
import { CartItemCard } from '../components/cart/CartItemCard';
import { PriceSummary } from '../components/cart/PriceSummary';
import { CouponBox } from '../components/cart/CouponBox';
import { EmptyState } from '../components/common/EmptyState';
import { DUMMY_PRODUCTS } from '../utils/dummyData';
import { calculateDiscount, formatINR } from '../utils/pricing';
import { AnimatePresence } from 'motion/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { PageHeader } from '../components/common/PageHeader';

export const CartPage: React.FC = () => {
  const { cart, addToCart } = useStore();
  const navigate = useNavigate();

  const recommendedProducts = DUMMY_PRODUCTS.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <PageHeader title="Shopping Cart" fallback="/" className="rounded shadow-sm mb-8" />
      
      {cart.length === 0 ? (
        <EmptyState 
          title="Your cart is empty" 
          description="Looks like you haven't added anything to your cart yet. Explore our wide range of products."
        />
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
              <div className="p-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center text-sm font-medium text-gray-600">
                <span>{cart.length} Item(s) in Cart</span>
              </div>
              <div className="p-4 bg-gray-50/50 space-y-4 overflow-hidden">
                <AnimatePresence mode="popLayout">
                  {cart.map(item => (
                    <CartItemCard key={item.id} item={item} />
                  ))}
                </AnimatePresence>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <h2 className="text-xl font-bold mb-4">Recommended Add-ons</h2>
              <div className="grid grid-cols-3 gap-4">
                {recommendedProducts.map(product => (
                  <div key={product.id} className="border p-4 rounded-xl flex flex-col justify-between">
                    <img src={product.imageUrl} alt={product.name} className="w-full h-32 object-cover rounded-lg mb-2" />
                    <h4 className="text-sm font-medium line-clamp-2 mb-1">{product.name}</h4>
                    <span className="font-bold">{formatINR(product.price - calculateDiscount(product.price, product.discountPercentage))}</span>
                    <button 
                      onClick={() => addToCart(product)}
                      className="mt-2 w-full py-2 text-sm font-medium border rounded-lg hover:bg-gray-50 transition"
                    >
                      Add
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <CouponBox />
              <PriceSummary />
              <button
                onClick={() => navigate('/checkout/address')}
                className="w-full mt-4 bg-[#FF9F00] hover:bg-[#F39800] text-white py-4 rounded-xl font-bold text-lg shadow-md transition-colors"
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      )}
      
      {cart.length > 0 && (
         <div className="lg:hidden mt-12 pb-24">
          <h2 className="text-xl font-bold mb-4">Recommended Add-ons</h2>
          <div className="pb-4">
            <Carousel
              responsive={{
                mobile: { breakpoint: { max: 768, min: 0 }, items: 2 },
                tablet: { breakpoint: { max: 1024, min: 768 }, items: 3 }
              }}
              swipeable={true}
              draggable={true}
              infinite={false}
              itemClass="px-2"
              containerClass="-mx-2"
            >
              {recommendedProducts.map(product => (
                <div key={product.id} className="border p-4 rounded-xl flex flex-col justify-between h-full bg-white">
                  <img src={product.imageUrl} alt={product.name} className="w-full h-32 object-cover rounded-lg mb-2" />
                  <h4 className="text-sm font-medium line-clamp-2 mb-1">{product.name}</h4>
                  <span className="font-bold">{formatINR(product.price - calculateDiscount(product.price, product.discountPercentage))}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="mt-2 w-full py-2 text-sm font-medium border rounded-lg hover:bg-gray-50 transition"
                  >
                    Add
                  </button>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
};
