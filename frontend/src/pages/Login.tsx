import React, { useState } from 'react';

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex-grow flex items-center justify-center px-6 py-20 bg-white">
      <div className="w-full max-w-[400px]">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold uppercase tracking-[0.2em] font-display mb-2">
            {isLogin ? 'Đăng nhập' : 'Tạo tài khoản'}
          </h1>
          <p className="text-[11px] text-gray-500 uppercase tracking-widest">
            {isLogin ? 'Vui lòng nhập thông tin của bạn' : 'Tham gia cộng đồng Record Store'}
          </p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <input 
              type="text" 
              placeholder="Họ và tên" 
              className="w-full border border-rs-border p-4 text-[12px] font-sans focus:outline-none focus:border-black transition-colors"
            />
          )}
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full border border-rs-border p-4 text-[12px] font-sans focus:outline-none focus:border-black transition-colors"
          />
          <input 
            type="password" 
            placeholder="Mật khẩu" 
            className="w-full border border-rs-border p-4 text-[12px] font-sans focus:outline-none focus:border-black transition-colors"
          />
          
          {isLogin && (
            <div className="text-right">
              <button className="text-[10px] uppercase tracking-widest font-bold text-gray-400 hover:text-black transition-colors">
                Quên mật khẩu?
              </button>
            </div>
          )}

          <button className="w-full bg-black text-white py-5 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-zinc-800 transition-colors mt-4">
            {isLogin ? 'Đăng nhập' : 'Tạo tài khoản'}
          </button>
        </form>

        <div className="mt-10 text-center border-t border-rs-border pt-8">
          <p className="text-[11px] text-gray-500 uppercase tracking-widest mb-4">
            {isLogin ? 'Bạn chưa có tài khoản?' : 'Bạn đã có tài khoản?'}
          </p>
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-[11px] font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-opacity"
          >
            {isLogin ? 'Đăng ký ngay' : 'Quay lại đăng nhập'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;