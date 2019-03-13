import React from 'react';
import { withStyles, ButtonBase, Button } from '@material-ui/core';
import streamStyles from '../../../styles/streamStyles';

const style = {
    root: streamStyles.root,
    resetbtn : streamStyles.resetbtn,
};

class ZoomPad extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleClick4 = this.handleClick4.bind(this);
        this.handleClick5 = this.handleClick5.bind(this);
        this.handleClick6 = this.handleClick6.bind(this);
        this.handleClick7 = this.handleClick7.bind(this);
        this.handleClick8 = this.handleClick8.bind(this);
        this.handleClick9 = this.handleClick9.bind(this);
        this.reset = this.reset.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    };

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    };

    handleClick1() {
        alert('Test1')
    }
    handleClick2() {
        alert('Test2')
    }
    handleClick3() {
        alert('Test3')
    }
    handleClick4() {
        alert('Test4')
    }
    handleClick5() {
        alert('Test5')
    }
    handleClick6() {
        alert('Test6')
    }
    handleClick7() {
        alert('Test7')
    }
    handleClick8() {
        alert('Test8')
    }
    handleClick9() {
        alert('Test9')
    }
    reset() {
        alert('RESET')
    }

    handleKeyPress(e) {
        if (e.keyCode == 49 || e.keyCode === 97) {
            this.handleClick1();
        } else if (e.keyCode === 50 || e.keyCode === 98) {
            this.handleClick2();
        } else if (e.keyCode === 51 || e.keyCode === 99) {
            this.handleClick3();
        } else if (e.keyCode === 52 || e.keyCode === 100) {
            this.handleClick4();
        } else if (e.keyCode === 53 || e.keyCode === 101) {
            this.handleClick5();
        } else if (e.keyCode === 54 || e.keyCode === 102) {
            this.handleClick6();
        } else if (e.keyCode === 55 || e.keyCode === 103) {
            this.handleClick7();
        } else if (e.keyCode === 56 || e.keyCode === 104) {
            this.handleClick8();
        } else if (e.keyCode === 57 || e.keyCode === 105) {
            this.handleClick9();
        } else if (e.keyCode === 48 || e.keyCode === 96) {
            this.reset();
        }
    }

    render() {
        const { classes } = this.props;

        return(
            <div>
                <div className={classes.root}>
                    <ButtonBase disableRipple onClick={this.handleClick7} />
                    <ButtonBase disableRipple onClick={this.handleClick8} />
                    <ButtonBase disableRipple onClick={this.handleClick9} />
                    <ButtonBase disableRipple onClick={this.handleClick4} />
                    <ButtonBase disableRipple onClick={this.handleClick5} />
                    <ButtonBase disableRipple onClick={this.handleClick6} />
                    <ButtonBase disableRipple onClick={this.handleClick1} />
                    <ButtonBase disableRipple onClick={this.handleClick2} />
                    <ButtonBase disableRipple onClick={this.handleClick3} />
                </div>
                <Button size="large" variant="contained" className={classes.resetbtn} onClick={this.reset}>RESET</Button>
            </div>
        )
    }
};

export default withStyles(style)(ZoomPad);