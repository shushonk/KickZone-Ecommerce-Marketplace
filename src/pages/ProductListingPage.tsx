import React, { useState, useEffect } from 'react';
import { useSearchParams, useParams } from 'react-router';
import { ProductCard } from '../components/product/ProductCard';
import { DUMMY_PRODUCTS } from '../utils/dummyData';
import { SlidersHorizontal, X, FileCheck, LayoutGrid, List } from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';

interface ProductListingPageProps {
  overrideCategory?: string;
}

export const ProductListingPage: React.FC<ProductListingPageProps> = ({ overrideCategory }) => {
  const [searchParams] = useSearchParams();
  const { categoryName } = useParams();
  
  const query = searchParams.get('q');
  const [sortBy, setSortBy] = useState('popularity');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid'|'list'>('grid');
  
  // Real Filtering state
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minRating, setMinRating] = useState<number>(0);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  // Resolve active category constraint
  const activeCategoryConstraint = overrideCategory || categoryName;

  let filteredProducts = [...DUMMY_PRODUCTS];
  
  if (activeCategoryConstraint && activeCategoryConstraint !== 'top-offers') {
    const lowercaseCat = activeCategoryConstraint.toLowerCase().replace(/-/g, ' ');
    filteredProducts = filteredProducts.filter(p => {
      const pCat = p.category.toLowerCase();
      
      return pCat === lowercaseCat || 
             pCat.replace(/ /g, '-') === activeCategoryConstraint.toLowerCase() ||
             lowercaseCat.includes(pCat.replace(' & ', ' ')) ||
             pCat.replace(' & ', ' ').includes(lowercaseCat) ||
             (lowercaseCat.includes('grocery') || lowercaseCat.includes('food')) && pCat === 'grocery' ||
             (lowercaseCat.includes('toys') || lowercaseCat.includes('baby')) && (pCat === 'toys' || pCat === 'baby & kids') ||
             (lowercaseCat.includes('books') && pCat === 'books & stationery') ||
             (lowercaseCat.includes('two') && pCat === 'two wheelers') ||
             (lowercaseCat.includes('fashion') && (pCat === 'men fashion' || pCat === 'women fashion')) ||
             (lowercaseCat.includes('auto') && pCat === 'accessories');
    });
  } else if (activeCategoryConstraint === 'top-offers') {
    // Show high discount products for Top Offers
    filteredProducts = filteredProducts.filter(p => p.discountPercentage >= 30);
  }

  // Text search
  if (query) {
    const qLower = query.toLowerCase();
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(qLower) || 
      p.category.toLowerCase().includes(qLower) ||
      (p.brand && p.brand.toLowerCase().includes(qLower)) ||
      (p.subCategory && p.subCategory.toLowerCase().includes(qLower))
    );
  }
  
  // Interactive Filters
  if (selectedCategories.length > 0) {
    filteredProducts = filteredProducts.filter(p => selectedCategories.includes(p.category));
  }
  if (minRating > 0) {
    filteredProducts = filteredProducts.filter(p => p.rating >= minRating);
  }
  if (inStockOnly) {
    filteredProducts = filteredProducts.filter(p => p.stock && p.stock > 0);
  }

  // Sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'newest') return b.id.localeCompare(a.id);
    if (sortBy === 'biggest-discount') return b.discountPercentage - a.discountPercentage;
    return b.rating - a.rating; // Popularity fallback to rating
  });

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setMinRating(0);
    setInStockOnly(false);
  };

  const FilterSidebar = () => (
    <>
      <div className="p-4 border-b border-gray-200 flex justify-between items-center md:hidden">
        <h2 className="text-xl font-bold text-gray-900">Filters</h2>
        <button onClick={() => setShowMobileFilters(false)} className="p-2 text-gray-500 hover:text-gray-900">
          <X size={20} />
        </button>
      </div>
      <div className="p-4 border-b border-gray-200 hidden md:block">
        <h2 className="text-xl font-bold text-gray-900">Filters</h2>
      </div>
      {!activeCategoryConstraint && (
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-bold text-xs tracking-widest text-gray-500 uppercase mb-3">Categories</h3>
          <div className="space-y-3 text-sm text-gray-700">
            {['Electronics', 'Fashion', 'Mobiles', 'Grocery', 'Shoes', 'Home & Kitchen', 'Beauty', 'Toys', 'Sports'].map(cat => (
               <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                 <input 
                   type="checkbox" 
                   checked={selectedCategories.includes(cat)}
                   onChange={() => toggleCategory(cat)}
                   className="w-4 h-4 rounded text-[#2874F0] focus:ring-[#2874F0]" 
                 /> 
                 <span className="group-hover:text-[#2874F0] transition-colors">{cat}</span>
               </label>
            ))}
          </div>
        </div>
      )}
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-bold text-xs tracking-widest text-gray-500 uppercase mb-3">Customer Ratings</h3>
        <div className="space-y-3 text-sm text-gray-700">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="radio" name="rating" checked={minRating === 4} onChange={() => setMinRating(4)} className="w-4 h-4 text-[#2874F0] focus:ring-[#2874F0]" /> 
            <span className="group-hover:text-[#2874F0] transition-colors">4★ & above</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="radio" name="rating" checked={minRating === 3} onChange={() => setMinRating(3)} className="w-4 h-4 text-[#2874F0] focus:ring-[#2874F0]" /> 
            <span className="group-hover:text-[#2874F0] transition-colors">3★ & above</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="radio" name="rating" checked={minRating === 0} onChange={() => setMinRating(0)} className="w-4 h-4 text-[#2874F0] focus:ring-[#2874F0]" /> 
            <span className="group-hover:text-[#2874F0] transition-colors">Any Rating</span>
          </label>
        </div>
      </div>
      <div className="p-4 border-b border-gray-200">
         <h3 className="font-bold text-xs tracking-widest text-gray-500 uppercase mb-3">Availability</h3>
         <label className="flex items-center gap-3 cursor-pointer group">
           <input 
             type="checkbox" 
             checked={inStockOnly}
             onChange={(e) => setInStockOnly(e.target.checked)}
             className="w-4 h-4 rounded text-[#2874F0] focus:ring-[#2874F0]" 
           /> 
           <span className="group-hover:text-[#2874F0] transition-colors">Exclude Out of Stock</span>
         </label>
      </div>
    </>
  );

  return (
    <div className="bg-gray-100 min-h-screen py-4 px-2 sm:px-4">
      <div className="max-w-[1400px] mx-auto mb-4">
        <PageHeader title={query ? `Search Results: ${query}` : activeCategoryConstraint ? `${activeCategoryConstraint}` : 'All Products'} fallback="/" className="rounded-xl" />
      </div>
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-4 relative">
        
        {/* Mobile Filter Drawer Overlay */}
        {showMobileFilters && (
          <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setShowMobileFilters(false)} />
        )}
        
        {/* Filters Sidebar */}
        <div className={`fixed md:sticky top-0 left-0 md:left-auto h-full md:h-auto md:top-24 w-[280px] md:w-64 bg-white shadow-xl md:shadow-sm rounded-r-xl md:rounded-l-xl md:rounded-xl self-start z-[100] md:z-0 transition-transform duration-300 overflow-y-auto ${showMobileFilters ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
          <FilterSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white shadow-sm rounded-xl overflow-hidden">
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-gray-100">
            {query && (
              <p className="text-sm text-gray-500 mb-2">Search results for "{query}"</p>
            )}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
              <div>
                <h1 className="text-2xl font-black text-gray-900 capitalize">{query ? 'Search Results' : activeCategoryConstraint ? activeCategoryConstraint : 'All Products'}</h1>
                <p className="text-sm text-gray-500 mt-1 font-medium">(Showing 1 – {Math.min(sortedProducts.length, 24)} of {sortedProducts.length} products)</p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center bg-gray-100 p-1 rounded-lg">
                   <button onClick={() => setViewMode('grid')} className={`p-1.5 rounded-md transition ${viewMode === 'grid' ? 'bg-white shadow text-[#2874F0]' : 'text-gray-500 hover:text-gray-800'}`}><LayoutGrid size={18} /></button>
                   <button onClick={() => setViewMode('list')} className={`p-1.5 rounded-md transition ${viewMode === 'list' ? 'bg-white shadow text-[#2874F0]' : 'text-gray-500 hover:text-gray-800'}`}><List size={18} /></button>
                </div>
                
                <button 
                  onClick={() => setShowMobileFilters(true)}
                  className="md:hidden flex flex-1 items-center justify-center gap-2 text-sm font-bold border border-gray-300 py-2 rounded-lg"
                >
                  <SlidersHorizontal size={16} /> Filters
                </button>
                
                <div className="flex flex-1 items-center gap-2 text-sm border border-gray-300 py-2 px-3 rounded-lg bg-gray-50">
                  <span className="font-medium text-gray-600 hidden sm:inline">Sort By</span>
                  <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent font-bold text-gray-900 outline-none cursor-pointer w-full"
                  >
                    <option value="popularity">Popularity</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="biggest-discount">Biggest Discount</option>
                    <option value="newest">Newest First</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Filter Chips */}
            {(selectedCategories.length > 0 || minRating > 0 || inStockOnly) && (
              <div className="flex flex-wrap gap-2 mt-4">
                {minRating > 0 && (
                  <span onClick={() => setMinRating(0)} className="px-3 py-1.5 bg-[#f0f5ff] text-[#2874F0] border border-blue-100 rounded-full text-xs font-bold flex items-center gap-1 cursor-pointer hover:bg-blue-100">
                    {minRating}★ & above <X size={12} />
                  </span>
                )}
                {selectedCategories.map(cat => (
                  <span key={cat} onClick={() => toggleCategory(cat)} className="px-3 py-1.5 bg-[#f0f5ff] text-[#2874F0] border border-blue-100 rounded-full text-xs font-bold flex items-center gap-1 cursor-pointer hover:bg-blue-100">
                    {cat} <X size={12} />
                  </span>
                ))}
                {inStockOnly && (
                  <span onClick={() => setInStockOnly(false)} className="px-3 py-1.5 bg-[#f0f5ff] text-[#2874F0] border border-blue-100 rounded-full text-xs font-bold flex items-center gap-1 cursor-pointer hover:bg-blue-100">
                    In Stock Only <X size={12} />
                  </span>
                )}
                <button onClick={clearAllFilters} className="px-3 py-1.5 text-[#2874F0] text-xs font-bold hover:underline">Clear all</button>
              </div>
            )}
          </div>

          {/* Product Grid */}
          {sortedProducts.length === 0 ? (
            <div className="p-12 text-center">
              <h2 className="text-xl font-bold text-gray-900 mb-2">No products found</h2>
              <p className="text-gray-500">Try adjusting your filters or search query.</p>
            </div>
          ) : (
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-gray-50 border-t border-gray-100"
              : "flex flex-col gap-4 p-4 bg-gray-50 border-t border-gray-100"
            }>
              {sortedProducts.slice(0, 24).map(product => (
                <div key={product.id} className={viewMode === 'grid' ? '' : 'sm:w-[400px] mx-auto w-full'}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {sortedProducts.length > 24 && (
            <div className="p-6 border-t border-gray-100 flex justify-between items-center bg-white">
               <span className="text-sm font-medium text-gray-500 hidden sm:inline">Showing 1 to 24 of {sortedProducts.length} results</span>
               <div className="flex gap-2 mx-auto sm:mx-0">
                 <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center font-bold text-gray-600 hover:bg-gray-50 disabled:opacity-50">←</button>
                 <button className="w-10 h-10 rounded-lg bg-[#2874F0] text-white font-bold flex items-center justify-center shadow-md">1</button>
                 <button className="w-10 h-10 rounded-lg border border-gray-200 hover:bg-gray-50 font-bold text-gray-700 flex items-center justify-center">2</button>
                 <button className="w-10 h-10 rounded-lg border border-gray-200 hover:bg-gray-50 font-bold text-gray-700 flex items-center justify-center">3</button>
                 <span className="w-10 h-10 flex items-center justify-center text-gray-400 font-black">...</span>
                 <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center font-bold text-gray-600 hover:bg-gray-50">→</button>
               </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
