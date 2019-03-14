import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import UserProfile from './UserProfile';
import Logo from '../../../../public/lta-singapore.jpg';

class SideBar extends React.Component {
    render() {
        const root = {
            display: 'flex',
            flexDirection: 'column'
        };

        const lta_logo = {
            width: '100%',
            height: 'auto'
        };

        return(
            <div style={root}>
                <img src={Logo} style={lta_logo} />
                <UserProfile />
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
        )
    }
};

export default SideBar;