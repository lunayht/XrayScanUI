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
                <video className={classes.video} src={'http://localhost:8080/video'} autoPlay muted />
                    {/* <source src={'http://localhost:8080/video.ogg'} /> */}
                    {/* This browser does not support the video tag. */}
                {/* </video> */}
                <ZoomPad />
            </div>
        )
    }
};

// In VLC, the sout command is :sout=#transcode{vcodec=theo,vb=800,acodec=none}:http{mux=ogg,dst=:8080/video.ogg}:sout-keep

export default (withStyles(style)(Stream));