import React from 'react';
import FeaturedProducts from '../components/FeaturedProducts';
import type { Product } from '../types';

const MERCH_DATA: Product[] = [
  { id: 101, title: "Classic Logo T-Shirt", artist: "Record Store Exclusive", price: 25.00, imgUrl: "https://placehold.co/600x600/ffffff/000000?text=T-Shirt", category: 'merch' },
  { id: 102, title: "Cotton Tote Bag", artist: "Eco-friendly", price: 15.00, imgUrl: "https://placehold.co/600x600/ffffff/000000?text=Tote+Bag", category: 'merch' },
  { id: 103, title: "Vinyl Cleaning Kit", artist: "Premium Care", price: 20.00, imgUrl: "https://placehold.co/600x600/ffffff/000000?text=Cleaning+Kit", category: 'merch' },
  { id: 104, title: "Slipmat Set", artist: "Turntable Essentials", price: 18.00, imgUrl: "https://placehold.co/600x600/ffffff/000000?text=Slipmat", category: 'merch' },
  { id: 105, title: "Logo Enamel Pin", artist: "Accessories", price: 8.00, imgUrl: "https://placehold.co/600x600/ffffff/000000?text=Pin", category: 'merch' },
  { id: 106, title: "Record Display Frame", artist: "Home Decor", price: 45.00, imgUrl: "https://placehold.co/600x600/ffffff/000000?text=Frame", category: 'merch' },
];

const Merch: React.FC = () => {
  return (
    <div className="flex-grow bg-white">
      <section className="pt-20 pb-10 px-6 text-center border-b border-rs-border">
        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 mb-4 block">Official Collection</span>
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-[0.1em] font-display">Merchandise</h1>
      </section>

      <div className="max-w-[1400px] mx-auto py-10">
        <div className="px-6 mb-4 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-400">
          <span>{MERCH_DATA.length} Sản phẩm</span>
          <div className="flex gap-4">
            <button className="hover:text-black transition-colors">Lọc</button>
            <button className="hover:text-black transition-colors">Sắp xếp</button>
          </div>
        </div>
        <FeaturedProducts products={MERCH_DATA} title="" />
      </div>

      <section className="bg-rs-gray-light py-20 px-6 mt-10">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-2xl font-bold uppercase tracking-widest font-display mb-6 text-rs-black">Chính sách vận chuyển</h2>
          <p className="text-sm text-gray-500 font-sans leading-relaxed">
            Tất cả các mặt hàng merchandise được vận chuyển toàn quốc. Đối với áo thun và túi tote, vui lòng kiểm tra bảng size kỹ trước khi đặt hàng. 
            Chúng tôi hỗ trợ đổi trả trong vòng 7 ngày nếu có lỗi từ nhà sản xuất.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Merch;