import { 
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS,
    FAILURE,
    MACHINERESUME,
    MACHINESTOP,
    LOADDATA
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

export function machineHalted() {
    return {
        type: MACHINESTOP,
    };
};

export function loadData(data) {
    return {
        type: LOADDATA,
        data
    }
}

export function machineResume() {
    return {
        type: MACHINERESUME,
    }
}

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