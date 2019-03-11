import React from 'react';
import Forward from '../../../../public/forward.png';
import Reverse from '../../../../public/reverse.png';
import Stop from '../../../../public/stop.png';

class ControlPanel extends React.Component {

    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.reverse = this.reverse.bind(this);
        this.stop = this.stop.bind(this);
        this.forward = this.forward.bind(this);
        this.BW = this.BW.bind(this);
        this.CC = this.CC.bind(this);
        this.HP = this.HP.bind(this);
    };
    
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    };

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    };

    reverse() {
        alert('REVERSE')
    };

    stop() {
        alert('STOP')
    };

    forward() {
        alert('FORWARD')
    };

    BW() {
        alert('BW')
    };

    CC() {
        alert('CC')
    };

    HP() {
        alert('HP')
    };

    handleKeyPress(e) {
        if (e.keyCode === 81) {
            // Q for reverse
            this.reverse();
        } else if (e.keyCode === 82) {
            // R for stop
            this.stop();
        } else if (e.keyCode === 83) {
            // S for forward
            this.forward();
        } else if (e.keyCode === 78) {
            // N for BW
            this.BW();
        } else if (e.keyCode === 75) {
            // K for CC
            this.CC();
        } else if (e.keyCode === 80) {
            // P for HP 
            this.HP();
        }
    }

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
                <button onClick={this.reverse}>
                    <img src={Reverse} style={imgbtn} />
                </button>
                <button onClick={this.stop}>
                    <img src={Stop} style={imgbtn} />
                </button>
                <button onClick={this.forward}>
                    <img src={Forward} style={imgbtn} />
                </button>
                <button onClick={this.CC} style={btn}>CC</button>
                <button onClick={this.HP} style={btn}>HP</button>
                <button onClick={this.BW} style={btn}>BW</button>
            </div>
        )
    }
};

export default ControlPanel;