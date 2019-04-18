import * as httpService from '../services/httpService';
import * as commonAction from './commonAction';

export function usb(data) {
    // console.log(data);
    return function(dispatch) {
        return httpService.cmd(data)
        .catch((error) => {
            dispatch(commonAction.failure(error))
        });
    };
}

export function log(threats) {
    // console.log(threats);
    return function(dispatch) {
        return httpService.log(threats)
        .catch((error) => {
            dispatch(commonAction.failure(error))
        });
    };
}

export function displayquery(id) {
    return function(dispatch) {
        return httpService.queryid(id)
        .catch((error) => {
            dispatch(commonAction.failure(error))
        });
    };
}