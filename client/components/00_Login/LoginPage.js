import React from 'react';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import Form from './Form';
import background from '../../../public/LoginScreen.jpg';
import history from '../../services/utils/history';

const styles = {
    container: {
        position: 'relative'
    },
    background: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '100%',
        maxHeight: '100vh',
        height: '-webkit-fill-available',
        zIndex: -1
    },
    root: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: '0.9',
    },
    cardHeader: {
        paddingBottom: '0',
        paddingTop: '30px'
    },
    cardcontent: {
        paddingTop: '0'
    }
};

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    };
    
    submitForm() {
        history.push('/main');
    }

    render() {
        const { classes } = this.props;

        return(
            <div className={classes.container}>
                <img className={classes.background} src={background} />
                <div className={classes.root}>
                    <Card className={classes.card}>
                        <CardHeader className={classes.cardHeader} title="Sign In" />
                        <CardContent className={classes.cardcontent}>
                            <Form onSubmit={this.submitForm}/>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
};

export default (withStyles(styles)(LoginPage));