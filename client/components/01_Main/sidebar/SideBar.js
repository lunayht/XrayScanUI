import React from 'react';
import { Typography, withStyles } from '@material-ui/core';
import UserProfile from './UserProfile';
import Logo from '../../../../public/lta-singapore.jpg';
import styles from '../../../styles/styles';

const style = {
    root: styles.sidebar_root,
    lta_logo: styles.lta_logo,
    status: styles.status,
}

class SideBar extends React.Component {
    render() {

        const { classes } = this.props;

        return(
            <div className={classes.root}>
                <img src={Logo} className={classes.lta_logo} />
                <UserProfile />
                <div className={classes.status}>
                    <Typography variant="h6">
                        <div>Number of Bags: </div>
                        <div>None</div>
                    </Typography>
                    <br />
                    <Typography variant="h6">
                        <div>Current Threats: </div>
                        <div>None</div>
                    </Typography>
                </div>
            </div>
        )
    }
};

export default (withStyles(style)(SideBar));