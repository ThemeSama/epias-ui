import { createSlice } from '@reduxjs/toolkit';

export const sizesSlice = createSlice({
  name: 'sizes',
  initialState: {
    'h': [60, 40],
    'vt': [60, 40],
    'vb': [60, 40]
  },
  reducers: {
    setSize: (state, action) => {
      const {split, sizes} = action.payload;
      state[split] = sizes;
    }
  }
});

export const { setSize } = sizesSlice.actions;

export const selectCount = (state) => state.sizes;

export default sizesSlice.reducer;
