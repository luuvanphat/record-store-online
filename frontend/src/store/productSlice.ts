import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { VINYL_DATA, CD_DATA, MERCH_DATA } from '../data/products';

interface ProductStock {
  [key: number]: number;
}

interface ProductState {
  stock: ProductStock;
}

// Initialize stock from products
const initialStock: ProductStock = {};
[...VINYL_DATA, ...CD_DATA, ...MERCH_DATA].forEach(product => {
  initialStock[product.id] = product.stock;
});

const initialState: ProductState = {
  stock: initialStock,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    decreaseStock: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      if (state.stock[action.payload.id] !== undefined) {
        state.stock[action.payload.id] = Math.max(
          0,
          state.stock[action.payload.id] - action.payload.quantity
        );
      }
    },
    increaseStock: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      if (state.stock[action.payload.id] !== undefined) {
        state.stock[action.payload.id] += action.payload.quantity;
      }
    },
  },
});

export const { decreaseStock, increaseStock } = productSlice.actions;
export default productSlice.reducer;
