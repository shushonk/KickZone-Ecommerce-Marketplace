import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useStore } from '../../store/useStore';
import { useAuthStore } from '../../store/authStore';
import { useLocationStore } from '../../store/locationStore';
import { Search, ShoppingCart, User as UserIcon, Heart, Menu, MapPin, Bell, LifeBuoy, TrendingUp, Download, LogOut, Package, WalletIcon, ChevronDown, Plane, ShoppingBag, X, Check, Store, Gift } from 'lucide-react';

export const Header: React.FC = () => {
  const { cart } = useStore();
  const { user, logout } = useAuthStore();
  const { currentLocation, updateLocation } = useLocationStore();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [pincodeInput, setPincodeInput] = useState('');
  const [pincodeError, setPincodeError] = useState('');
  const [pincodeSuccess, setPincodeSuccess] = useState('');
  const [isUpdatingPincode, setIsUpdatingPincode] = useState(false);

  // Example trending searches
  const trendingSearches = ['mobiles', 'shoes', 't shirts', 'laptops', 'watches', 'tv', 'sarees'];

  const categories = [
    { name: 'Mobiles', img: 'https://loremflickr.com/150/150/smartphone?lock=100' },
    { name: 'Fashion', img: 'https://loremflickr.com/150/150/clothing?lock=101' },
    { name: 'Electronics', img: 'https://loremflickr.com/150/150/electronics?lock=102' },
    { name: 'Home', img: 'https://loremflickr.com/150/150/kitchen?lock=103' },
    { name: 'Beauty', img: 'https://loremflickr.com/150/150/beauty?lock=104' },
    { name: 'Appliances', img: 'https://loremflickr.com/150/150/appliance?lock=105' },
    { name: 'Toys, Baby & Kids', img: 'https://loremflickr.com/150/150/toys?lock=106' },
    { name: 'Food & Household', img: 'https://loremflickr.com/150/150/grocery?lock=107' },
    { name: 'Auto Accessories', img: 'https://loremflickr.com/150/150/car?lock=108' },
    { name: 'Two Wheelers', img: 'https://loremflickr.com/150/150/motorcycle?lock=109' },
    { name: 'Sports & Fitness', img: 'https://loremflickr.com/150/150/sports?lock=110' },
    { name: 'Books & Stationery', img: 'https://loremflickr.com/150/150/stationery?lock=111' },
  ];

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchFocused(false);
      navigate('/search?q=' + encodeURIComponent(searchQuery.trim()));
    }
  };

  const handlePincodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pincodeInput.length !== 6) {
      setPincodeError('Please enter a valid 6-digit pincode');
      return;
    }
    
    setIsUpdatingPincode(true);
    setPincodeError('');
    setPincodeSuccess('');
    
    const success = await updateLocation(pincodeInput);
    setIsUpdatingPincode(false);
    
    if (success) {
      setPincodeSuccess('Delivery location updated');
      setTimeout(() => {
        setIsLocationModalOpen(false);
        setPincodeSuccess('');
        setPincodeInput('');
      }, 1000);
    } else {
      setPincodeError('Pincode not serviceable right now');
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto">
          {/* Top Row: Brand & Pincode (Desktop) */}
          <div className="hidden lg:flex items-center justify-between px-4 pt-3 pb-1">
            <div className="flex items-center gap-2">
              <Link to="/plus" className="bg-[#FFC200] px-3 py-1.5 rounded-full flex items-center gap-1">
                <span className="text-[#2874F0] font-bold italic text-sm tracking-tight text-center">KickZone Plus</span>
              </Link>
              <Link to="/minutes" className="bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors">
                <Store size={14} className="text-pink-600" />
                <span className="text-gray-700 font-medium text-sm">Minutes</span>
              </Link>
              <Link to="/travel" className="bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors">
                <Plane size={14} className="text-blue-500" />
                <span className="text-gray-700 font-medium text-sm">Travel</span>
              </Link>
              <Link to="/grocery" className="bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors">
                <ShoppingBag size={14} className="text-green-500" />
                <span className="text-gray-700 font-medium text-sm">Grocery</span>
              </Link>
            </div>
            
            <button 
              onClick={() => setIsLocationModalOpen(true)}
              className="flex items-center gap-1 text-sm text-gray-800 hover:text-blue-600 transition font-medium"
            >
              <MapPin size={16} /> 
              {currentLocation ? `${currentLocation.pincode} Select delivery location >` : 'Select delivery location >'}
            </button>
          </div>

          {/* Middle Row: Search & Actions */}
          <div className="flex items-center gap-4 px-4 py-2">
            
            <Link to="/" className="flex items-center shrink-0">
               <span className="text-[#2874F0] font-bold italic text-xl tracking-tight">KickZone</span>
            </Link>

            {/* Search Bar */}
            <div className="flex-1 relative hidden md:block">
              <form onSubmit={handleSearch} className="w-full relative">
                <div className={`flex items-center bg-[#F0F5FF] rounded-lg border ${isSearchFocused ? 'border-blue-500 bg-white shadow-sm' : 'border-transparent'} transition-all`}>
                  <button type="submit" className="p-2.5 text-gray-500 hover:text-blue-600">
                    <Search size={22} className="stroke-[2.5]" />
                  </button>
                  <input
                    type="text"
                    placeholder="Search for Products, Brands and More"
                    className="w-full bg-transparent border-none outline-none text-base text-gray-800 py-2.5 pr-4 placeholder-gray-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                  />
                </div>
              </form>

              {/* Search Dropsdown Overlay */}
              {isSearchFocused && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl z-[100] max-h-[80vh] overflow-y-auto">
                  
                  {searchQuery.length > 1 ? (
                     <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Categories / Suggestions */}
                        <div>
                          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Suggestions in Categories</h3>
                          <ul className="space-y-1">
                             <li>
                               <button 
                                 onMouseDown={() => navigate(`/search?q=${encodeURIComponent(searchQuery)}`)}
                                 className="w-full text-left flex items-center justify-between p-2 hover:bg-blue-50 rounded-lg group"
                               >
                                 <span className="font-semibold text-gray-800">{searchQuery} <span className="font-normal text-gray-500">in Mobiles</span></span>
                               </button>
                             </li>
                             <li>
                               <button 
                                 onMouseDown={() => navigate(`/search?q=${encodeURIComponent(searchQuery)}`)}
                                 className="w-full text-left flex items-center justify-between p-2 hover:bg-blue-50 rounded-lg group"
                               >
                                 <span className="font-semibold text-gray-800">{searchQuery} <span className="font-normal text-gray-500">in Electronics</span></span>
                               </button>
                             </li>
                          </ul>
                          
                          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 mt-4">Brands</h3>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 cursor-pointer text-gray-700">Apple</span>
                            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 cursor-pointer text-gray-700">Samsung</span>
                          </div>
                        </div>

                        {/* Direct Products Match */}
                        <div>
                           <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Products</h3>
                           <div className="flex flex-col gap-2">
                             <button 
                               onMouseDown={() => navigate(`/search?q=${encodeURIComponent(searchQuery)}`)}
                               className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded-lg text-left"
                             >
                                <div className="w-10 h-10 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                                   <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&q=80" alt="Result" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                   <p className="text-sm font-semibold line-clamp-1">{searchQuery} Pro Max</p>
                                   <p className="text-xs text-gray-500">Mobiles</p>
                                </div>
                             </button>
                             <button 
                               onMouseDown={() => navigate(`/search?q=${encodeURIComponent(searchQuery)}`)}
                               className="flex gap-3 text-sm font-bold text-[#2874F0] p-2 hover:bg-blue-50 rounded-lg mt-2"
                             >
                               View all results for "{searchQuery}"
                             </button>
                           </div>
                        </div>
                     </div>
                  ) : (
                    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2"><Search size={14}/> Trending Searches</h3>
                        <ul className="space-y-1">
                          {trendingSearches.map((term, idx) => (
                            <li key={idx}>
                              <button 
                                onMouseDown={() => {
                                  setSearchQuery(term);
                                  navigate('/search?q=' + encodeURIComponent(term));
                                }}
                                className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg text-left text-gray-800"
                              >
                                <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center shrink-0">
                                  <Search size={14} className="text-gray-400" />
                                </div>
                                <span className="font-medium text-sm">{term}</span>
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                         <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Popular Categories</h3>
                         <div className="flex flex-wrap gap-2">
                           <span onMouseDown={() => navigate('/category/mobiles')} className="px-3 py-1.5 border border-gray-200 rounded-full text-sm hover:border-[#2874F0] hover:text-[#2874F0] cursor-pointer text-gray-600 font-medium">Mobiles</span>
                           <span onMouseDown={() => navigate('/category/shoes')} className="px-3 py-1.5 border border-gray-200 rounded-full text-sm hover:border-[#2874F0] hover:text-[#2874F0] cursor-pointer text-gray-600 font-medium">Shoes</span>
                           <span onMouseDown={() => navigate('/category/electronics')} className="px-3 py-1.5 border border-gray-200 rounded-full text-sm hover:border-[#2874F0] hover:text-[#2874F0] cursor-pointer text-gray-600 font-medium">Electronics</span>
                           <span onMouseDown={() => navigate('/category/fashion')} className="px-3 py-1.5 border border-gray-200 rounded-full text-sm hover:border-[#2874F0] hover:text-[#2874F0] cursor-pointer text-gray-600 font-medium">Fashion</span>
                         </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-1 shrink-0">
              
              {/* Login/User Dropdown */}
              <div className="group relative">
                <Link to={user ? "/profile" : "/login"} className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-[#2874F0] transition-colors">
                  <UserIcon size={20} className={user ? "text-[#2874F0]" : "text-gray-700 group-hover:text-[#2874F0]"} />
                  <span className="font-medium text-gray-800 group-hover:text-[#2874F0]">{user ? user.name : 'Login'}</span>
                  <ChevronDown size={14} className="text-gray-500 group-hover:text-[#2874F0] transition-transform group-hover:rotate-180" />
                </Link>
                
                {/* Dropdown Box */}
                <div className="absolute top-full pt-1 right-0 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
                    {user ? (
                      <>
                        <Link to="/profile" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-100 text-gray-700">
                          <UserIcon size={18} className="text-[#2874F0]" /> My Profile
                        </Link>
                        <Link to="/supercoin" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-100 text-gray-700">
                          <TrendingUp size={18} className="text-[#2874F0]" /> SuperCoin Zone
                        </Link>
                        <Link to="/plus" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-100 text-gray-700">
                          <span className="text-[#2874F0] font-bold text-lg leading-none">+</span> KickZone Plus
                        </Link>
                        <Link to="/orders" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-100 text-gray-700">
                          <Package size={18} className="text-[#2874F0]" /> Orders
                        </Link>
                        <Link to="/wishlist" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-100 text-gray-700">
                          <Heart size={18} className="text-[#2874F0]" /> Wishlist
                        </Link>
                        <Link to="/coupons" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-100 text-gray-700">
                          <Gift size={18} className="text-[#2874F0]" /> Coupons
                        </Link>
                        <Link to="/gift-cards" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-100 text-gray-700">
                          <WalletIcon size={18} className="text-[#2874F0]" /> Gift Cards
                        </Link>
                        <Link to="/notifications" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-100 text-gray-700">
                          <Bell size={18} className="text-[#2874F0]" /> Notifications
                        </Link>
                        <button onClick={() => { logout(); navigate('/'); }} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-gray-700 text-left">
                          <LogOut size={18} className="text-gray-500" /> Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="px-4 py-3 flex justify-between items-center border-b border-gray-100">
                          <span className="text-sm font-medium text-gray-700">New customer?</span>
                          <Link to="/login" className="text-[#2874F0] text-sm font-bold hover:underline">Sign Up</Link>
                        </div>
                        <Link to="/profile" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-100 text-gray-700">
                          <UserIcon size={18} className="text-[#2874F0]" /> My Profile
                        </Link>
                        <Link to="/supercoin" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-100 text-gray-700">
                          <TrendingUp size={18} className="text-[#2874F0]" /> SuperCoin Zone
                        </Link>
                        <Link to="/plus" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-100 text-gray-700">
                          <span className="text-[#2874F0] font-bold text-lg leading-none">+</span> KickZone Plus
                        </Link>
                        <Link to="/orders" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-100 text-gray-700">
                          <Package size={18} className="text-[#2874F0]" /> Orders
                        </Link>
                        <Link to="/wishlist" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-100 text-gray-700">
                          <Heart size={18} className="text-[#2874F0]" /> Wishlist
                        </Link>
                        <Link to="/coupons" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-100 text-gray-700">
                          <Gift size={18} className="text-[#2874F0]" /> Coupons
                        </Link>
                        <Link to="/gift-cards" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-100 text-gray-700">
                          <WalletIcon size={18} className="text-[#2874F0]" /> Gift Cards
                        </Link>
                        <Link to="/notifications" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-gray-700 text-left">
                          <Bell size={18} className="text-[#2874F0]" /> Notifications
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Cart */}
              <Link to="/cart" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-50 text-gray-800 transition-colors">
                <div className="relative">
                  <ShoppingCart size={20} />
                  {cartCount > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-[#FF6161] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="font-medium">Cart</span>
              </Link>
              
              {/* Become a Seller */}
              <Link to="/become-seller" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-50 text-gray-800 transition-colors">
                <Store size={20} />
                <span className="font-medium">Become a Seller</span>
              </Link>

              {/* More Dropdown */}
              <div className="group relative">
                <button className="flex items-center gap-1 px-2 py-2 rounded-lg hover:bg-blue-50 text-gray-800 transition-colors">
                  <Menu size={20} />
                </button>
                <div className="absolute top-full pt-1 right-0 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
                    <Link to="/help-center" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-100 text-gray-700">
                      <LifeBuoy size={18} className="text-gray-500" /> 24x7 Customer Care
                    </Link>
                    <Link to="/about-us" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-gray-700">
                      <TrendingUp size={18} className="text-gray-500" /> Advertise
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Row: Categories (Desktop) */}
          <div className="hidden lg:flex items-center justify-between px-4 pt-4 pb-2 bg-white object-contain overflow-x-auto gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {categories.map((cat, idx) => (
              <Link key={idx} to={`/category/${cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="flex flex-col items-center gap-2 group min-w-[80px] cursor-pointer shrink-0">
                <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform drop-shadow-sm border border-gray-100 shrink-0 bg-gray-50">
                  <img 
                    src={cat.img} 
                    alt={cat.name} 
                    className="w-full h-full object-cover" 
                    onError={(e) => {
                      e.currentTarget.src = `https://placehold.co/150x150/f0f5ff/2874f0?text=${cat.name.charAt(0)}`;
                    }}
                  />
                </div>
                <span className={`text-[13px] leading-tight font-semibold text-gray-800 group-hover:text-[#2874F0] transition-colors flex items-center justify-center text-center max-w-[80px]`}>
                  {cat.name}
                  {(idx === 1 || idx === 3 || idx === 4 || idx === 5) && <ChevronDown size={14} className="text-gray-400 shrink-0 hidden lg:block" />}
                </span>
              </Link>
            ))}
          </div>

        </div>
      </header>

      {/* Location Selection Modal */}
      {isLocationModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-sm overflow-hidden text-gray-900 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <h3 className="font-semibold text-lg flex items-center gap-2">Choose Delivery Location</h3>
              <button onClick={() => setIsLocationModalOpen(false)} className="text-gray-400 hover:text-gray-600"><X size={20} /></button>
            </div>
            <div className="p-6">
               <p className="text-sm text-gray-600 mb-4">Select a delivery location to see product availability and delivery options</p>
               
               {pincodeError && <p className="text-red-500 text-xs font-medium mb-2">{pincodeError}</p>}
               {pincodeSuccess && <p className="text-green-500 text-xs font-medium mb-2 flex items-center gap-1"><Check size={14}/> {pincodeSuccess}</p>}
               
               <form onSubmit={handlePincodeSubmit} className="flex gap-2">
                 <input 
                   type="text" 
                   maxLength={6}
                   value={pincodeInput}
                   onChange={e => setPincodeInput(e.target.value.replace(/\D/g, ''))}
                   placeholder="Enter Pincode" 
                   className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:border-[#2874F0] transition-colors"
                 />
                 <button 
                  type="submit" 
                  disabled={isUpdatingPincode || pincodeInput.length !== 6}
                  className="bg-[#2874F0] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition disabled:bg-blue-300"
                 >
                   {isUpdatingPincode ? 'Checking...' : 'Apply'}
                 </button>
               </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


