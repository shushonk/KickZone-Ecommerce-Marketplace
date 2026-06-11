import React from 'react';
import { Link } from 'react-router';
import { DUMMY_PRODUCTS } from '../utils/dummyData';
import { ProductCard } from '../components/product/ProductCard';
import { ChevronRight } from 'lucide-react';

const CATEGORIES = [
  { name: 'Top Offers', image: 'https://loremflickr.com/150/150/sale,discount?lock=200' },
  { name: 'Mobiles', image: 'https://loremflickr.com/150/150/smartphone?lock=201' },
  { name: 'Fashion', image: 'https://loremflickr.com/150/150/clothing?lock=202' },
  { name: 'Electronics', image: 'https://loremflickr.com/150/150/electronics?lock=203' },
  { name: 'Home', image: 'https://loremflickr.com/150/150/kitchen,home?lock=204' },
  { name: 'Appliances', image: 'https://loremflickr.com/150/150/appliance?lock=205' },
  { name: 'Travel', image: 'https://loremflickr.com/150/150/luggage,travel?lock=206' },
  { name: 'Beauty', image: 'https://loremflickr.com/150/150/beauty?lock=207' },
  { name: 'Grocery', image: 'https://loremflickr.com/150/150/grocery?lock=208' }
];

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1400 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 1400, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 4,
  },
  largeMobile: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  }
};

const ProductSection = ({ title, bg = 'bg-white', items = DUMMY_PRODUCTS }: { title: string, bg?: string, items?: any[] }) => (
  <section className={`${bg} py-4 mb-6 shadow-sm border border-gray-100`}>
    <div className="px-4 flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      <button className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-700 transition">
        <ChevronRight size={20} />
      </button>
    </div>
    <div className="px-4 pb-2">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        infinite={false}
        itemClass="px-2"
        containerClass="-mx-2"
      >
        {items.map((product, idx) => (
          <div key={`${product.id}-${idx}`} className="h-full">
            <ProductCard product={product} />
          </div>
        ))}
      </Carousel>
    </div>
  </section>
);

