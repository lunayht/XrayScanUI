import { save } from './utils/httpUtil';
import { API_URL } from './config/config';

export function data(entityName, data) {
    return save(API_URL, entityName.toLowerCase(), data);
}