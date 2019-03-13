import React from 'react';
import Video from '../../../../public/videostreamexample.jpg';
import { withStyles } from '@material-ui/core';
import streamStyles from '../../../styles/streamStyles';
import ZoomPad from './zoomPad';

const style = {
    container: streamStyles.container,
    video: streamStyles.video,
};

class Stream extends React.Component {

    render() {
        const { classes } = this.props;

        return(
            <div className={classes.container}>
                <img className={classes.video} src={Video} />
                <ZoomPad />
            </div>
        )
    }
};

export default withStyles(style)(Stream);