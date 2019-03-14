import React from 'react';
import Button from '@material-ui/core/Button';
import User from '../../../../public/user.png';
import history from '../../../services/utils/history';
import styles from '../../../styles/styles';
import { Dialog, DialogTitle, DialogActions, withStyles } from '@material-ui/core';

const style = {
    root: styles.up_root,
    user_profile: styles.up_img,
    text: styles.up_text,
    btn: styles.up_btn
}

class UserProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleOpen() {
        this.setState({ open: true });
    }

    handleClose() {
        this.setState({ open: false });
    }

    handleLogOut() {
        history.push('/');
    }

    render() {
        const { classes } = this.props;

        return(
            <div className={classes.root}>
                <Button className={classes.btn} fullWidth onClick={this.handleOpen}>
                    <img src={User} className={classes.user_profile} />
                    <p className={classes.text}>User</p>
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>Do you want to log out?</DialogTitle>
                    <DialogActions>
                        <Button color="primary" onClick={this.handleLogOut}>YES</Button>
                        <Button color="secondary" onClick={this.handleClose}>CANCEL</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
};

export default withStyles(style)(UserProfile);