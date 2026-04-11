import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface OrderItem {
  id: number;
  title: string;
  artist: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  date: string;
  status: 'Đang xử lý' | 'Đã gửi' | 'Đã giao' | 'Đã hủy';
  total: number;
  items: OrderItem[];
}

export interface UserProfile {
  name: string;
  email: string;
  address: string;
  phone: string;
}

interface UserState {
  isLoggedIn: boolean;
  profile: UserProfile | null;
  orders: Order[];
}

const initialState: UserState = {
  isLoggedIn: false,
  profile: null,
  orders: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ name: string; email: string; address?: string }>) => {
      state.isLoggedIn = true;
      state.profile = {
        name: action.payload.name,
        email: action.payload.email,
        address: action.payload.address || 'Hà Nội, Việt Nam',
        phone: '0123 456 789',
      };
      state.orders = [
        {
          id: 'DS-1001',
          date: '10/04/2026',
          status: 'Đã giao',
          total: 96.48,
          items: [
            { id: 1, title: 'Abbey Road', artist: 'The Beatles', quantity: 1, price: 29.99 },
            { id: 4, title: 'Swimming', artist: 'Mac Miller', quantity: 2, price: 35.00 },
          ],
        },
        {
          id: 'DS-1002',
          date: '21/03/2026',
          status: 'Đã gửi',
          total: 14.50,
          items: [
            { id: 202, title: 'Future Nostalgia', artist: 'Dua Lipa', quantity: 1, price: 14.50 },
          ],
        },
      ];
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.profile = null;
      state.orders = [];
    },
    updateProfile: (state, action: PayloadAction<Partial<UserProfile>>) => {
      if (state.profile) {
        state.profile = { ...state.profile, ...action.payload };
      }
    },
  },
});

export const { login, logout, updateProfile } = userSlice.actions;
export default userSlice.reducer;
