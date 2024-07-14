// store/predictionsReducer.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    predictionsArray: [],
};

const predictionsSlice = createSlice({
    name: 'predictions',
    initialState,
    reducers: {
        updatePredictions: (state, action) => {
            state.predictionsArray = action.payload;
        },
    },
});

export const { updatePredictions } = predictionsSlice.actions;
export default predictionsSlice.reducer;
