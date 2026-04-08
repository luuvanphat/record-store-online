import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail'; 
import Cart from './pages/Cart';
import Vinyl from './pages/Vinyl';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import { Toaster } from 'react-hot-toast';
import Merch from './pages/Merch';
import CD from './pages/CD';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="vinyl" element={<Vinyl />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="account" element={<Login />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="merch" element={<Merch />} />
          <Route path="cd" element={<CD />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;