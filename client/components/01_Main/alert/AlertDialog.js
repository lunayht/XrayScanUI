import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../styles/styles';
import { Dialog, DialogActions, withStyles, Button, DialogContent, Typography } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/WarningRounded';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as crudAction from '../../../actions/crudAction';

const style = {
	root: styles.list_root,
	warningicon : styles.warningicon,
	alert: styles.alert,
	alerttitle: styles.alerttitle,
	alertcontent: styles.alertcontent,
	contentdiv: styles.contentdiv,
	alertdiv: styles.alertdiv,
	weapontitle: styles.weapontitle,
	action: styles.action,
	alertbtn: styles.alertbtn,
	imgstyle: styles.imgstyle
}

class AlertDialog extends React.Component {

	constructor() {
		super();
		this.state = {
			weapon: '',
			img: '',
			percentage: '',
			doneSave: ''
		};
		this.handleResume = this.handleResume.bind(this);
		this.handleLogThreat = this.handleLogThreat.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyPress);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyPress);
	}

	// componentDidUpdate(prevProps) {
	// 	if ((this.props.state.mach.machinestatus !== prevProps.state.mach.machinestatus)) {
    //         console.log('condition2')
    //         console.log(this.props.state.mach)
    //     }
	// }
	
	// componentWillUpdate() {
	// 	console.log(this.props.state.mach.data);
	// }
	
    handleResume() {
		this.setState({
			weapon: '',
			img: '',
			percentage: '',
			doneSave: ''
		});
		this.props.onClose();
		// this.props.actions.usb({data: 's'});
	}
	
	handleLogThreat() {
		console.log(this.props.state.mach);
		// this.props.actions.log(this.state).then(data => {
		// 	console.log(data)	
		// });
	}

	reverse() {
		this.props.actions.usb({data: 'q'});
	}

	stop() {
		this.props.actions.usb({data: 'r'});
	}

	forward() {
		this.props.actions.usb({data: 's'});
	}

	handleKeyPress(e) {
		if (e.keyCode === 81) {
			this.reverse();
		} else if (e.keyCode === 82) {
			this.stop();
		} else if (e.keyCode === 83) {
			this.forward();
		}
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
						<Typography variant="h6">
							Possible threat identified
						</Typography>
						{/* <img className={classes.imgstyle} src={`data:image/jpg;base64, ${this.state.img}`} alt="Threat" /> */}
						<div className={classes.contentdiv}>
							<div className={classes.alertdiv}>
								<Typography className={classes.weapontitle} variant="h6">
									{this.state.weapon}
								</Typography>
								{/* <Typography className={classes.weapontitle} variant="h6" >
									{`${this.state.percentage}%`}
								</Typography> */}
							</div>
						</div>
						<Typography variant="subtitle1">
							{this.state.doneSave}
						</Typography>
					</DialogContent>
                    <DialogActions className={classes.action}>
                        <Button className={classes.alertbtn} size="large" color="secondary" onClick={this.handleLogThreat}>LOG THREAT</Button>
                        <Button className={classes.alertbtn} size="large" color="primary" onClick={this.handleResume}>CLOSE</Button>
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

function mapStateToProps(state) {
    return { state }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, crudAction), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(AlertDialog));