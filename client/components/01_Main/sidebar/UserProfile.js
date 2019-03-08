import React from 'react';
import User from '../../../../public/user.png';

class UserProfile extends React.Component {
    render() {
        const root = {
            display: 'flex',
            flexDirection: 'row'
        }
        const user_profile = {
            height: 50,
            width: 50
        };

        return(
            <div style={root}>
                <img src={User} style={user_profile} />
                <h3>User</h3>
            </div>
        )
    }
};

export default UserProfile;