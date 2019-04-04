import axios from 'axios';

export function save(url, data) {
    console.log('THIS IS FROM HTTP UTIL');
    console.log(data);
    console.log(url);
    return axios
        .post('/', data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
}
