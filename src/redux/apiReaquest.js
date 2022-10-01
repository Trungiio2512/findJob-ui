import axios from 'axios';
import { loginUserSuccess, loginUserError, registerUserError, registerUserSuccess } from './userSlice';
import router from '~/config/configRouter';
const BACKEND_URL = 'http://localhost:8888/api';
export const loginUser = async (user, dispatch, navigate) => {
    try {
        const res = await axios.post(BACKEND_URL + '/login', user);
        dispatch(loginUserSuccess(res.data));
        navigate(router.home);
    } catch (err) {
        dispatch(loginUserError(err.response.data));
    }
};

export const registerUser = async (user, dispatch, navigate) => {
    try {
        await axios.post(BACKEND_URL + '/register', user);
        dispatch(registerUserSuccess());
        navigate(router.login);
    } catch (err) {
        dispatch(registerUserError(err.response.data));
    }
};
