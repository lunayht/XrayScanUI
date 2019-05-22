import {
    MACHINESTOP,
    MACHINERESUME,
    LOADDATA,
    SAVEDATA,
    RESET
} from '../constants/actionType';

let saveDataArr = [];
var initialState = {
    machinestatus: 'normal',
    displaydata: [],
    open: false,
    save: false,
    savedata: saveDataArr
}

export default function (state, action) {
    state = state || initialState;

    switch (action.type) {
        case RESET: 
            return Object.assign({}, state, {
                machinestatus: 'normal',
                open: false,
                save: false,
                displaydata: [],
                savedata: saveDataArr
            });

        case MACHINESTOP: 
            return Object.assign({}, state, {
                machinestatus: 'stop',
                displaydata: action.result,
                open: true,
                save: false,
                savedata: saveDataArr
            });
        
        case LOADDATA:
            return Object.assign({}, {
                machinestatus: 'loading',
                displaydata: action.result,
                open: true,
                save: false,
                savedata: saveDataArr
            });

        case MACHINERESUME:
            return Object.assign({}, {
                machinestatus: 'close',
                displaydata: action.result,
                open: false,
                save: false,
                savedata: saveDataArr
            });

        case SAVEDATA: 
            if (saveDataArr.length === 0) {
                saveDataArr = action.data
            } else {
                for (var i = 0; i < action.data.length; i++) {
                    let ele = action.data[i]
                    saveDataArr.push(ele);
                }
            }
            return Object.assign({}, {
                machinestatus: 'saved',
                open: true,
                save: true,
                savedata: saveDataArr
            })

        default: 
            return state;
    }
}