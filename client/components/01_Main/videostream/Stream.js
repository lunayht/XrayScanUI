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
                {/* <img className={classes.video} src="http://127.0.0.1:8080/?action=stream&amp;amp;ignored.mjpg" 
                alt="http://127.0.0.1:8080/?action=stream&amp;amp;ignored.mjpg"></img> */}
                {/* <img className={classes.video} src="http://77.22.179.4:91/videostream.cgi?user=admin&pwd="></img> */}
                {/* <video className={classes.video} src={'http://localhost:8080/video'} autoPlay muted /> */}
                    {/* <source src={'http://localhost:8080/video.ogg'} /> */}
                    {/* This browser does not support the video tag. */}
                {/* </video> */}
                <video className={classes.video} controls="" autoplay="" name="media" muted>
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4"/>
                </video>
                <ZoomPad />
            </div>
        )
    }
};

// In VLC, the sout command is :sout=#transcode{vcodec=theo,vb=800,acodec=none}:http{mux=ogg,dst=:8080/video.ogg}:sout-keep

export default (withStyles(style)(Stream));