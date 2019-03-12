import React from 'react';

class TestingPage extends React.Component {

    // To get browser height and width
    constructor(props) {
        super(props);
        this.state = {
            height: props.height,
            width: props.width,
        };
    }

    componentWillMount() {
        this.setState({
            height: window.innerHeight + 'px',
            width: window.innerWidth + 'px'
        });
    }

    render() {
        return(
            <div>
                <p>{this.state.width}</p>
                <p>{this.state.height}</p>
            </div>
        )
    }

    // // Key bindings
    // constructor(props) {
    //     super(props);
    //     this.handleQ = this.handleQ.bind(this);
    //     // this.handleR = this.handleR.bind(this);
    //     this.handleS = this.handleS.bind(this);
    //     this.handleKeyPress = this.handleKeyPress.bind(this);
    // }

    // componentDidMount() {
    //     document.addEventListener('keydown', this.handleKeyPress);
    // }

    // componentWillUnmount() {
    //     document.removeEventListener('keydown', this.handleKeyPress);
    // }

    // handleQ() {
    //     alert('Q is pressed!')
    // }

    // // handleR() {
    // //     alert('R is pressed!')
    // // }

    // handleS() {
    //     alert('S is pressed!')
    // }

    // handleKeyPress(e) {
    //     if (e.keyCode === 81) {
    //         // Q
    //         this.handleQ();
    //     } else if (e.keyCode === 82) {
    //         // R
    //         alert('RRRRRRRRR');
    //     } else if (e.keyCode === 83) {
    //         // S
    //         this.handleS();
    //     }
    // }

    // render() {
    //     return (
    //         <div>
    //             <h1>Hi</h1>
    //         </div>
    //     )
    // }
};

export default TestingPage;