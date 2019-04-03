import * as httpService from '../services/httpService';
import * as commonAction from './commonAction';

export function usb(entity, data) {
    return function(dispatch) {
        return httpService.data(entity, data)
        .catch((error) => {
            dispatch(commonAction.failure(error))
        });
    };
}
