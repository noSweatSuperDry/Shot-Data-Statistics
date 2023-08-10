import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';   

//Action creator
export const fetchShots = createAsyncThunk('getShots', async () => {    
    const response = await fetch('https://westeurope.azure.data.mongodb-api.com/app/shotdatadatabase-rbzwm/endpoint/shotDataApi/shotsAPI');
    return response.json()}

    );
const dataSlice = createSlice({
    name: 'shots',
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchShots.pending, (state) => {
            state.isLoading = true;
                 });
        builder.addCase(fetchShots.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchShots.rejected, (state, action) => {
            console.log('Error', action.payload);
            state.isError = true;
        });
},
});
export default dataSlice.reducer;