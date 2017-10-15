import React, { Component } from 'react';
import axios from 'axios';

export default class ButtonComponent extends Component {
    constructor() {
        super();
        this.state = { clickCount: 0, person: {} };
    }
    onClick = () => {
        // this.state.clickCount++;
        const next = this.state.clickCount + 1;
        this.setState({ clickCount: next });
        axios.get(`https://swapi.co/api/people/${next}`).then(res => {
            const data = res.data;
            this.setState({ person: data });
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.onClick}>{this.props.title} {this.state.clickCount}</button>
                <p>{JSON.stringify(this.state.person)}</p>
            </div>
        )
    }
}
