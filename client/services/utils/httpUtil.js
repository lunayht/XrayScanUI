import axios from 'axios';

export function save(data) {
    return axios
        .post(data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
}
