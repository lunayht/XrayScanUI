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
import Left from '@material-ui/icons/Menu';
import { Button, Drawer } from '@material-ui/core';
import { getLocalStorage, setLocalStorage } from '../../utils/storageUtil';

let socket = io.connect("http://192.168.1.14:7000");
let now, stop;

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            drawer: false
        };
        this.handleClose = this.handleClose.bind(this);
        this.load = this.load.bind(this);
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this)
    };

    handleClose() {
        stop = new Date();
        var diff = stop - now;
        var acc = getLocalStorage('stopTime');
        var answer = acc + diff;
        setLocalStorage('stopTime', answer);
        this.props.machine.machineResume([]);
        this.setState({ 
            open: false
        });
        
    };

    load(data) {
        this.props.machine.loadData(data);
    };

    handleDrawerOpen() {
        this.setState({
            drawer: true
        })
    }

    handleDrawerClose() {
        this.setState({
            drawer: false
        })
    };

    componentDidUpdate(prevProps) {
        if ((this.props.state.mach.open !== prevProps.state.mach.open) && (this.props.state.mach.open)) {
        	this.props.machine.machineHalted(this.props.state.mach.displaydata);
	        this.setState({
	            open: this.props.state.mach.open
	        });
            crudAction.usb({data: 'r'});
            now = new Date();
        } 
    };

    componentDidMount() {
        socket.on('dataAA', this.load);
    };

    componentWillUnmount() {
        socket.off('dataAA')
    };

    render() {

        const stream = {
            width: '100%',
            overflow: 'hidden',
            position: 'relative'
        };

        const sidebar = {
            zIndex: 3,
            position: 'absolute',
            top: 0,
            right: 0,
        };

        const controlpanel = {
            width: '100%',
            position: 'relative'
        };

        const btn = {
            margin: 10
        }

        return(
            <div>
                <AlertDialog open={this.state.open} onClose={this.handleClose} />
                <div style={stream}>
                    <Stream />
                </div>
                {/* <div style={sidebar}>
                    <Sidebar />
                </div> */}
                <div style={controlpanel}>
                    <ControlPanel />
                </div>
                <div style={sidebar}>
                    <Button style={btn} onClick={this.handleDrawerOpen}>
                        <Left />
                    </Button>
                    <Drawer anchor="right" open={this.state.drawer} onClose={this.handleDrawerClose}>
                        <Sidebar />
                    </Drawer>
                </div>
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