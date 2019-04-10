import React from 'react';
import Stream from './videostream/Stream';
import ControlPanel from './bottombar/ControlPanel';
import Sidebar from './sidebar/SideBar';
import AlertDialog from './alert/AlertDialog';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as crudAction from '../../actions/crudAction';
import socketIOClient from 'socket.io-client';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            endpoint: "http://localhost:3000",
            open: false
        };
        this.handleClose = this.handleClose.bind(this);
    };

    componentDidMount() {
        const socket = socketIOClient(this.state.endpoint);
		socket.on('data', () => {
			this.props.actions.usb({data: 'r'});
			this.setState({ 
				open: true
            });
		})
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