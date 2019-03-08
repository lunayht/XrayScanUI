import React from 'react';
import Video from '../../../../public/videostreamexample.jpg';

class Stream extends React.Component {
    render() {
        const videostyle = {
            height: 650,
            width: 1155.56
        };

        return(
            <div>
                <img style={videostyle} src={Video} />
            </div>
        )
    }
};

export default Stream;