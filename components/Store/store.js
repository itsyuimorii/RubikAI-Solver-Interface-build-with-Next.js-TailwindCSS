import { configureStore } from '@reduxjs/toolkit';
import predictionsReducer from '@components/Store/predictionsSlice';

const store = configureStore({
    reducer: {
        predictions: predictionsReducer,
    },
});

export default store;