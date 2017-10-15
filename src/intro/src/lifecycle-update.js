import React, { Component } from 'react';

export default class LifeCycleButtonComponent extends Component {
    constructor() {
        super();
        this.state = { clickCount: 0 };
    }
    // 1
    componentWillReceiveProps() { console.log('componentWillReceiveProps'); }
    // 2
    shouldComponentUpdate() { console.log('shouldComponentUpdate'); return true; }
    // 3
    componentWillUpdate() { console.log('componentWillUpdate'); }
    // 4
    render() {
        return (
            <button onClick={this.onClick}>{this.props.title} {this.state.clickCount}</button>
        )
    }
    // 5
    componentDidUpdate() { console.log('componentDidUpdate'); }

    onClick = () => {
        // this.state.clickCount++;
        this.setState({ clickCount: this.state.clickCount + 1 })
    }
}
