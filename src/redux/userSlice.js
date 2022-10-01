import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        status: {
            success: false,
            error: false,
            message: null,
        },
        loginStatus: {
            success: false,
            error: false,
            message: null,
        },
        registerStatus: {
            success: false,
            error: false,
            message: null,
        },
    },
    reducers: {
        statusUserError: (state, action) => {
            state.status.error = true;
            state.status.message = action.payload;
        },
        loginUserError: (state, action) => {
            state.loginStatus.error = true;
            state.loginStatus.message = action.payload;
        },
        loginUserSuccess: (state, action) => {
            state.status.error = false;
            state.status.message = '';
            state.user = action.payload;
        },
        defaultLoginStatus: (state) => {
            state.loginStatus.error = false;
            state.loginStatus.success = false;
            state.loginStatus.message = '';
        },
        registerUserSuccess: (state) => {
            state.registerStatus.error = false;
            state.registerStatus.success = true;
        },
        registerUserError: (state, action) => {
            state.registerStatus.error = true;
            state.registerStatus.message = action.payload;
            state.registerStatus.success = false;
        },
        defaultRegisterStatus: (state) => {
            state.registerStatus.error = false;
            state.registerStatus.message = '';
            state.registerStatus.success = false;
        },
    },
});

export const {
    statusUserError,
    loginUserSuccess,
    registerUserSuccess,
    registerUserError,
    loginUserError,
    defaultRegisterStatus,
    defaultLoginStatus,
} = authSlice.actions;

export default authSlice.reducer;
