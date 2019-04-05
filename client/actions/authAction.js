import axios from 'axios';

import { loginSuccess, loginFailure, logoutSuccess } from './commonAction';
import { API_URL } from '../services/config/config';
import { setLocalStorage, clearLocalStorage } from '../utils/storageUtil';
import history from '../utils/history';

export function login({userid, password}) {
    return function(dispatch) {
        axios.post(API_URL + 'auth/login', {userid, password})
        .then((response) => {
            dispatch(loginSuccess(response.data.token));
            setLocalStorage('token', response.data.token);
            history.push('/main');
        })
        .catch((error) => {
            dispatch(loginFailure(error.response.data));
        });
    };
}

export function logout() {
    return function(dispatch) {
        clearLocalStorage('token');
        dispatch(logoutSuccess());
        history.push('/');
        return false;
    };
}