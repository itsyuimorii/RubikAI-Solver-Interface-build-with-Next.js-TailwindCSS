import { configureStore } from '@reduxjs/toolkit';
import predictionsReducer from './predictionsReducer';
import cubeStateReducer from './cubeStateReducer';
import { messageReducer } from './messageReducer';

const store = configureStore({
    reducer: {
        predictions: predictionsReducer,
        cubeState: cubeStateReducer,
        message: messageReducer,
    },
});

export default store;
