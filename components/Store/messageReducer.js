import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    message: '',
};

const messageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        setMessage: (state, action) => {
            state.message = action.payload;
        }
    }
});

export const { setMessage } = messageSlice.actions;
export const messageReducer = messageSlice.reducer;