export const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slides = [
    { title: "KICKZONE MEGA SALE", subtitle: "50-80% OFF on Top Brands", img: "https://loremflickr.com/2000/600/sale,discount?lock=300" },
    { title: "ELECTRONICS DEALS", subtitle: "Upgrade Your Tech Today", img: "https://loremflickr.com/2000/600/electronics,laptop?lock=301" },
    { title: "GROCERY SUPER SAVER", subtitle: "Stock up your pantry", img: "https://loremflickr.com/2000/600/grocery,food?lock=302" },
    { title: "FASHION WEEKEND", subtitle: "Refresh Your Wardrobe", img: "https://loremflickr.com/2000/600/fashion,clothing?lock=303" },
    { title: "SNEAKER FEST", subtitle: "Step Up Your Game", img: "https://loremflickr.com/2000/600/sneakers,shoes?lock=304" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen pb-8">
      {/* Category Shortcut Row */}
      <div className="bg-white shadow-sm mb-4 py-4 px-4 overflow-x-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-wrap justify-center sm:justify-between gap-4 sm:gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {CATEGORIES.map((cat, i) => (
            <Link key={i} to={`/category/${cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="flex flex-col items-center gap-2 group cursor-pointer w-[80px] sm:w-[90px]">
              <div className="w-16 h-16 sm:w-[70px] sm:h-[70px] flex-shrink-0 hover:scale-105 transition-transform duration-300 bg-gray-50 rounded-full">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover rounded-full shadow-sm" 
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/150x150/f0f5ff/2874f0?text=${cat.name.charAt(0)}`;
                  }}
                />
              </div>
              <span className="text-xs sm:text-[14px] font-[500] text-[#333] group-hover:text-blue-600 text-center leading-tight">
                {cat.name}
                <span className="block mt-0.5 text-blue-500 lg:hidden group-hover:block transition-all opacity-0 group-hover:opacity-100">
                  <svg width="10" height="10" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="inline transform -rotate-90">
                    <path d="M4 6h8l-4 4-4-4z" fill="currentColor"/>
                  </svg>
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 z-0 relative">
        {/* Interactive Hero Carousel */}
        <div className="w-full h-48 md:h-80 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center group bg-gray-900">
          {slides.map((slide, idx) => (
            <div 
              key={idx} 
              className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <img className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" src={slide.img} alt={slide.title} />
              <div className="text-center z-20 px-4">
                <h1 className="text-3xl md:text-5xl font-black text-white mb-3 drop-shadow-lg">{slide.title}</h1>
                <p className="md:text-xl font-bold text-gray-900 bg-yellow-400 inline-block px-4 py-1.5 rounded-full uppercase mb-6 shadow-md">{slide.subtitle}</p>
                <div>
                  <Link to="/products" className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded shadow-lg transition-transform hover:scale-105">Shop Now</Link>
                </div>
              </div>
            </div>
          ))}
          
          {/* Controls */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/30 hover:bg-white text-gray-900 hover:text-blue-600 rounded-full flex items-center justify-center backdrop-blur z-30 transition hidden md:flex"
            onClick={() => setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))}
          >
            ←
          </button>
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/30 hover:bg-white text-gray-900 hover:text-blue-600 rounded-full flex items-center justify-center backdrop-blur z-30 transition hidden md:flex"
            onClick={() => setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1))}
          >
            →
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {slides.map((_, idx) => (
              <button 
                key={idx} 
                className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === currentSlide ? 'bg-white' : 'bg-white/40 hover:bg-white/60'}`}
                onClick={() => setCurrentSlide(idx)}
              />
            ))}
          </div>
        </div>

        {/* Categories Sections */}
        <ProductSection title="Flash Deals" items={DUMMY_PRODUCTS.slice(0, 10)} bg="bg-red-50 border-red-100" />
        <ProductSection title="Deals of the Day" items={DUMMY_PRODUCTS.filter(p => p.discountPercentage >= 40).slice(0, 10)} />
        
        {/* Deal Strip */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
           <div className="flex-1 bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
             <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">🚚</div>
             <div>
               <h4 className="font-bold text-gray-900">Free Delivery</h4>
               <p className="text-xs text-gray-500">On all orders over ₹499</p>
             </div>
           </div>
           <div className="flex-1 bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
             <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center font-bold text-xl">₹</div>
             <div>
               <h4 className="font-bold text-gray-900">Pay on Delivery</h4>
               <p className="text-xs text-gray-500">Available on most items</p>
             </div>
           </div>
           <div className="flex-1 bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
             <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center font-bold text-xl">🔄</div>
             <div>
               <h4 className="font-bold text-gray-900">Easy Returns</h4>
               <p className="text-xs text-gray-500">10-day replacement policy</p>
             </div>
           </div>
           <div className="flex-1 bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
             <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center font-bold text-xl">🏦</div>
             <div>
               <h4 className="font-bold text-gray-900">Bank Offers</h4>
               <p className="text-xs text-gray-500">Extra 10% off with KickZone Card</p>
             </div>
           </div>
        </div>

        <ProductSection title="Grocery Essentials" items={DUMMY_PRODUCTS.filter(p => p.category.includes('Grocery')).slice(0, 10)} />
        <ProductSection title="Fashion Deals" items={DUMMY_PRODUCTS.filter(p => p.category.includes('Fashion')).slice(0, 10)} />
        <ProductSection title="Shoes & Sneakers" items={DUMMY_PRODUCTS.filter(p => p.category === 'Shoes').slice(0, 10)} />
        <ProductSection title="Electronics Best Picks" items={DUMMY_PRODUCTS.filter(p => p.category === 'Electronics').slice(0, 10)} />
        <ProductSection title="Mobiles Store" items={DUMMY_PRODUCTS.filter(p => p.category === 'Mobiles').slice(0, 10)} bg="bg-blue-50 border-blue-100" />
        <ProductSection title="Toys & Kids" items={DUMMY_PRODUCTS.filter(p => p.category.includes('Toys') || p.category.includes('Baby')).slice(0, 10)} />
        <ProductSection title="Home & Kitchen" items={DUMMY_PRODUCTS.filter(p => p.category.includes('Home')).slice(0, 10)} />
        <ProductSection title="Beauty Picks" items={DUMMY_PRODUCTS.filter(p => p.category === 'Beauty').slice(0, 10)} />
        <ProductSection title="Sports & Fitness" items={DUMMY_PRODUCTS.filter(p => p.category.includes('Sports')).slice(0, 10)} />
        <ProductSection title="Books & Stationery" items={DUMMY_PRODUCTS.filter(p => p.category.includes('Books')).slice(0, 10)} />
        <ProductSection title="Travel Essentials" items={DUMMY_PRODUCTS.filter(p => p.category.includes('Travel')).slice(0, 10)} />
        <ProductSection title="KickZone Minutes" items={DUMMY_PRODUCTS.filter(p => p.category.includes('Minutes')).slice(0, 10)} bg="bg-yellow-50 border-yellow-100" />

        {/* 3 Column Banners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-orange-100 h-40 rounded-xl flex items-center justify-center p-6 text-center shadow-sm cursor-pointer hover:shadow-md transition relative overflow-hidden">
             <div className="z-10">
               <h3 className="font-black text-xl text-orange-900 mb-1">BUDGET STORE</h3>
               <p className="font-bold text-orange-700">Under ₹499</p>
             </div>
             <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-200 rounded-full opacity-50 blur-xl"></div>
          </div>
          <div className="bg-purple-100 h-40 rounded-xl flex items-center justify-center p-6 text-center shadow-sm cursor-pointer hover:shadow-md transition relative overflow-hidden">
             <div className="z-10">
               <h3 className="font-black text-xl text-purple-900 mb-1">PREMIUM PICKS</h3>
               <p className="font-bold text-purple-700">Explore Luxury Brands</p>
             </div>
             <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-200 rounded-full opacity-50 blur-xl"></div>
          </div>
          <div className="bg-green-100 h-40 rounded-xl flex items-center justify-center p-6 text-center shadow-sm cursor-pointer hover:shadow-md transition relative overflow-hidden">
             <div className="z-10">
               <h3 className="font-black text-xl text-green-900 mb-1">MEGA EXTRAVAGANZA</h3>
               <p className="font-bold text-green-700">Up to 60% Off Specials</p>
             </div>
             <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-200 rounded-full opacity-50 blur-xl"></div>
          </div>
        </div>

        <ProductSection title="Best Sellers" items={DUMMY_PRODUCTS.filter(p => p.rating >= 4.5).slice(0, 10)} />
        <ProductSection title="New Arrivals" items={DUMMY_PRODUCTS.slice(30, 40)} />
        <ProductSection title="Recently Viewed" items={DUMMY_PRODUCTS.slice(50, 60)} />
        <ProductSection title="Recommended For You" items={[...DUMMY_PRODUCTS].sort(() => Math.random() - 0.5).slice(0, 10)} />
        <ProductSection title="AI Recommended Products" items={DUMMY_PRODUCTS.slice(80, 90)} bg="bg-purple-50 border-purple-100" />
        <ProductSection title="Sponsored Products" items={DUMMY_PRODUCTS.slice(90, 100)} />
      </div>
    </div>
  );
};
