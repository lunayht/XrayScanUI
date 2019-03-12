import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import User from '../../../../public/user.png';
import history from '../../../services/utils/history';
import { Dialog, DialogTitle, DialogActions } from '@material-ui/core';

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
        const root = {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        }
        const user_profile = {
            height: 50,
            width: 50,
            margin: 10
        };

        return(
            <div style={root}>
                <Button size="large" fullWidth onClick={this.handleOpen}>
                    <img src={User} style={user_profile} />
                    <Typography variant="h5">User</Typography>
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

export default UserProfile;