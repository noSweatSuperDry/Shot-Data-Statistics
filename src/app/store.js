import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../api/data/dataSlice.js";

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

//Reducers are functions that take the current state and an action as arguments, and return a new state result.
