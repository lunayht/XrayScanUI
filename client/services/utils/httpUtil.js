import axios from 'axios';

export function save(url, endpoint, data) {
    return axios
        .put(url + endpoint, data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
}
