import { configureStore } from '@reduxjs/toolkit';
import predictionsReducer from './predictionsReducer'; // Ensure this path is correct

const store = configureStore({
    reducer: {
        predictions: predictionsReducer,
    },
});

export default store;
