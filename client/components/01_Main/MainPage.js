import React from 'react';
import Stream from './videostream/Stream';
import ControlPanel from './bottombar/ControlPanel';
import Sidebar from './sidebar/SideBar';

class MainPage extends React.Component {
    render() {
        const rootstyle = {
            display: 'flex',
            flexDirection: 'row',
        };

        const videostyle = {
            display: 'flex',
            flexDirection: 'column'
        };

        return(
            <div style={rootstyle}>
                <div style={videostyle}>
                    <Stream />
                    <ControlPanel />
                </div>
                <div>
                    <Sidebar />
                </div>
            </div>
        )
    }
};

export default MainPage;