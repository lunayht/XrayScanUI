import React from 'react';
import Stream from './videostream/Stream';
import ControlPanel from './bottombar/ControlPanel';
import Sidebar from './sidebar/SideBar';
import AlertDialog from './alert/AlertDialog';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as crudAction from '../../actions/crudAction';
import io from 'socket.io-client';

let socket = io.connect("http://10.0.0.215:9000");

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleClose = this.handleClose.bind(this);
    };

    handleClose() {
        this.setState({ open: false });
    };

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

        socket.on('open', () => {
            // console.log('main page get ready');
            socket.removeListener('open');
			this.props.actions.usb({data: 'r'});
			this.setState({ 
				open: true
            });
        })

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
                <span>
                    <AlertDialog open={this.state.open} onClose={this.handleClose} />
                </span>
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, crudAction), dispatch)
});

export default connect(null, mapDispatchToProps)(MainPage);