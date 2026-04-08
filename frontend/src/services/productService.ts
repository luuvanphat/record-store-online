import api from './api';
import type { Product } from '../types';

export const productService = {
  // Lấy danh sách sản phẩm (có thể lọc theo category)
  getAllProducts: (category?: string): Promise<Product[]> => {
    return api.get('/products', { params: { category } });
  },

  // Lấy chi tiết 1 sản phẩm theo ID
  getProductById: (id: string): Promise<Product> => {
    return api.get(`/products/${id}`);
  },

  // Tìm kiếm sản phẩm
  searchProducts: (query: string): Promise<Product[]> => {
    return api.get('/products/search', { params: { q: query } });
  }
};