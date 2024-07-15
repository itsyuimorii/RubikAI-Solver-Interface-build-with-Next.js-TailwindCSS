//Purpose: this file is create for when user click the button, it will capture the prediction of the cube surface and store into the 2d collections of the cubeArray
import { createSlice } from '@reduxjs/toolkit';

const WHITE_INDEX = 0;
const ORANGE_INDEX = 1;
const GREEN_INDEX = 2;
const RED_INDEX = 3;
const BLUE_INDEX = 4;
const YELLOW_INDEX = 5;

const TILES_TO_INDEX = {
    "white_tile": WHITE_INDEX,
    "orange_tile": ORANGE_INDEX,
    "green_tile": GREEN_INDEX,
    "red_tile": RED_INDEX,
    "blue_tile": BLUE_INDEX,
    "yellow_tile": YELLOW_INDEX,
};

const CENTER_TILE_INDEX = 4

const initialState = {
    cubeStateArray: [
    [null, null, null, null, "white_tile", null, null, null, null],
    [null, null, null, null, "orange_tile", null, null, null, null],
    [null, null, null, null, "green_tile", null, null, null, null],
    [null, null, null, null, "red_tile", null, null, null, null],
    [null, null, null, null, "blue_tile", null, null, null, null],
    [null, null, null, null, "yellow_tile", null, null, null, null],],
};

const cubeStateSlice = createSlice({
    name: 'cubeState',
    initialState,
    reducers: {
        setCubeFace: (state, action) => {
            const colorMiddleTile = action.payload[CENTER_TILE_INDEX];
            const foundIndex = TILES_TO_INDEX[colorMiddleTile]
            state.cubeStateArray[foundIndex] = action.payload;
        },
    },
});

export const { setCubeFace } = cubeStateSlice.actions;
export default cubeStateSlice.reducer;
