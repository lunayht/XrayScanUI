import { send, save, query } from '../utils/httpUtil';

export function cmd(data) {
    return send(data);
}

export function log(data) {
    return save(data);
}

export function queryid(data) {
    return query(data);
}