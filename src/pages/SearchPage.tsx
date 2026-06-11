import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { ProductCard } from '../components/product/ProductCard';
import { DUMMY_PRODUCTS } from '../utils/dummyData';
import { PageHeader } from '../components/common/PageHeader';

export const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = useMemo(() => {
    if (!query) return DUMMY_PRODUCTS.slice(0, 40);
    const lowerQ = query.toLowerCase();
    return DUMMY_PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(lowerQ) || 
      p.description.toLowerCase().includes(lowerQ) ||
      (p.category && p.category.toLowerCase().includes(lowerQ))
    );
  }, [query]);

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8 w-full">
      <div className="mb-6">
        <PageHeader 
          title={query ? `Search results for "${query}"` : 'Discover Products'} 
          fallback="/" 
          className="rounded shadow-sm"
        >
          <span className="text-sm font-normal text-gray-500">({results.length} results)</span>
        </PageHeader>
      </div>
      
      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {results.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-white p-12 rounded shadow-sm text-center">
          <img src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="No results" className="w-64 h-auto mx-auto mb-6 opacity-70" onError={(e) => e.currentTarget.style.display = 'none'} />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Sorry, no results found!</h2>
          <p className="text-gray-500">Please check the spelling or try searching for something else</p>
        </div>
      )}
    </div>
  );
};
