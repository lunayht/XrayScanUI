import React from 'react';
import { Zoom, Tooltip, Button, MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core';
import Forward from '@material-ui/icons/FastForwardRounded';
import Reverse from '@material-ui/icons/FastRewindRounded';
import classNames from 'classnames';
import Stop from '@material-ui/icons/PauseRounded';
import styles from '../../../styles/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as crudAction from '../../../actions/crudAction';

const style = {
    controlkey: styles.controlkey,
    iconSize: styles.control_iconSize,
    btn: styles.control_btn,
    text: styles.control_text,
    blue: styles.bluebackground,
    green: styles.greenbackground,
    red: styles.redbackground,
};

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
        this.props.actions.usb({data: 'q'});
    };

    stop() {
        this.props.actions.usb({data: 'r'});
    };

    forward() {
        this.props.actions.usb({data: 's'});
    };

    BW() {
        this.props.actions.usb({data: 'n'});
    };

    CC() {
        this.props.actions.usb({data: 'k'});
    };

    HP() {
        this.props.actions.usb({data: 'p'});
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

        const { classes } = this.props;

        const theme = createMuiTheme({
            palette: {
                primary: {main: '#91eb5c'},
                secondary: {main: '#eb5c5c'},
                
            },
            typography: {
                useNextVariants: true
            }
        });

        return(
            <div className={classes.controlkey}>
                <Tooltip TransitionComponent={Zoom} title="Reverse">
                    <Button className={classes.btn} variant="outlined" onClick={this.reverse}>
                        <Reverse className={classes.iconSize}/>
                    </Button>
                </Tooltip>
                <Tooltip TransitionComponent={Zoom} title="Stop">
                    <Button className={classes.btn} variant="outlined" onClick={this.stop}>
                        <Stop className={classes.iconSize} />
                    </Button>
                </Tooltip>
                <Tooltip TransitionComponent={Zoom} title="Forward">
                    <Button className={classes.btn} variant="outlined" onClick={this.forward}>
                        <Forward className={classes.iconSize} />
                    </Button>
                </Tooltip>
                <Tooltip TransitionComponent={Zoom} title="Crystal Clear">
                    <Button className={classNames(classes.btn, classes.green)}  variant="contained"  onClick={this.CC}>
                        <h1 className={classes.text}>CC</h1>
                    </Button>
                </Tooltip>
                <Tooltip TransitionComponent={Zoom} title="High Penetration">
                    <Button className={classNames(classes.btn, classes.red)}  variant="contained"  onClick={this.HP}>
                        <h1 className={classes.text}>HP</h1>
                    </Button>
                </Tooltip>
                <Tooltip TransitionComponent={Zoom} title="Black and White">
                    <Button className={classNames(classes.btn, classes.blue)} variant="contained"  onClick={this.BW} >
                        <h1 className={classes.text}>BW</h1>
                    </Button>
                </Tooltip>

                </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, crudAction), dispatch)
});

export default connect(null, mapDispatchToProps)(withStyles(style)(ControlPanel));