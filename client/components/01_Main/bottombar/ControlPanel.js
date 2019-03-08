import React from 'react';
import Forward from '../../../../public/forward.png';
import Reverse from '../../../../public/reverse.png';
import Stop from '../../../../public/stop.png';

class ControlPanel extends React.Component {
    render() {
        const controlkey = {
            display: 'flex',
            flexDirection: 'row',
        };

        const imgbtn = {
            height: 79,
            width: 79
        };

        const btn = {
            height: 95,
            width: 89
        };

        return(
            <div style={controlkey}>
                <button>
                    <img src={Reverse} style={imgbtn} />
                </button>
                <button>
                    <img src={Stop} style={imgbtn} />
                </button>
                <button>
                    <img src={Forward} style={imgbtn} />
                </button>
                <button style={btn}>CC</button>
                <button style={btn}>HP</button>
                <button style={btn}>BW</button>
            </div>
        )
    }
};

export default ControlPanel;