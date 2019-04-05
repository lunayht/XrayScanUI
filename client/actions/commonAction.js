import { 
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS,
    FAILURE 
} from '../constants/actionType';

export function failure(error) {
    return {
        type: FAILURE,
        error: error
    }
};

export function loginSuccess(data) {
    return {
        type: LOGIN_SUCCESS,
        data
    };
};

export function loginFailure(error) {
    return {
        type: LOGIN_FAILURE,
        error
    };
};

export function logoutSuccess() {
    return {
        type: LOGOUT_SUCCESS
    };
};