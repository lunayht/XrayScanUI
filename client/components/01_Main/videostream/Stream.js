import React from 'react';
import { withStyles } from '@material-ui/core';
import styles from '../../../styles/styles';
import ZoomPad from './zoomPad';

const style = {
    container: styles.container,
    video: styles.video,
};

class Stream extends React.Component {

    render() {
        const { classes } = this.props;

        return(
            <div className={classes.container}>
                <video className={classes.video} src={'./video.mp4'} loop autoPlay muted/>
                <ZoomPad />
            </div>
        )
    }
};

export default (withStyles(style)(Stream));