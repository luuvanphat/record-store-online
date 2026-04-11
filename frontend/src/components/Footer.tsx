import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-rs-black text-white pt-16 pb-8 px-6 border-t border-rs-border mt-auto">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold tracking-widest uppercase font-display mb-6">
            Record Store
          </h3>
          <p className="text-gray-400 text-sm font-sans max-w-sm leading-relaxed">
            Nơi cung cấp các bản phát hành đĩa than mới nhất, các ấn bản giới hạn và các mặt hàng độc quyền dành cho những người đam mê âm nhạc.
          </p>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-wider font-display mb-6 text-sm">Cửa hàng</h4>
          <ul className="space-y-4 text-sm text-gray-400 font-sans">
            <li><Link to="/vinyl" className="hover:text-white transition-colors">Vinyl</Link></li>
            <li><Link to="/cd" className="hover:text-white transition-colors">CDs</Link></li>
            <li><Link to="/merch" className="hover:text-white transition-colors">Merch</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-wider font-display mb-6 text-sm">Hỗ trợ</h4>
          <ul className="space-y-4 text-sm text-gray-400 font-sans">
            <li><Link to="/contact" className="hover:text-white transition-colors">Liên hệ</Link></li>
            <li><Link to="/shipping-returns" className="hover:text-white transition-colors">Vận chuyển & Đổi trả</Link></li>
            <li><Link to="/faq" className="hover:text-white transition-colors">Câu hỏi thường gặp</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto pt-8 border-t border-gray-800 text-center md:text-left text-xs text-gray-500 font-sans uppercase tracking-widest flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2026 Record Store. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Điều khoản</a>
          <a href="#" className="hover:text-white transition-colors">Bảo mật</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;