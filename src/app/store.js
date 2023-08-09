// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import apiDataReducer from '../api/data/apiDataSlice';

const store = configureStore({
  reducer: {
    apiData: apiDataReducer,
  },
});

export default store;
