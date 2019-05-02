import {
    MACHINESTOP,
    MACHINERESUME,
    LOADDATA
} from '../constants/actionType';

var initialState = {
    data: [],
    machinestatus: 'normal',
    open: false
}

export default function (state, action) {
    state = state || initialState;

    switch (action.type) {
        case MACHINESTOP: 
            return Object.assign({}, state, {
                machinestatus: 'stop',
                open: true
            });
        
        case LOADDATA:
            return Object.assign({}, {
                machinestatus: 'loading',
                data: action.data,
                open: true
            })

        case MACHINERESUME: 
            return Object.assign({}, {
                machinestatus: 'normal',
                data: [],
                open: false
            });

        default: 
            return state;
    }
}