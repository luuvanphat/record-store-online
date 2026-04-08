import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

const Checkout: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-20 w-full">
      <h1 className="text-3xl font-display uppercase font-bold text-rs-black mb-10 tracking-widest">Thanh toán</h1>
      
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-2/3">
          <form className="space-y-8">
            <section>
              <h2 className="text-lg font-bold uppercase font-display mb-6 border-b pb-2">Thông tin giao hàng</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Họ và tên" className="border p-3 w-full font-sans text-sm focus:outline-black" required />
                <input type="email" placeholder="Email" className="border p-3 w-full font-sans text-sm focus:outline-black" required />
                <input type="text" placeholder="Địa chỉ" className="border p-3 md:col-span-2 w-full font-sans text-sm focus:outline-black" required />
                <input type="text" placeholder="Thành phố" className="border p-3 w-full font-sans text-sm focus:outline-black" required />
                <input type="text" placeholder="Số điện thoại" className="border p-3 w-full font-sans text-sm focus:outline-black" required />
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold uppercase font-display mb-6 border-b pb-2">Phương thức thanh toán</h2>
              <div className="space-y-3">
                <label className="flex items-center gap-3 border p-4 cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="payment" className="accent-black" defaultChecked />
                  <span className="text-sm font-sans">Thẻ tín dụng / Ghi nợ</span>
                </label>
                <label className="flex items-center gap-3 border p-4 cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="payment" className="accent-black" />
                  <span className="text-sm font-sans">Chuyển khoản ngân hàng</span>
                </label>
              </div>
            </section>

            <button type="submit" className="w-full bg-rs-black text-white py-4 uppercase tracking-widest text-sm font-bold hover:bg-gray-800 transition-colors">
              Xác nhận đặt hàng
            </button>
          </form>
        </div>

        <div className="w-full lg:w-1/3 bg-rs-gray p-8 h-fit border border-rs-border">
          <h2 className="text-lg font-bold uppercase font-display mb-6">Tóm tắt đơn hàng</h2>
          <div className="space-y-4 mb-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between text-sm font-sans">
                <span className="text-gray-600">{item.title} x {item.quantity}</span>
                <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="border-t pt-4 flex justify-between font-bold text-lg font-sans">
            <span>Tổng cộng</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;