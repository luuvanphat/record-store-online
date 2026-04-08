import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedProducts from '../components/FeaturedProducts';
import type { Product } from '../types';

const mockProducts: Product[] = [
  { id: 1, title: "The Rise and Fall of Ziggy Stardust", artist: "David Bowie", price: 32.00, imgUrl: "https://placehold.co/600x600/ffffff/000000?text=Bowie" },
  { id: 2, title: "Midnights", artist: "Taylor Swift", price: 38.50, imgUrl: "https://placehold.co/600x600/ffffff/000000?text=Midnights" },
  { id: 3, title: "Blue Train", artist: "John Coltrane", price: 28.00, imgUrl: "https://placehold.co/600x600/ffffff/000000?text=Coltrane" },
  { id: 4, title: "Swimming", artist: "Mac Miller", price: 35.00, imgUrl: "https://placehold.co/600x600/ffffff/000000?text=Swimming" },
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <section className="relative h-[85vh] flex flex-col justify-center items-center text-center px-6">
        <div className="absolute inset-0 bg-rs-gray-light -z-10" />
        <span className="text-[10px] font-bold tracking-[0.4em] uppercase mb-4 text-gray-400">Limited Edition Vinyl</span>
        <h1 className="text-7xl md:text-9xl font-bold mb-8 uppercase tracking-tighter font-display leading-[0.85]">
          Classic<br />Records
        </h1>
        <Link 
          to="/vinyl" 
          className="border border-black px-12 py-4 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-black hover:text-white transition-all duration-500"
        >
          Khám phá bộ sưu tập
        </Link>
      </section>

      <div className="border-t border-rs-border">
        <FeaturedProducts products={mockProducts} title="Bản phát hành mới" />
      </div>
    </div>
  );
};

export default Home;