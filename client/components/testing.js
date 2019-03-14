import React from 'react';
import Image from '../../public/videostreamexample.jpg';

class Testing extends React.Component {
    render() {
        
        const menu = {
            width: '75%',
            float: 'left',
            border: '1px solid red'
        };

        const main = {
            width: '25%',
            float: 'left',
            border: '1px solid red'
        };

        const imgs = {
            width: '100%',
            height: 'auto'
        };

        const controlpanel = {
            width: '75%',
            float: 'left',
            border: '1px solid red'
        };

        return(
            <div>
                <div style={menu}>
                    <img src={Image} style={imgs}/>
                </div>
                <div style={main}>
                    <h1>hello</h1>
                </div>
                <div style={controlpanel}>
                    Control Panel
                </div>
            </div>
        )
    }    
};

export default Testing;