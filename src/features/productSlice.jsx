import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    productCategories: null,
    allProducts: null,
  },
  reducers: {
    addProduct: (state, action) => {
      state.allProducts = action.payload;
    },
    addCategories: (state, action) => {
      state.productCategories = action.payload;
    },
  },
});

export const { addProduct, addCategories } = productSlice.actions;

export default productSlice.reducer;
