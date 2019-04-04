import { save } from './utils/httpUtil';
import { API_URL } from './config/config';

export function data(data) {
    console.log('This is from HTTP SERVICE');
    console.log(data);
    return save(API_URL, data);
}