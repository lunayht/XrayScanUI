import axios from 'axios';
import { getLocalStorage } from './storageUtil';

export function save(data) {
    return axios
        .post('/', data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer' + ' ' + getLocalStorage('token')
            }
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
}
