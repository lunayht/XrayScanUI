import { save } from './utils/httpUtil';
import { API_URL } from './config/config';

export function data(data) {
    return save(API_URL, data);
}