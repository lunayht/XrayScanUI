import * as httpService from '../services/httpService';
import * as commonAction from './commonAction';

export function usb(data) {
    console.log(data)
    return function(dispatch) {
        return httpService.data(data)
        .catch((error) => {
            dispatch(commonAction.failure(error))
        });
    };
}
