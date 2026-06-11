import React from 'react';
import { Link, useParams } from 'react-router';
import { useStore } from '../store/useStore';
import { DUMMY_PRODUCTS } from '../utils/dummyData';
import { calculateDiscount, formatINR } from '../utils/pricing';
import { Star, ShoppingCart, Heart, Shield, RotateCcw, Truck, CheckCircle, ThumbsUp, MessageCircle } from 'lucide-react';
import { BackButton } from '../components/common/BackButton';

export const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart, toggleWishlist, wishlist } = useStore();
  
  const product = DUMMY_PRODUCTS.find(p => p.id === productId) || DUMMY_PRODUCTS[0];
  const isWishlisted = wishlist.some(item => item.id === product.id);

  const discountAmt = calculateDiscount(product.price, product.discountPercentage);
  const finalPrice = product.price - discountAmt;

  return (
    <div className="bg-white min-h-screen pb-12">
      <div className="max-w-[1400px] mx-auto pt-4 px-4 w-full">
        <BackButton fallback="/products" />
      </div>
      <div className="max-w-[1400px] mx-auto bg-white sm:border sm:border-gray-200 sm:my-4 sm:rounded-md flex flex-col md:flex-row">
        
        {/* Left: Images */}
        <div className="md:w-[40%] flex gap-2 p-4 md:border-r md:border-gray-200 sticky top-16 self-start max-h-[85vh]">
          {/* Thumbnails (desktop only usually, minimal here) */}
          <div className="hidden md:flex flex-col gap-2 w-16">
            <div className="w-16 h-16 border-2 border-blue-600 rounded p-1 cursor-pointer">
              <img src={product.imageUrl} alt="thumb" className="w-full h-full object-contain" />
            </div>
            {/* placeholders for more thumbs */}
            <div className="w-16 h-16 border border-gray-200 rounded p-1 opacity-50 cursor-pointer"><img src={product.imageUrl} alt="thumb" className="w-full h-full object-contain mix-blend-multiply" /></div>
          </div>
          
          {/* Main Image */}
          <div className="flex-1 relative border border-gray-100 rounded-md p-4 flex items-center justify-center min-h-[400px]">
            <img src={product.imageUrl} alt={product.name} className="w-full h-full max-h-[500px] object-contain mix-blend-multiply" />
            <button 
              onClick={() => toggleWishlist(product)}
              className="absolute top-4 right-4 bg-white shadow-md p-3 rounded-full hover:bg-gray-50 transition"
            >
              <Heart size={24} className={isWishlisted ? "text-red-500" : "text-gray-400"} fill={isWishlisted ? "currentColor" : "none"} />
            </button>
          </div>
        </div>

        {/* Right: Details */}
        <div className="md:w-[60%] p-6 lg:p-10">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">{product.category}</p>
          <h1 className="text-xl md:text-2xl font-normal text-gray-900 mb-2 leading-relaxed tracking-tight">{product.name}</h1>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center bg-green-700 text-white px-2 py-0.5 rounded text-sm font-bold gap-1">
              {product.rating.toFixed(1)} <Star size={12} fill="currentColor" />
            </div>
            <a href="#reviews" className="text-sm font-medium text-gray-500 hover:text-blue-600 cursor-pointer">
              {Math.floor(Math.random() * 50000) + 1000} Ratings & {Math.floor(Math.random() * 5000) + 100} Reviews
            </a>
          </div>

          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-3xl font-bold text-gray-900">{formatINR(finalPrice)}</span>
            {discountAmt > 0 && (
              <>
                <span className="text-base text-gray-500 line-through">{formatINR(product.price)}</span>
                <span className="text-base font-bold text-[#388e3c]">{product.discountPercentage}% off</span>
              </>
            )}
          </div>
          <p className="text-sm text-gray-900 font-medium mb-6">Delivery charges may apply.</p>

          <div className="flex gap-4 mb-8 sticky bottom-0 bg-white py-4 md:py-0 border-t md:border-t-0 md:static z-40">
            <button 
              onClick={() => addToCart(product)}
              className="flex-1 py-4 bg-[#ff9f00] hover:bg-[#f39800] text-white font-bold text-lg rounded shadow flex items-center justify-center gap-2 transition"
            >
              <ShoppingCart size={20} /> ADD TO CART
            </button>
            <button 
              className="flex-1 py-4 bg-[#fb641b] hover:bg-[#e05a18] text-white font-bold text-lg rounded shadow flex items-center justify-center transition"
            >
               BUY NOW
            </button>
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-500 mb-2 flex items-center gap-1"><Truck size={16} /> Delivery</h4>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden max-w-[300px] focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
               <span className="pl-3 text-gray-500">📍</span>
               <input type="text" placeholder="Enter Delivery Pincode" className="flex-1 py-2 px-3 outline-none text-sm font-medium" />
               <button className="text-blue-600 font-bold px-4 hover:bg-blue-50 transition h-full py-2">Check</button>
            </div>
            <div className="mt-2 text-sm">
               <span className="text-green-600 font-medium">Delivery by {new Date(Date.now() + 86400000 * 2).toLocaleDateString('en-US', {weekday:'short', month:'short', day:'numeric'})}</span> 
               <span className="text-gray-500"> | <span className="line-through">₹40</span> Free</span>
            </div>
            <div className="text-sm text-gray-500 mt-1">If ordered before 5:00 PM</div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden mb-8 text-sm">
            <div className="p-4 bg-gray-50 border-b border-gray-200 font-medium">Available offers</div>
            <ul className="p-4 space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-[#388e3c] mt-0.5">🏷️</span>
                <span><strong className="font-semibold text-gray-900">Bank Offer:</strong> 5% Cashback on KickZone Axis Bank Card</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#388e3c] mt-0.5">🏷️</span>
                <span><strong className="font-semibold text-gray-900">Special Price:</strong> Get extra {product.discountPercentage}% off (price inclusive of cashback/coupon)</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center p-3 border border-gray-100 rounded flex flex-col items-center gap-1">
              <RotateCcw size={24} className="text-blue-600 mb-1" />
              <span className="text-xs font-medium">7 Days Replacement</span>
            </div>
            <div className="text-center p-3 border border-gray-100 rounded flex flex-col items-center gap-1">
              <Truck size={24} className="text-blue-600 mb-1" />
              <span className="text-xs font-medium">Free Delivery</span>
            </div>
            <div className="text-center p-3 border border-gray-100 rounded flex flex-col items-center gap-1">
              <Shield size={24} className="text-blue-600 mb-1" />
              <span className="text-xs font-medium">1 Year Warranty</span>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <h3 className="text-xl font-medium mb-4">Product Description</h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-6">
              {product.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="border border-gray-200 rounded-lg p-4 mb-4">
              <h4 className="font-bold mb-3 border-b border-gray-100 pb-2">Specifications</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex"><span className="w-1/3 text-gray-500">Brand</span><span className="w-2/3 font-medium">{product.name.split(' ')[0]}</span></li>
                <li className="flex"><span className="w-1/3 text-gray-500">Model Name</span><span className="w-2/3 font-medium">{product.name}</span></li>
                <li className="flex"><span className="w-1/3 text-gray-500">Color</span><span className="w-2/3 font-medium">Default</span></li>
              </ul>
            </div>
            
            <Link to="/compare" className="text-blue-600 font-medium text-sm hover:underline flex items-center gap-1 border border-blue-200 bg-blue-50 w-fit px-4 py-2 rounded">
              Compare with similar items
            </Link>
          </div>

        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 mt-8 flex flex-col md:flex-row gap-6">
        
        {/* Left Col: Reviews & QnA */}
        <div className="md:w-2/3 space-y-6">
          <div id="reviews" className="bg-white p-6 rounded-md border border-gray-200">
            <div className="flex justify-between items-center mb-6">
               <h2 className="text-2xl font-bold flex items-center gap-2">Ratings & Reviews</h2>
               <button className="bg-white border border-gray-300 px-6 py-2 rounded shadow-sm text-sm font-medium hover:bg-gray-50 transition">Rate Product</button>
            </div>
            
            <div className="flex items-center gap-8 border-b border-gray-200 pb-6 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold flex items-center justify-center gap-2">{product.rating.toFixed(1)} <Star size={28} className="text-green-600 fill-green-600" /></div>
                <div className="text-gray-500 text-sm mt-1">1,245 Ratings &</div>
                <div className="text-gray-500 text-sm">180 Reviews</div>
              </div>
              <div className="flex-1 space-y-1">
                {[5,4,3,2,1].map((star, idx) => (
                  <div key={star} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-4">{star}</span>
                    <Star size={12} className="text-gray-400 fill-gray-400" />
                    <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className={`h-full ${star > 2 ? 'bg-green-600' : star === 2 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{width: `${star === 5 ? 65 : star === 4 ? 20 : star === 3 ? 10 : star === 2 ? 3 : 2}%`}}></div>
                    </div>
                    <span className="w-10 text-right">{star === 5 ? 854 : star === 4 ? 245 : star === 3 ? 102 : star === 2 ? 30 : 14}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {[
                { name: 'John D.', rating: 5, date: '1 month ago', text: 'Absolutely fantastic product! Exceeded my expectations in every way. The build quality is solid and it works flawlessy out of the box.' },
                { name: 'Sarah M.', rating: 4, date: '2 months ago', text: 'Good value for money. Delivery was slightly delayed but the product makes up for it. Would recommend to others.' },
                { name: 'Raj Kumar', rating: 5, date: '3 months ago', text: 'Genuine product. The packaging was perfect and the seller is highly reliable. Writing this review after 2 weeks of heavy usage.' }
              ].map((rev, i) => (
                <div key={i} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`px-1.5 py-0.5 rounded text-white text-xs font-bold flex items-center gap-1 ${rev.rating >= 4 ? 'bg-green-600' : 'bg-yellow-500'}`}>
                      {rev.rating} <Star size={10} fill="currentColor" />
                    </div>
                    <span className="font-bold text-gray-900">{rev.rating === 5 ? 'Excellent' : 'Very Good'}</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">{rev.text}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                     <div className="w-16 h-16 bg-gray-200 rounded animate-pulse cursor-pointer"></div>
                     <div className="w-16 h-16 bg-gray-200 rounded animate-pulse cursor-pointer"></div>
                  </div>

                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-gray-700">{rev.name}</span>
                      <span className="flex items-center gap-1 text-gray-400"><CheckCircle size={12}/> Certified Buyer</span>
                      <span>{rev.date}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1 hover:text-blue-600 transition"><ThumbsUp size={14}/> 12</button>
                      <button className="flex items-center gap-1 hover:text-gray-800 transition">Report</button>
                    </div>
                  </div>
                </div>
              ))}
              <button className="text-blue-600 font-medium text-sm hover:underline">All 180 reviews</button>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-md border border-gray-200">
            <div className="flex justify-between items-center mb-6">
               <h2 className="text-2xl font-bold flex items-center gap-2">Questions and Answers</h2>
               <button className="bg-white border border-gray-300 px-6 py-2 rounded shadow-sm text-sm font-medium hover:bg-gray-50 transition">Ask Question</button>
            </div>
            <div className="relative mb-6">
               <input type="text" placeholder="Have a question? Search for answers" className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:border-blue-500" />
            </div>
            
            <div className="space-y-6">
              {[
                { q: 'Is this compatible with 220V power supply?', a: 'Yes, it comes with a universal power adapter supporting 110V-240V.', author: 'TechCentral Support' },
                { q: 'Does it include a warranty card in the box?', a: 'Absolutely, a 1-year manufacturer warranty card is included inside the sealed package.', author: 'Verified Customer' }
              ].map((qa, i) => (
                <div key={i} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0 hover:bg-gray-50 -mx-4 px-4 py-2 transition rounded">
                  <div className="flex gap-4">
                    <span className="font-bold text-gray-400">Q:</span>
                    <div>
                      <p className="font-bold text-gray-900 text-sm mb-1">{qa.q}</p>
                      <div className="flex gap-4 mt-2">
                        <span className="font-bold text-gray-400">A:</span>
                        <div>
                          <p className="text-gray-700 text-sm mb-2">{qa.a}</p>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span className="font-medium">{qa.author}</span>
                            <button className="flex items-center gap-1 hover:text-blue-600 transition"><ThumbsUp size={14}/> {Math.floor(Math.random() * 20)+1}</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <button className="text-blue-600 font-medium text-sm hover:underline">All questions</button>
            </div>
          </div>
        </div>

        {/* Right Col: Similar & FBT */}
        <div className="md:w-1/3 flex flex-col gap-6">
          <div className="bg-white p-6 rounded-md border border-gray-200">
            <h2 className="text-lg font-bold mb-4">Similar Products</h2>
            <div className="grid grid-cols-2 gap-4">
               {DUMMY_PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4).map(p => (
                  <Link to={`/product/${p.id}`} key={p.id}>
                    <img src={p.imageUrl} className="w-full aspect-[4/5] object-contain bg-gray-50 mb-2 p-2 mix-blend-multiply" alt={p.name} />
                    <p className="text-xs font-medium line-clamp-2 hover:text-blue-600 transition">{p.name}</p>
                    <p className="font-bold mt-1 text-sm">{formatINR(p.price)}</p>
                  </Link>
               ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-md border border-gray-200 border-l-4 border-l-[#ff9f00]">
            <h2 className="text-lg font-bold mb-4">Frequently Bought Together</h2>
            <div className="grid grid-cols-2 gap-4">
               {DUMMY_PRODUCTS.sort(() => 0.5 - Math.random()).slice(0, 4).map(p => (
                  <Link key={p.id} to={`/product/${p.id}`}>
                    <img src={p.imageUrl} className="w-full aspect-[4/5] object-contain bg-gray-50 mb-2 p-2 mix-blend-multiply border border-gray-100 hover:border-[#ff9f00] transition-colors" alt={p.name} />
                    <p className="text-xs font-medium line-clamp-2 hover:text-blue-600 transition">{p.name}</p>
                    <p className="font-bold mt-1 text-sm">{formatINR(p.price)}</p>
                  </Link>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
