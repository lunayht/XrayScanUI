import { send, save } from '../utils/httpUtil';

export function cmd(data) {
    return send(data);
}

export function log(data) {
    return save(data);
}