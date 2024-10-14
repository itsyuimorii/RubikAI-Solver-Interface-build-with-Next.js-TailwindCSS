import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    message: '',
    errorMessage: '',
};

const messageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        setMessage: (state, action) => {
            state.message = action.payload;
        },
        setErrorMessage: (state, action) => {
            state.errorMessage = action.payload;
        }
    }
});

export const { setMessage, setErrorMessage } = messageSlice.actions;
export const messageReducer = messageSlice.reducer;
