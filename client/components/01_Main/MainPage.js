import React from 'react';
import Stream from './videostream/Stream';
import ControlPanel from './bottombar/ControlPanel';
import Sidebar from './sidebar/SideBar';
import AlertDialog from './alert/AlertDialog';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as commonAction from '../../actions/commonAction';
import * as crudAction from '../../actions/crudAction';
import io from 'socket.io-client';

let socket = io.connect("http://localhost:9000");

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            detection: [],
            id: 0
        };
        this.handleClose = this.handleClose.bind(this);
        this.open = this.open.bind(this);
    };

    handleClose() {
        this.props.machine.machineResume();
        this.setState({ 
            open: false,
            detection: []
        });
    };

    open(data) {
        this.state.detection.push(data);
        this.props.machine.loadData(this.state.detection);
        this.setState({
            open: this.props.state.mach.open
        });
    }

    componentDidUpdate(prevProps) {
        if ((this.props.state.mach.open !== prevProps.state.mach.open) && (this.props.state.mach.open)) {
            this.props.machine.machineHalted();
            this.props.actions.usb({data: 'r'});
        }
    }

    componentDidMount() {
        socket.on('dataAA', this.open);
    }

    componentWillUnmount() {
        socket.off('dataAA')
        socket.disconnect()
    }

    render() {

        const stream = {
            width: '75%',
            float: 'left'
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
                <AlertDialog open={this.state.open} onClose={this.handleClose} />
            </div>
        )
    }
};

function mapStateToProps(state) {
    return { state }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, crudAction), dispatch),
    machine: bindActionCreators(Object.assign({}, commonAction), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);