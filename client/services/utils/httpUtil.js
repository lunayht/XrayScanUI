import axios from 'axios';

export function save(url, data) {
    return axios
        .post(url, data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
}
