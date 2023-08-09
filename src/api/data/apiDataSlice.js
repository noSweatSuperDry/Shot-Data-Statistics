import { createSlice }  from "@reduxjs/toolkit";
import shotData from "./shots.json";


const initialState = shotData;

const dataSlice = createSlice({ 
    name: "data",
    initialState,
    reducers: {}
});

export default dataSlice.reducer;