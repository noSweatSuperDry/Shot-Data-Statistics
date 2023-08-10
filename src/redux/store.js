// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slice/dataSlice';

const store = configureStore({
  reducer: {
    shots: dataReducer,
  },
});

export default store;
