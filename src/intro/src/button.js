import React, { Component } from 'react';

export default class ButtonComponent extends Component {
    constructor() {
        super();
        this.state = { clickCount: 0 };
    }
    onClick = () => {
        // this.state.clickCount++;
        this.setState({ clickCount: this.state.clickCount + 1 })
    }
    render() {
        return (
            <button onClick={this.onClick}>{this.props.title} {this.state.clickCount}</button>
        )
    }
}
