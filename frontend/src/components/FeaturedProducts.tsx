import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { decreaseStock } from '../store/productSlice';
import { Plus } from 'lucide-react';
import type { Product } from '../types';
import type { RootState } from '../store';
import toast from 'react-hot-toast';

interface FeaturedProductsProps {
  products: Product[];
  title: string;
}


const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products, title }) => {
  const dispatch = useDispatch();
  const productStocks = useSelector((state: RootState) => state.products.stock);
  
  const handleAddToCart = (product: Product) => {
    const currentStock = productStocks[product.id] ?? product.stock;
    
    if (currentStock <= 0) {
      toast.error(`${product.title} đã hết hàng`, {
        style: {
          borderRadius: '0px',
          background: '#dc2626',
          color: '#fff',
          fontSize: '10px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase'
        }
      });
      return;
    }

    dispatch(addToCart(product));
    dispatch(decreaseStock({ id: product.id, quantity: 1 }));
    toast.success(`Đã thêm ${product.title} vào giỏ hàng`, {
      style: {
        borderRadius: '0px',
        background: '#000',
        color: '#fff',
        fontSize: '10px',
        letterSpacing: '0.1em',
        textTransform: 'uppercase'
      },
      iconTheme: {
        primary: '#fff',
        secondary: '#000',
      },
    });
  };

  return (
    <section className="px-6 py-20 max-w-[1400px] mx-auto">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-xl font-bold uppercase tracking-[0.2em] font-display">{title}</h2>
        <Link to="/vinyl" className="text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-opacity">
          Xem tất cả
        </Link>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
        {products.map((product) => {
          const currentStock = productStocks[product.id] ?? product.stock;
          return (
            <div key={product.id} className="group flex flex-col">
              <div className="aspect-square bg-rs-gray-light mb-6 overflow-hidden relative">
                <Link to={`/product/${product.id}`}>
                  <img 
                    src={product.imgUrl} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                </Link>
                
                {currentStock <= 0 && (
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                    <span className="text-white text-sm font-bold uppercase tracking-widest">Hết hàng</span>
                  </div>
                )}
                
                <button 
                  onClick={() => (handleAddToCart(product))}
                  disabled={currentStock <= 0}
                  className={`absolute bottom-0 left-0 right-0 py-4 text-[10px] font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2 transition-all duration-300 ease-in-out ${
                    currentStock <= 0
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed translate-y-0'
                      : 'bg-black text-white translate-y-full group-hover:translate-y-0 hover:bg-zinc-800'
                  }`}
                >
                  <Plus size={14} /> {currentStock <= 0 ? 'Hết hàng' : 'Quick Add'}
                </button>
              </div>
              
              <div className="space-y-1">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-[11px] font-bold uppercase tracking-wider leading-tight line-clamp-1 hover:opacity-60 transition-opacity">{product.title}</h3>
                </Link>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">{product.artist}</p>
                <p className="text-[11px] font-medium pt-2">${product.price.toFixed(2)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedProducts;