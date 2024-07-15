//Purpose: this file is create for when user click the button, it will capture the prediction of the cube surface and store into the 2d collections of the cubeArray
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cubeStateArray: [[null, null, null, null, "bg-white", null, null, null, null],
    [null, null, null, null, "bg-orange-500", null, null, null, null],
    [null, null, null, null, "bg-green-500", null, null, null, null],
    [null, null, null, null, "bg-red-500", null, null, null, null],
    [null, null, null, null, "bg-blue-500", null, null, null, null],
    [null, null, null, null, "bg-yellow-500", null, null, null, null],],
};

const cubeStateSlice = createSlice({
    name: 'cubeState',
    initialState,
    reducers: {
        setCubeFace: (state, action) => {
            state.cubeStateArray[action.payload.index] = action.payload.tiles;
        },
    },
});

export const { setCubeFace } = cubeStateSlice.actions;
export default cubeStateSlice.reducer;
