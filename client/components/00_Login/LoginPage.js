import React from 'react';
import { Card, CardHeader, CardContent, withStyles } from '@material-ui/core';
import Form from './Form';
import background from '../../../public/LoginScreen.jpg';
import history from '../../services/utils/history';
import styles from '../../styles/styles';

const style = {
    container: styles.login_container,
    background: styles.login_background,
    root: styles.login_root,
    card: styles.login_card,
    cardHeader: styles.login_cardHeader,
    cardcontent: styles.login_cardcontent
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

export default (withStyles(style)(LoginPage));