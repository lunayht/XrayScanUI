import React from 'react';
import UserProfile from './UserProfile';
import Logo from '../../../../public/lta-singapore.jpg';

class SideBar extends React.Component {
    render() {
        const root = {
            display: 'flex',
            flexDirection: 'column'
        };

        const lta_logo = {
            height: 150,
            width: 350
        };

        return(
            <div style={root}>
                <img src={Logo} style={lta_logo} />
                <UserProfile />
                <p>
                    Number of Bags: 
                </p>
                <br />
                <p>
                    Current Threats: 
                </p>
            </div>
        )
    }
};

export default SideBar;