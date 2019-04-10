import React from 'react';
import PropTypes from 'prop-types';
import Weapon from '../../../../public/ammunition.png';
import styles from '../../../styles/styles';
import { Dialog, DialogActions, withStyles, Button, DialogContent, Typography } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/WarningRounded';
import socketIOClient from 'socket.io-client';
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
	alertbtn: styles.alertbtn
}

class AlertDialog extends React.Component {

	constructor() {
		super();
		this.state = {
			endpoint: "http://localhost:3000",
			weapon: '',
			img: '',
			percentage: ''
		};
	}

    handleResume = () => {
		this.props.onClose();
		this.props.actions.usb({data: 's'});
	}
	
	handleLogThreat = () => {
		alert('Log Threat');
	}

    render() {
		const { classes, onClose, ... other } = this.props;
		
		const socket = socketIOClient(this.state.endpoint);
		socket.on('data', (data) => {
			console.log(data)
			this.setState({ 
				weapon: data.weapon,
				img: data.img,
				percentage: data.percentage
			})
		})

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
						{/* <img src={`data:image/jpeg;base64,${binaryData}`} /> */}
						<img src={Weapon} />
						<Typography variant="h6">
							Possible threat identified! 
						</Typography>
						<div className={classes.alertdiv}>
							<Typography className={classes.weapontitle} variant="h6">
								{this.state.weapon}
							</Typography>
							<div />
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