import React, { Component } from 'react';

export default class Child extends Component {

    componentDidMount() {
        console.log("Child did mount")
    }


    render() {
        console.log("Child rendering")
        return (
            <div>Child Component</div>
        );
    }
}
