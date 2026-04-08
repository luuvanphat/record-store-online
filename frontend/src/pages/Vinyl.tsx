import React, { useState, useMemo } from 'react';
import FeaturedProducts from '../components/FeaturedProducts';
import { ChevronDown } from 'lucide-react';
import type { Product } from '../types';

const VINYL_DATA: Product[] = [
  { id: 1, title: "Abbey Road", artist: "The Beatles", price: 29.99, imgUrl: "https://placehold.co/600x600/ffffff/000000?text=Abbey+Road", category: 'vinyl' },
  { id: 2, title: "Dark Side of the Moon", artist: "Pink Floyd", price: 34.99, imgUrl: "https://placehold.co/600x600/ffffff/000000?text=Dark+Side", category: 'vinyl' },
  { id: 3, title: "Midnights", artist: "Taylor Swift", price: 38.50, imgUrl: "https://placehold.co/600x600/ffffff/000000?text=Midnights", category: 'vinyl' },
  { id: 4, title: "Swimming", artist: "Mac Miller", price: 35.00, imgUrl: "https://placehold.co/600x600/ffffff/000000?text=Swimming", category: 'vinyl' },
  { id: 5, title: "Blue Train", artist: "John Coltrane", price: 28.00, imgUrl: "https://placehold.co/600x600/ffffff/000000?text=Coltrane", category: 'vinyl' },
  { id: 6, title: "Kind of Blue", artist: "Miles Davis", price: 31.00, imgUrl: "https://placehold.co/600x600/ffffff/000000?text=Miles", category: 'vinyl' },
];

const Vinyl: React.FC = () => {
  const [sortOrder, setSortOrder] = useState<string>('featured');
  const [filterGenre, setFilterGenre] = useState<string>('all');

  const filteredProducts = useMemo(() => {
    let result = [...VINYL_DATA];

    if (filterGenre !== 'all') {
      result = result.filter(p => p.artist.toLowerCase().includes(filterGenre.toLowerCase()));
    }

    if (sortOrder === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOrder === 'az') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [sortOrder, filterGenre]);

  return (
    <div className="flex-grow bg-white">
      <div className="max-w-[1400px] mx-auto px-6 pt-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-[0.2em] font-display mb-4">Vinyl</h1>
          <p className="text-[11px] text-gray-500 uppercase tracking-[0.3em]">Discover our full collection</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-b border-rs-border py-4 mb-8 gap-4">
          <div className="flex gap-8">
            <div className="relative group">
              <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:opacity-50 transition-opacity">
                Genre: {filterGenre === 'all' ? 'All' : filterGenre} <ChevronDown size={12} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-rs-border shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-40">
                {['all', 'Rock', 'Pop', 'Jazz', 'Hip Hop'].map(genre => (
                  <button 
                    key={genre}
                    onClick={() => setFilterGenre(genre)}
                    className="block w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest hover:bg-rs-gray-light"
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 relative group">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">Sắp xếp:</span>
            <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:opacity-50 transition-opacity">
              {sortOrder === 'featured' ? 'Nổi bật' : sortOrder === 'price-low' ? 'Giá thấp đến cao' : sortOrder === 'price-high' ? 'Giá cao đến thấp' : 'Tên A-Z'} 
              <ChevronDown size={12} />
            </button>
            <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-rs-border shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-40 text-right">
              {[
                { label: 'Nổi bật', value: 'featured' },
                { label: 'Giá thấp đến cao', value: 'price-low' },
                { label: 'Giá cao đến thấp', value: 'price-high' },
                { label: 'Tên A-Z', value: 'az' }
              ].map(option => (
                <button 
                  key={option.value}
                  onClick={() => setSortOrder(option.value)}
                  className="block w-full text-right px-4 py-3 text-[10px] uppercase tracking-widest hover:bg-rs-gray-light"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-20">
          <FeaturedProducts products={filteredProducts} title="" />
          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-[11px] uppercase tracking-[0.2em] text-gray-400">
              Không tìm thấy sản phẩm phù hợp.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Vinyl;