import { configureStore } from '@reduxjs/toolkit';
import predictionsReducer from './predictionsReducer';
import cubeStateReducer from './cubeStateReducer';

const store = configureStore({
    reducer: {
        predictions: predictionsReducer,
        cubeState: cubeStateReducer,
    },
});

export default store;
