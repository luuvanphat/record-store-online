import React from 'react';
import FeaturedProducts from '../components/FeaturedProducts';
import type { Product } from '../types';

const CD_DATA: Product[] = [
  { id: 201, title: "After Hours", artist: "The Weeknd", price: 15.99, imgUrl: "https://placehold.co/600x600/ffffff/000000?text=After+Hours", category: 'cd' },
  { id: 202, title: "Future Nostalgia", artist: "Dua Lipa", price: 14.50, imgUrl: "https://placehold.co/600x600/ffffff/000000?text=Dua+Lipa", category: 'cd' },
  { id: 203, title: "Sour", artist: "Olivia Rodrigo", price: 13.99, imgUrl: "https://placehold.co/600x600/ffffff/000000?text=Sour", category: 'cd' },
  { id: 204, title: "Random Access Memories", artist: "Daft Punk", price: 16.00, imgUrl: "https://placehold.co/600x600/ffffff/000000?text=Daft+Punk", category: 'cd' },
];

const CD: React.FC = () => {
  return (
    <div className="flex-grow bg-white">
      <section className="pt-20 pb-10 px-6 text-center border-b border-rs-border">
        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 mb-4 block">Digital Audio Compact Disc</span>
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-[0.1em] font-display">Compact Discs</h1>
      </section>

      <div className="max-w-[1400px] mx-auto py-10">
        <div className="px-6 mb-4 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-400">
          <span>{CD_DATA.length} Sản phẩm</span>
        </div>
        <FeaturedProducts products={CD_DATA} title="" />
      </div>
    </div>
  );
};

export default CD;