import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import FeaturedProducts from '../components/FeaturedProducts';
import type { Product } from '../types';
import toast from 'react-hot-toast';

const ALL_PRODUCTS: Product[] = [
  { id: 1, title: "Abbey Road", artist: "The Beatles", price: 29.99, imgUrl: "https://placehold.co/800x800/f5f5f5/111?text=Abbey+Road", description: "The legendary final recording session from the Fab Four.", category: "vinyl" },
  { id: 2, title: "Dark Side of the Moon", artist: "Pink Floyd", price: 34.99, imgUrl: "https://placehold.co/800x800/f5f5f5/111?text=Dark+Side", category: "vinyl" },
  { id: 3, title: "Midnights", artist: "Taylor Swift", price: 38.50, imgUrl: "https://placehold.co/800x800/f5f5f5/111?text=Midnights", category: "vinyl" },
  { id: 4, title: "Swimming", artist: "Mac Miller", price: 35.00, imgUrl: "https://placehold.co/800x800/f5f5f5/111?text=Swimming", category: "vinyl" },
];

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);

  const currentProduct = useMemo(() => {
    return ALL_PRODUCTS.find(p => p.id === Number(id)) || ALL_PRODUCTS[0];
  }, [id]);

  const relatedProducts = useMemo(() => {
    return ALL_PRODUCTS.filter(p => p.id !== currentProduct.id).slice(0, 4);
  }, [currentProduct.id]);

  const handleAddToCart = () => {
    dispatch(addToCart(currentProduct));
    setIsAdded(true);
    
    toast.success('Đã thêm vào giỏ hàng', {
      style: {
        borderRadius: '0px',
        background: '#000',
        color: '#fff',
        fontSize: '10px',
        letterSpacing: '0.1em',
        textTransform: 'uppercase'
      }
    });

    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-20 w-full">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          <div className="w-full md:w-1/2 bg-rs-gray-light border border-rs-border overflow-hidden">
            <img 
              src={currentProduct.imgUrl} 
              alt={currentProduct.title} 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-start pt-4 md:pt-8">
            <nav className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-8 font-sans">
              <Link to="/" className="hover:text-black transition-colors">Home</Link> 
              <span className="mx-2">/</span> 
              <Link to={`/${currentProduct.category}`} className="hover:text-black transition-colors uppercase">{currentProduct.category}</Link>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide font-display text-rs-black mb-2 leading-[1.1]">
              {currentProduct.title}
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-400 font-sans mb-8 italic">
              {currentProduct.artist}
            </h2>
            
            <div className="text-2xl font-bold font-sans text-rs-black mb-10 pb-6 border-b border-rs-border">
              ${currentProduct.price.toFixed(2)}
            </div>

            <div className="mb-10">
              <p className="text-sm text-gray-600 font-sans leading-relaxed">
                {currentProduct.description}
              </p>
            </div>

            <button 
              onClick={handleAddToCart}
              disabled={isAdded}
              className={`w-full py-5 uppercase tracking-[0.3em] text-[11px] font-bold transition-all duration-500 ${
                isAdded 
                  ? 'bg-green-600 text-white cursor-default' 
                  : 'bg-black text-white hover:bg-zinc-800'
              }`}
            >
              {isAdded ? 'Đã thêm thành công' : 'Thêm vào giỏ hàng'}
            </button>

            <div className="mt-12 pt-8 border-t border-rs-border">
              <div className="grid grid-cols-2 gap-8 text-[10px] uppercase tracking-widest font-bold text-gray-400">
                <div>
                  <p className="mb-2 text-black">Vận chuyển</p>
                  <p className="font-medium leading-relaxed">Giao hàng miễn phí cho đơn hàng trên $100.</p>
                </div>
                <div>
                  <p className="mb-2 text-black">Đổi trả</p>
                  <p className="font-medium leading-relaxed">Hoàn trả trong vòng 30 ngày nếu còn nguyên seal.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-rs-border mt-10">
        <FeaturedProducts products={relatedProducts} title="Có thể bạn cũng thích" />
      </div>
    </div>
  );
};

export default ProductDetail;