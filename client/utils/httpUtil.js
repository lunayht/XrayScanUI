import axios from 'axios';
import { getLocalStorage } from './storageUtil';

export function send(data) {
    return axios
        .post('/', data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer' + ' ' + getLocalStorage('token')
            }
        })
        .catch((err) => {
            console.log(err);
        });
}

export function save(data) {
    return axios
        .post('/log', data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
}