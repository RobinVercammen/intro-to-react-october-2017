import React, { Component } from 'react';

export default class LifeCycleButtonComponent extends Component {
    // 1
    constructor() {
        super();
        this.state = { clickCount: 0 };
    }
    // 2
    componentWillMount() { console.log('will mount'); }
    // 3    
    render() {
        return (
            <button onClick={this.onClick}>{this.props.title} {this.state.clickCount}</button>
        )
    }
    // 4
    componentDidMount() { console.log('did mount'); }

    onClick = () => {
        // this.state.clickCount++;
        this.setState({ clickCount: this.state.clickCount + 1 })
    }
}
