// store/predictionsReducer.js
// purpose: it defines the slice that manages the state of the cube. it contains an initial state, which is a 6x9 two-dimensional array of 6x9 arrays, each of which represents one of the cube's faces. the setCubeFace action allows updating the state of a given face of the cube.

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
