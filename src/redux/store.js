import { configureStore } from '@reduxjs/toolkit';
import sizesReducer from './actions';
import { loadState } from './browser-storage';

export default configureStore({
  reducer: {
    sizes: sizesReducer
  },
  preloadedState: loadState()
});