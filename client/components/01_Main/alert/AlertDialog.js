import React from 'react';
import PropTypes from 'prop-types';
import Weapon from '../../../../public/ammunition.png';
import styles from '../../../styles/styles';
import { Dialog, DialogActions, withStyles, Button, DialogContent, Typography } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/WarningRounded';
import io from 'socket.io-client';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as crudAction from '../../../actions/crudAction';

const style = {
	root: styles.up_root,
	warningicon : styles.warningicon,
	alert: styles.alert,
	alerttitle: styles.alerttitle,
	alertcontent: styles.alertcontent,
	alertdiv: styles.alertdiv,
	weapontitle: styles.weapontitle,
	action: styles.action,
	alertbtn: styles.alertbtn,
	imgstyle: styles.imgstyle
}

let socket = io.connect("http://10.0.0.215:9000");

class AlertDialog extends React.Component {

	constructor() {
		super();
		this.state = {
			endpoint: "http://10.0.0.215:9000",
			weapon: '',
			img: '',
			percentage: '',
		};
		this.handleResume = this.handleResume.bind(this);
		this.handleLogThreat = this.handleLogThreat.bind(this);
	}

    handleResume() {
		socket.emit('delete');
		this.props.onClose();
		this.props.actions.usb({data: 's'});
	}
	
	handleLogThreat() {
		alert('Log Threat');
	}

    render() {
		const { classes, onClose, ... other } = this.props;
		
		socket.on('ready', (detectedObject) => {
			// console.log('alert get ready');
			socket.removeListener('ready');
			this.setState({ 
				weapon: detectedObject.weapon,
				img: detectedObject.img,
				percentage: detectedObject.percentage
			});
		});

        return(
            <div className={classes.root}>
                <Dialog onClose={this.handleResume} {... other}>
					<div className={classes.alert}>
						<WarningIcon className={classes.warningicon} color="error"/>
						<Typography className={classes.alerttitle} variant="h5" color="error">
							MACHINE HALTED
						</Typography>
					</div>
                    <DialogContent className={classes.alertcontent}>
						<img className={classes.imgstyle} src={`data:image/jpg;base64, ${this.state.img}`} alt="Red dot" />
						{/* <img src={Weapon} /> */}
						<Typography variant="h6">
							Possible threat identified! 
						</Typography>
						<div className={classes.alertdiv}>
							<Typography className={classes.weapontitle} variant="h6">
								{this.state.weapon}
							</Typography>
							<Typography className={classes.weapontitle} variant="h6" >
								{this.state.percentage}
							</Typography>
						</div>
					</DialogContent>
                    <DialogActions className={classes.action}>
                        <Button className={classes.alertbtn} size="large" color="secondary" onClick={this.handleLogThreat}>LOG THREAT</Button>
                        <Button className={classes.alertbtn} size="large" color="primary" onClick={this.handleResume}>RESUME MACHINE</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
};

AlertDialog.propTypes = {
	classes: PropTypes.object.isRequired,
	onClose: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, crudAction), dispatch)
});

export default connect(null, mapDispatchToProps)(withStyles(style)(AlertDialog));