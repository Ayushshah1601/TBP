import React, { Component } from 'react';

class NotFound extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };

    }

    render() {
        return (
            <div>
                <h1> Oops! This page does not exist</h1>
                {/* <h5>Go back to Homepage?</h5>
                <Link to ="/">Homepage</Link>
                <h5>Go back to Dashboard></h5></h6>
                <Link to ="/">Homepage</Link> */}
            </div>
        );
    }
}

export default NotFound;