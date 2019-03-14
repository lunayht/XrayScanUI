import React from 'react';
import Stream from './videostream/Stream';
import ControlPanel from './bottombar/ControlPanel';
import Sidebar from './sidebar/SideBar';

class MainPage extends React.Component {
    render() {

        const stream = {
            width: '75%',
            float: 'left',
        };

        const sidebar = {
            width: '25%',
            float: 'left'
        };

        const controlpanel = {
            width: '75%',
            float: 'left',
        };

        return(
            <div>
                <div style={stream}>
                    <Stream />
                </div>
                <div style={sidebar}>
                    <Sidebar />
                </div>
                <div style={controlpanel}>
                    <ControlPanel />
                </div>
            </div>
        )
    }
};

export default MainPage;