import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    infoMessage: '',
    errorMessage: '',
    successMessage: '',
};

const messageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        setMessage: (state, action) => {
            state.infoMessage = action.payload;
        },
        setErrorMessage: (state, action) => {
            state.errorMessage = action.payload;
        },
        setSuccessMessage: (state, action) => {
            state.successMessage = action.payload;
        },
    },
});

export const { setMessage, setErrorMessage, setSuccessMessage } = messageSlice.actions;
export const messageReducer = messageSlice.reducer;
