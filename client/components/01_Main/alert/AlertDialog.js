import React from 'react';
import PropTypes from 'prop-types';
import Weapon from '../../../../public/ammunition.png';
import styles from '../../../styles/styles';
import { Dialog, DialogActions, withStyles, Button, DialogContent, Typography } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/WarningRounded';

const style = {
	root: styles.up_root,
	warningicon : styles.warningicon,
	alert: styles.alert,
	alerttitle: styles.alerttitle,
	alertcontent: styles.alertcontent,
	alertdiv: styles.alertdiv,
	subtitle: styles.subtitle,
	weapontitle: styles.weapontitle,
	action: styles.action,
	alertbtn: styles.alertbtn
}

class AlertDialog extends React.Component {

    handleResume = () => {
        this.props.onClose();
	}
	
	handleLogThreat = () => {
		alert('Log Threat');
	}

    render() {
        const { classes, onClose, ... other } = this.props;

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
						<img src={Weapon} />
						<div className={classes.alertdiv}>
							<Typography className={classes.subtitle} variant="h6">
								Possible threat identified: 
							</Typography>
							<Typography className={classes.weapontitle} variant="h6" >
								Ammunition
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

export default (withStyles(style)(AlertDialog));