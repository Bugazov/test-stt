import { createSlice } from '@reduxjs/toolkit';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';
var initialState = {
    username: '',
    password: '',
    isLoading: false,
    error: undefined,
};
export var loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        setUsername: function (state, action) {
            state.username = action.payload;
        },
        setPassword: function (state, action) {
            state.password = action.payload;
        },
    },
    extraReducers: function (builder) {
        builder
            .addCase(loginByUsername.fulfilled, function (state, action) {
            state.isLoading = false;
        })
            .addCase(loginByUsername.pending, function (state, action) {
            state.isLoading = true;
            state.error = undefined;
        })
            .addCase(loginByUsername.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});
// Action creators are generated for each case reducer function
export var loginActions = loginSlice.actions;
export var loginReducer = loginSlice.reducer;
